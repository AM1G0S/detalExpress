import { ForwardedRef, forwardRef, useState } from "react";
import cls from "./Input.module.scss";
import classnames from 'classnames';

interface Option {
	label: string;
	value: string;
}

interface InputProps {
	type?: 'text' | 'textarea' | 'tel' | 'email' | 'password';
	placeholder?: string;
	label?: string;
	isRequired?: boolean;
	className?: string;
	register?: any;
	name: string;
	errors?: any;
	options?: Option[];
	errorText?: string;
}

export const Input = forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, InputProps>((
	{
		type = 'text',
		placeholder,
		className,
		label,
		isRequired = true,
		register,
		name,
		errors,
		options,
		errorText = 'Это поле обязательно к заполнению',
		...rest
	}: InputProps,
	ref: ForwardedRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
	
	const isError = errors && errors[name];
	const errorMessage = isError && errors[name].message ? errors[name].message : errorText;
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	
	const inputType = type === 'password' && isPasswordVisible ? 'text' : type;
	
	return (
		<label className={cls.label}>
			{label && <span className={cls.subtitle}>{label}</span>}
			{isError && <span className={cls.errorText}>— {errorMessage}</span>}
			<div className={classnames({[cls.passBox]: type === 'password'})}>
				<input
					{...rest}
					ref={ref as ForwardedRef<HTMLInputElement>}
					className={classnames(type !== 'textarea' ? cls.input : cls.textarea, className, {[cls.error]: isError})}
					type={inputType}
					placeholder={placeholder}
					{...register(name, {
						required: isRequired ? errorText : false,
						...(type === 'tel' ? {
							pattern: {
								value: /^\d+$/,
								message: "Номер телефона должен содержать только цифры"
							}
						} : {}),
						...(type === 'email' ? {
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Неверный формат (пример: email@mail.ru)"
							}
						} : {})
					})}
				/>
				{type === 'password' && (
					<button
						className={classnames(cls.passVisBtn, {[cls.show]: isPasswordVisible})}
						type='button'
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
						title={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
					>
						<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M6 3.16181C5.31905 3.16181 4.76687 3.62503 4.76687 4.19694C4.76687 4.76849 5.31913 5.23207 6 5.23207C6.68087 5.23207 7.23313 4.76849 7.23313 4.19694C7.23313 3.62503 6.68095 3.16181 6 3.16181ZM4 4.19694C4 3.26937 4.89568 2.51807 6 2.51807C7.10433 2.51807 8 3.26937 8 4.19694C8 5.12402 7.1044 5.87581 6 5.87581C4.8956 5.87581 4 5.12402 4 4.19694Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.78496 1.35437C2.86138 0.563576 4.34957 0 6 0C7.65005 0 9.13822 0.563135 10.2148 1.35374C11.2796 2.13573 12 3.187 12 4.19718C12 5.20736 11.2796 6.25863 10.2148 7.04062C9.13822 7.83123 7.65005 8.39436 6 8.39436C4.34957 8.39436 2.86138 7.83079 1.78496 7.03999C0.720302 6.25785 0 5.2066 0 4.19718C0 3.18777 0.720302 2.13652 1.78496 1.35437ZM2.36591 1.95146C1.42187 2.645 0.89982 3.49687 0.89982 4.19718C0.89982 4.8975 1.42187 5.74937 2.36591 6.4429C3.29818 7.1278 4.58504 7.61247 6 7.61247C7.41474 7.61247 8.70161 7.12814 9.63392 6.44345C10.578 5.75015 11.1002 4.89829 11.1002 4.19718C11.1002 3.49607 10.578 2.64422 9.63392 1.95091C8.70161 1.26622 7.41474 0.781889 6 0.781889C4.58504 0.781889 3.29818 1.26657 2.36591 1.95146Z"></path>
						</svg>
					</button>
				)}
			</div>
		</label>
	);
});
