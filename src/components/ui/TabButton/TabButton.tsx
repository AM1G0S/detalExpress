import {ButtonHTMLAttributes, FC, memo} from "react";

import cls from './TabButton.module.scss'

interface ButtonProps {
	children: string;
	type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	isActive: boolean;
	onClick: () => void;
}

export const TabButton: FC<ButtonProps> = memo((props) => {
	const {children, type, isActive, onClick} = props;
	
	return (
		<button
			className={cls.button + ' ' + (isActive ? cls.active : '')}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
});
