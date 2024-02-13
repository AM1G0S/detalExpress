import classnames from "classnames";
import {FC, memo} from "react";

import cls from './Checkbox.module.scss'

interface CheckboxProps {
	id: string;
	register: Function;
	error?: string | undefined;
	label?: string;
	className?: string;
}

export const Checkbox: FC<CheckboxProps> = memo(({id, register, error, label, className = ''}) => {
	return (
		<div className={cls.inner}>
			<input
				className={cls.input}
				{...register("checkbox", {
					required: "Это поле обязательно",
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
