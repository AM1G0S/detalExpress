import {
	ForwardedRef,
	forwardRef,
} from "react";
import cls from "./Input.module.scss";
import classnames from 'classnames';

interface Option {
	label: string;
	value: string;
}

interface InputProps {
	type?: 'text' | 'checkbox' | 'radio' | 'select' | 'tel' | 'textarea';
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
		
		const renderInput = () => {
			switch (type) {
				case 'select':
					return (
						<select
							{...rest}
							ref={ref as ForwardedRef<HTMLSelectElement>}
							className={classnames(cls.input, className, {[cls.error]: isError})}
							{...(register && register(name, {required: isRequired ? errorText : false}))}
						>
							{options?.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					);
				case 'textarea':
					return (
						<textarea
							{...rest}
							ref={ref as ForwardedRef<HTMLTextAreaElement>}
							className={classnames(cls.textarea, className, {[cls.error]: isError})}
							placeholder={placeholder}
							{...(register && register(name, {required: isRequired ? errorText : false}))}
						/>
					);
				case 'radio':
					return options?.map(option => (
						<label key={option.value}>
							<input
								type="radio"
								name={name}
								value={option.value}
								className={classnames(cls.input, {[cls.error]: isError})}
								{...(register && register(name, {required: isRequired}))}
							/>
							{option.label}
						</label>
					));
				default:
					return (
						<input
							{...rest}
							ref={ref as ForwardedRef<HTMLInputElement>}
							className={classnames(cls.input, className, {[cls.error]: isError})}
							type={type}
							placeholder={placeholder}
							{...register(name, {
								required: isRequired ? errorText : false,
								...(type === 'tel' ? {
									pattern: {
										value: /^\d+$/,
										message: "Номер телефона должен содержать только цифры"
									}
								} : {})
							})}
						/>
					);
			}
		};
		
		return (
			<label className={cls.label}>
				{label && <span className={cls.subtitle}>{label}</span>}
				{isError && <span className={cls.errorText}>— {errorMessage}</span>}
				{renderInput()}
			</label>
		);
	}
);
