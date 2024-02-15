import classnames from "classnames";
import React, {FC, memo, ReactNode} from "react";
import {Loader} from "../Loader/Loader";

import cls from './Button.module.scss'

interface ButtonProps {
	type?: 'button' | 'submit';
	children: ReactNode;
	onClick?: ( event: React.MouseEvent<HTMLButtonElement>) => void;
	variant?: "primary" | "secondary" | "select";
	className?: string;
	isLoading?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	isActive?: boolean
}

export const Button: FC<ButtonProps> = memo(({
	                                             children,
	                                             type = "button",
	                                             onClick,
	                                             variant = "primary",
	                                             className,
	                                             isLoading = false,
	                                             size = 'xl',
	                                             isActive = false,
                                             }) => {
	return (
		<button
			className={classnames(
				cls.button,
				cls[variant],
				cls[size],
				cls[isActive ? 'active' : ''],
				cls[isLoading ? 'loading' : ''],
				className)}
			onClick={onClick}
			type={type}
		>
			{isLoading ? <Loader width={40} height={40}/> : children}
		</button>
	);
});
