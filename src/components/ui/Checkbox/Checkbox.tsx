import classnames from "classnames";
import {FC, memo} from "react";

import cls from './Checkbox.module.scss'

interface CheckboxProps {
	id: string;
	register: Function;
	error?: string;
}

export const Checkbox: FC<CheckboxProps> = memo(({id, register, error}) => {
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
			
			<label className={classnames(cls.label, {[cls.inputError]: error})} htmlFor={id}>
			</label>
		</div>
	);
});
