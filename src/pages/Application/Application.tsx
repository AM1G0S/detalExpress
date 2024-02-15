import axios from "axios";
import classnames from "classnames";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {Checkbox, Input, StatusModal} from "../../components";
import {DeliveryModal} from "../../components";
import {Button} from "../../components";
import {db} from "../../firebase.ts";
import {useAuth} from "../../hooks/use-auth.ts";
import {RootState} from "../../redux/store.ts";

import cls from "./Application.module.scss"

type Inputs = {
	mainInput: string | number
	replacement: string
	name: string
	phone: number
	checkbox: boolean
}

const Application: FC = () => {
	const mainInputValue = useSelector((state: RootState) => state.application.mainInput)
	const deliveryCity = useSelector((state: RootState) => state.application.delivery);
	const deliveryAddress = useSelector((state: RootState) => state.application.address);
	const userId = useSelector((state: RootState) => state.user.id);
	
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isRequestModal, setIsRequestModal] = useState<boolean>(false);
	const [isRequestStatus, setIsRequestStatus] = useState<'success' | 'error'>('error');
	
	const {isAuth} = useAuth();
	
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
		defaultValues: {
			mainInput: mainInputValue,
		}
	})
	
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoading(true)
			
			// @ts-ignore
			const docRef = await addDoc(collection(db, "requests"), {
				userId: userId,
				title: data.mainInput,
				text: data.replacement,
				address: `${deliveryCity} (${deliveryAddress})`,
				time: serverTimestamp(),
			});
			
			const message = `<b>Заявка с сайта</b>\n\n` +
				`<b>Номер или марка машины:</b>\n${data.mainInput}\n` +
				`<b>Список запчастей:</b>\n${data.replacement || "Не указано"}\n` +
				`<b>Имя:</b> ${data.name}\n` +
				`<b>Телефон:</b> ${data.phone}\n` +
				`<b>Адрес:</b>\n` + `${deliveryCity} - ${deliveryAddress}`;
			
			const response = await axios.post('/api/send-message', {
				message: message,
				parse_mode: 'html'
			});
			
			if (response.data.success) {
				setIsLoading(false)
				setIsRequestStatus('success');
				setIsRequestModal(true)
				reset();
			}
			
		} catch (error) {
			setIsLoading(false)
			setIsRequestStatus('error');
			setIsRequestModal(true)
			console.log('Ошибка при отправке сообщения: ', error);
		}
	};
	
	return isAuth ? (
		<>
			<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					name={'mainInput'}
					label={'VIN-номер или марка машины'}
					placeholder={'XTAGFL110KY343166'}
					register={register}
					errors={errors}
				/>
				
				<Input
					type={"textarea"}
					name={'replacement'}
					label={'Укажите список запчастей'}
					placeholder={'Диски, тряпки, антифриз, грм, помпа'}
					register={register}
					errors={errors}
					isRequired={false}
				/>
				
				<div className={cls.formBox}>
					<Input
						name={'name'}
						label={'Имя'}
						placeholder={'Андрей'}
						errorText={'Введите Имя'}
						register={register}
						errors={errors}
					/>
					
					<Input
						name={'phone'}
						label={'Телефон'}
						placeholder={'89194121355'}
						errorText={'Введите номер телефона'}
						register={register}
						errors={errors}
						type={'tel'}
					/>
				</div>
				
				<div className={cls.delivery}>
					<p className={cls.deliveryTitle}>Пункт выдачи</p>
					<div className={cls.deliveryBox}>
						<span className={cls.adress}>
							{deliveryCity} - {deliveryAddress}
						</span>
						<Button size={"lg"} onClick={() => setIsModalOpen(!isModalOpen)}>Изменить</Button>
					</div>
				</div>
				
				<div>
					<label className={cls.agree}>
						<Checkbox
							id="myCheckbox"
							register={register}
							error={errors.checkbox?.message}
							className={cls.checkbox}
							isRequired={true}
						/>
						<span>
					Согласен на обработку персональных данных в соответствии с <Link
							to="/politic">Политикой конфиденциальности</Link>
						</span>
					</label>
					{errors.checkbox && <p className={classnames(cls.errorText, cls.checkboxError)}>Примите оферту</p>}
				</div>
				
				<Button isLoading={isLoading} type={'submit'}>
					Отправить запрос
				</Button>
			</form>
			
			<DeliveryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}/>
			
			<StatusModal
				isOpen={isRequestModal}
				status={isRequestStatus}
				title={
					isRequestStatus === 'error' ? 'Ошибка!' : 'Спасибо!'
				}
				text={
					isRequestStatus === 'error' ?
						'Ваш запрос не отправлен, повторите попытку позже.' :
						'Ваш запрос успешно отправлен.'
				}
				onClose={() => setIsRequestModal(false)}
			/>
		</>
	) : (
		<Navigate to={'/login'}/>
	)
}

export default Application
