import {FC, memo, useState} from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {Button, Input, StatusModal} from "../../components";
import cls from "./PasswordRecovery.module.scss"

type Inputs = {
	email: string;
};

export const PasswordRecovery: FC = memo(() => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<Inputs>({
		mode: 'onBlur',
	});
	const [status, setStatus] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	
	const onSubmit: SubmitHandler<Inputs> = async ({email}) => {
		const auth = getAuth();
		try {
			await sendPasswordResetEmail(auth, email);
			setStatus(true);
			setIsOpen(true);
		} catch (error) {
			console.error(error);
			setStatus(false);
			setIsOpen(true);
		}
	};
	
	return (
		<div className={cls.wrapper}>
			<h1 className={cls.title}>Восстановление пароля</h1>
			<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name={'email'}
					type={'email'}
					errors={errors}
					placeholder={'Введите ваш email'}
				/>
				
				<Button type={'submit'} variant={'primary'} size={'xl'}>Отправить</Button>
			</form>
			
			<div>
				Я помню пароль
				<Link className={cls.reset} to={'/login'}>Войти</Link>
			</div>
			
			<StatusModal
				title={
					status ? 'Успех!' : 'Ошибка!'
				}
				text={
					status ? 'Ссылка для сброса пароля отправлена на ваш email.' : 'Ошибка при отправке email. Пожалуйста, повторите попытку позже.'
				}
				isOpen={isOpen}
				status={
					status ? 'success' : 'error'
				}
				onClose={() => setIsOpen(false)}
			/>
		
		</div>
	)
})
