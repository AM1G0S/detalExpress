import {FC, memo, useCallback, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {getAuth, updateEmail, updatePassword, sendEmailVerification} from "firebase/auth";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../../../firebase";
import {setUserName} from "../../../redux/slices/userSlice.ts";
import {RootState} from "../../../redux/store";
import {StatusModal} from "../../modals/StatusModal/StatusModal";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import cls from "./UserProfile.module.scss";

type Inputs = {
	email: string;
	password: string;
	name: string;
	lastName: string;
	phone: string;
};

const inputFields = [
	{type: "text", placeholder: "Имя", name: "name"},
	{type: "text", placeholder: "Фамилия", name: "lastName"},
	{type: "tel", placeholder: "+ 7 (___) ___-__-__", name: "phone"},
	{type: "email", placeholder: "Электронная почта", name: "email"},
];

export const UserProfile: FC = memo(() => {
	const dispatch = useDispatch();
	const [emailVerified, setEmailVerified] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState<Inputs | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const auth = getAuth();
	const userId = useSelector((state: RootState) => state.user.id);
	
	const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
		mode: 'onBlur',
	});
	
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setEmailVerified(user.emailVerified);
			}
		});
		
		return () => unsubscribe();
	}, []);
	
	
	useEffect(() => {
		const fetchRequests = async () => {
			setIsLoading(true);
			// @ts-ignore
			const docRef = doc(db, "users", userId);
			const docSnap = await getDoc(docRef);
			
			if (docSnap.exists()) {
				const profileData = docSnap.data() as Inputs;
				setUserData(profileData);
				setIsLoading(false);
			} else {
				console.log("No such document!");
				setIsLoading(false);
			}
		};
		fetchRequests().then();
	}, [userId, db]);
	
	const sendVerifEmailLink = async () => {
		const user = auth.currentUser;
		setIsLoading(true)
		if (user) {
			await sendEmailVerification(user);
			setResponseState(true, "Ссылка для верификации почты отправлена");
			setIsLoading(false)
			setIsOpen(true);
		}
	}
	
	const setResponseState = (status: boolean, message: string) => {
		setStatus(status);
		setMessage(message);
		setIsOpen(true);
		setIsLoading(false);
	};
	
	const updateUserProfile = useCallback(async (data: Inputs) => {
		if (!userId) return;
		
		if (!data.name && !data.lastName && !data.phone) {
			return;
		}
		
		const updateData = {
			...(data.name && {name: data.name}),
			...(data.lastName && {lastName: data.lastName}),
			...(data.phone && {phone: data.phone}),
		};
		
		if (Object.keys(updateData).length > 0) {
			try {
				await updateDoc(doc(db, "users", userId), updateData);
				setResponseState(true, "Ваши данные профиля обновлены");
				dispatch(setUserName({name: data.name}));
			} catch (error) {
				setResponseState(false, "Ошибка при обновлении профиля");
			}
		}
	}, [userId, db]);
	
	const updateUserAuthInfo = useCallback(async (data: Inputs) => {
		const user = auth.currentUser;
		if (!user) return;
		
		try {
			// Проверяем, изменился ли email и является ли он валидным
			if (data.email && data.email !== user.email) {
				// Сначала обновляем электронную почту пользователя
				await updateEmail(user, data.email);
				
				// Затем отправляем письмо с подтверждением на новый адрес
				await sendEmailVerification(user);
				
				// Обновляем электронную почту в базе данных, если требуется
				// @ts-ignore
				await updateDoc(doc(db, "users", userId), {email: data.email});
				
				setResponseState(true, "Email обновлен! Пожалуйста, подтвердите свою почту. Ссылка для подтверждения отправлена на ваш новый адрес электронной почты.");
			}
			
			// Обновление пароля, если указан
			if (data.password) {
				await updatePassword(user, data.password);
				setResponseState(true, "Пароль обновлен");
			}
		} catch (error) {
			console.error("Ошибка при обновлении информации пользователя: ", error);
			if ((error as FirebaseError).code === "auth/operation-not-allowed") {
				setResponseState(false, "Пожалуйста, подтвердите сначала вашу текущую электронную почту.");
			} else if ((error as FirebaseError).code === "auth/requires-recent-login") {
				setResponseState(false, "Для выполнения этой операции необходимо недавнее вход в систему. Пожалуйста, войдите в систему и повторите попытку.");
			} else {
				setResponseState(false, "Ошибка при обновлении информации аутентификации: " + (error as FirebaseError).message);
			}
		}
	}, [auth, userId, db]);
	
	const onSubmit = async (data: Inputs) => {
		setIsLoading(true);
		
		await Promise.all([updateUserProfile(data), updateUserAuthInfo(data)]);
		
		setIsLoading(false);
	};
	
	return (
		<div className={cls.wrapper}>
			<h2 className={cls.title}>
				{isEditing ? 'Настройки профиля' : 'Информация профиля'}
			</h2>
			{
				isEditing ? (
					<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={cls.profileInfo}>
							{inputFields.map((field) => (
								<Input
									key={field.name}
									type={field.type}
									placeholder={field.placeholder}
									name={field.name}
									register={register}
									isRequired={false}
									errors={errors}
								/>
							))}
						</div>
						
						<div className={cls.password}>
							<h3 className={cls.subtitle}>Пароль</h3>
							<Input
								type="password"
								placeholder="Новый пароль"
								name={'password'}
								register={register}
								isRequired={false}
							/>
						</div>
						
						<div className={cls.buttons}>
							<Button
								type="submit"
								variant="primary"
								size="xl"
								isLoading={isLoading}
								className={cls.profileBtn}
							>
								Сохранить
							</Button>
							<Button
								type="button"
								variant="secondary"
								size="xl"
								className={cls.profileBtn}
								onClick={() => setIsEditing(prev => !prev)}
							>
								Отменить
							</Button>
						</div>
					</form>
				) : (
					<div className={cls.profileInner}>
						<ul className={cls.infoList}>
							<li className={cls.infoItem}>
								<span className={cls.itemLabel}>Имя</span>
								<span className={cls.itemValue}>{isLoading ? 'загрузка...' : userData?.name || 'Не указано'}</span>
							</li>
							<li className={cls.infoItem}>
								<span className={cls.itemLabel}>Фамилия</span>
								<span className={cls.itemValue}>{isLoading ? 'загрузка...' : userData?.lastName || 'Не указано'}</span>
							</li>
							<li className={cls.infoItem}>
								<span className={cls.itemLabel}>Телефон</span>
								<span className={cls.itemValue}>{isLoading ? 'загрузка...' : userData?.phone || 'Не указано'}</span>
							</li>
							<li className={cls.infoItem}>
								<span className={cls.itemLabel}>Эл. почта</span>
								<span className={cls.itemValue}>{isLoading ? 'загрузка...' : userData?.email || 'Не указано'}</span>
								{!emailVerified && (
									<>
									<span
										className={cls.verifyEmailBadge}>Подтвердите почту! Ссылка направлена на электронную почту.</span>
										<Button
											isLoading={isLoading}
											type={'button'}
											className={cls.emailBtn}
											variant={'secondary'}
											onClick={sendVerifEmailLink}
										>
											Отправить ссылку
										</Button>
									</>
								)}
							</li>
						</ul>
						
						<Button
							type="button"
							variant="primary"
							size="lg"
							className={cls.profileBtn}
							onClick={() => {
								setIsEditing(true);
								setIsLoading(false);
							}}
						>
							Изменить
						</Button>
					</div>
				)
			}
			
			<StatusModal
				title={status ? 'Успех!' : 'Ошибка!'}
				text={message}
				isOpen={isOpen}
				status={status ? 'success' : 'error'}
				onClose={() => {
					setIsOpen(false)
					{
						status && setIsEditing(false)
					}
				}}
			/>
		</div>
	);
});
