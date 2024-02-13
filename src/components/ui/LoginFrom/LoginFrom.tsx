import axios from "axios";
import {FC, memo, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {Button} from "../Button/Button.tsx";
import {Checkbox} from "../Checkbox/Checkbox.tsx";
import {Input} from "../Input/Input.tsx";
import cls from "./LoginFrom.module.scss";

type Inputs = {
	mainInput: string | number;
	replacement: string;
	name: string;
	phone: number;
	checkbox: boolean;
};

interface IProps {
	variant: 'login' | 'register';
}

export const LoginFrom: FC<IProps> = memo(({variant}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<Inputs>({
		mode: 'onBlur',
	});
	
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoading(true);
			
			// Здесь может быть изменен URL в зависимости от действия: регистрация или вход
			const url = variant === 'login' ? '/api/login' : '/api/register';
			const response = await axios.post(url, {
				message: data,
			});
			
			if (response.data.success) {
				setIsLoading(false);
				alert('Запрос успешно отправлен!');
				reset();
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
