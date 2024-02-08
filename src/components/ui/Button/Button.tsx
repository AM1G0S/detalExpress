import {FC, ReactNode} from "react";

import cls from './Button.module.scss'

interface ButtonProps {
	type?: 'button' | 'submit';
	disabled?: boolean;
	children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, disabled, type='button'}) => {
	return (
		<button className={cls.button} disabled={disabled} type={type}>
			{children}
		</button>
	)
}
