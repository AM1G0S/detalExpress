import {FC, ReactNode} from "react";

import cls from './Button.module.scss'

interface ButtonProps {
	type?: 'button' | 'submit';
	disabled?: boolean;
	children: ReactNode;
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({children, disabled, type='button', onClick}) => {
	return (
		<button className={cls.button} onClick={onClick} disabled={disabled} type={type}>
			{children}
		</button>
	)
}
