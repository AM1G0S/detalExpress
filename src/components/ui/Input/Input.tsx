import {ChangeEvent, ForwardedRef, forwardRef} from "react";

import cls from "./Input.module.scss";

interface InputProps {
	type: string;
	placeholder: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, placeholder, onChange, value, className, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<input
				{...rest}
				ref={ref}
				className={`${cls.input} ${className}`}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		);
	}
);
