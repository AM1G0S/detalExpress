import classnames from 'classnames';
import {FC, memo, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store.ts";

import {setMainInput} from "../../../redux/slices/applicationSlice";

import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useNavigate} from "react-router-dom";

import cls from "./FormCheck.module.scss";

interface FormCheckProps {
}

type Inputs = {
	mainInput: string
}

const tabs: string[] = ['VIN', 'Марка авто', 'ГОС-номер'];
const inputPlaceholders: string[] = [
	'Укажите VIN-номер',
	'Укажите марку машины',
	'Укажите ГОС-номер'
];

export const FormCheck: FC = memo((props: FormCheckProps) => {
	const {} = props;
	const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
		mode: 'onChange',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const [activeTab, setActiveTab] = useState<number | null>(0);
	
	const mainInputValue = watch("mainInput");
	
	useEffect(() => {
		dispatch(setMainInput({mainInput: mainInputValue}));
	}, [dispatch, mainInputValue]);
	
	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};
	
	const onSubmit: SubmitHandler<Inputs> = () => {
		navigate('/application');
	}
	
	return (
		<div className={cls.formWrapper}>
			<div className={cls.inputTabs}>
				{tabs.map((tab, index) => (
					<Button
						variant={"secondary"}
						size={"lg"}
						key={index}
						isActive={activeTab === index}
						onClick={() => handleTabClick(index)}
					>
						{tab}
					</Button>
				))}
			</div>
			
			<div>
				
				<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
					<label className={cls.label}>
						<Input
							{...register("mainInput", {
								required: 'Это поле обязательно к заполнению'
							})}
							className={classnames({[cls.error]: errors.mainInput})}
							type="text"
							placeholder={inputPlaceholders[activeTab || 0]}
						/>
						{errors.mainInput && <span className={cls.errorText}>{errors.mainInput.message}</span>}
					</label>
					
					<Button className={cls.button} type={'submit'}>
						Отправить заявку
					</Button>
				</form>
			
			</div>
		</div>
	);
});
