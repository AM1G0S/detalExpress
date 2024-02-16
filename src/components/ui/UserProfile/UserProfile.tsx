import {FC, memo} from "react";
import {useForm} from "react-hook-form";
import {Button} from "../Button/Button.tsx";
import {Input} from "../Input/Input.tsx";
import cls from "./UserProfile.module.scss"

interface UserProfileProps {
}

type Inputs = {
	email: string;
	password: string;
	name: string;
	lastName: string;
	phone: string;
};

export const UserProfile: FC<UserProfileProps> = memo((props) => {
	const {} = props
	
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<Inputs>({
		mode: 'onBlur',
	});
	
	const onSubmit = (data: Inputs) => {
		console.log(data)
	}
	
	return (
		<div className={cls.wrapper}>
			<h2 className={cls.title}>Настройки профиля</h2>
			
			<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={cls.profileInfo}>
					<Input
						type="text"
						placeholder="Имя"
						name={'name'}
						register={register}
						isRequired={false}
					/>
					<Input
						type="text"
						placeholder="Фамилия"
						name={'lastName'}
						register={register}
						isRequired={false}
					/>
					<Input
						type="tel"
						placeholder="+ 7 (___) ___-__-__"
						name={'phone'}
						register={register}
						errors={errors}
						isRequired={false}
					/>
					<Input
						type="email"
						placeholder="Электронная почта"
						name={'email'}
						register={register}
						errors={errors}
						isRequired={false}
					/>
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
				
				<Button
					type="submit"
					variant={'primary'}
					size={'xl'}
				>
					Сохранить
				</Button>
				
			</form>
		</div>
	)
})
