import classnames from "classnames";
import {FC, memo, useState} from "react";

import cls from './Checkbox.module.scss'

interface CheckboxProps {
	id: string;
	register: Function;
	error?: string | undefined;
	label?: string;
	className?: string;
	isRequired?: boolean;
	isChecked?: boolean
}

export const Checkbox: FC<CheckboxProps> = memo(({id, register, error, label, className = '', isRequired, isChecked}) => {
	const [checked, setChecked] = useState(isChecked);
	
	return (
		<div className={cls.inner}>
			<input
				className={cls.input}
				{...register("checkbox", {
					required: isRequired ? 'Это поле обязательно' : false
				})}
				id={id}
				type="checkbox"
				checked={checked}
				onClick={() => setChecked(!checked)}
			/>
			
			<label className={classnames(cls.label, {[className]: className, [cls.inputError]: error})} htmlFor={id}>
				{label}
			</label>
		</div>
	);
});
