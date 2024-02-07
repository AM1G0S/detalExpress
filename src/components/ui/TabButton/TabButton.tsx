import {ButtonHTMLAttributes, FC, memo} from "react";

import {Button} from "./styled.ts";

interface ButtonProps {
	children: string;
	type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	isActive: boolean;
	onClick: () => void;
}

export const TabButton: FC<ButtonProps> = memo((props) => {
	const {children, type, isActive, onClick} = props;
	
	return (
		<Button
			type={type}
			isActive={isActive}
			onClick={onClick}
		>
			{children}
		</Button>
	);
});
