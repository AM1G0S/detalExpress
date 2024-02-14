import axios from "axios";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {FC, memo, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {setUser} from "../../../redux/slices/userSlice.ts";
import {Button} from "../Button/Button.tsx";
import {Checkbox} from "../Checkbox/Checkbox.tsx";
import {Input} from "../Input/Input.tsx";
import cls from "./LoginFrom.module.scss";

type Inputs = {
	email: string;
	password: string;
	checkbox: boolean;
};

interface IProps {
	variant: 'login' | 'register';
}

export const LoginFrom: FC<IProps> = memo(({variant}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	
	const dispatch = useDispatch();
	
	const {
		register,
		handleSubmit,
		formState: {errors},
		watch,
	} = useForm<Inputs>({
		mode: 'onBlur',
	});
	
	const handleLogin = async (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				navigate('/');
			})
			.catch(console.error)
			.finally(() => setIsLoading(false))
	}
	
	const handleSingUp = async (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				navigate('/');
			})
			.catch(console.error)
			.finally(() => setIsLoading(false))
	}
	
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoading(true);
			// const url = variant === 'login' ? '/api/login' : '/api/register';
			
			if (variant === 'login') {
				await handleLogin(data.email, data.password);
			} else if (variant === 'register') {
				await handleSingUp(data.email, data.password);
			}
			
		} catch (error) {
			console.error(error);
			setIsLoading(false);
			console.log('Ошибка при отправке сообщения');
		}
	};
	
	return (
		<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={cls.inputs}>
				<Input
					name={'email'}
					type={"email"}
					label={'Email'}
					placeholder={"Введите почту"}
					register={register}
					errors={errors}
				/>
				<Input
					name={'password'}
					type={"password"}
					label={'Пароль'}
					placeholder={"Введите пароль"}
					register={register}
					errors={errors}
				/>
			</div>
			
			{variant === 'login' && (
				<div className={cls.check}>
					<Checkbox
						id={'loginFromCheckbox'}
						label={'Запомнить меня'}
						register={register}
						isRequired={false}
					/>
					<Link className={cls.reset} to={'reset'}>Забыли пароль?</Link>
				</div>
			)}
			
			<Button className={cls.btn} isLoading={isLoading} type={'submit'}>
				{variant === 'login' ? 'Отправить запрос' : 'Зарегистрироваться'}
			</Button>
		</form>
	);
});
