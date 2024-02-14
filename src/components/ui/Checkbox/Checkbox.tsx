import classnames from "classnames";
import {FC, memo} from "react";

import cls from './Checkbox.module.scss'

interface CheckboxProps {
	id: string;
	register: Function;
	error?: string | undefined;
	label?: string;
	className?: string;
	isRequired?: boolean;
}

export const Checkbox: FC<CheckboxProps> = memo(({id, register, error, label, className = '', isRequired}) => {
	return (
		<div className={cls.inner}>
			<input
				className={cls.input}
				{...register("checkbox", {
					required: isRequired ? 'Это поле обязательно' : false
				})}
				id={id}
				type="checkbox"
			/>
			
			<label className={classnames(cls.label, {[className]: className, [cls.inputError]: error})} htmlFor={id}>
				{label}
			</label>
		</div>
	);
});
