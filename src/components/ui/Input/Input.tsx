import {ChangeEvent, FC, memo} from "react";

import cls from "./Input.module.scss";

interface InputProps {
	type: string;
	placeholder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = memo((props) => {
	const {type, placeholder, onChange, value} = props;
	
	return (
		<input
			className={cls.input}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
});
