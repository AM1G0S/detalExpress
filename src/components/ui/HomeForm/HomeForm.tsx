import {FC, memo, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store.ts";
import {setMainInput} from "../../../redux/slices/applicationSlice";

import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useNavigate} from "react-router-dom";

import cls from "./HomeForm.module.scss";

type Inputs = {
	mainInput: string
}

const tabs: string[] = ['Марка авто', 'VIN', 'ГОС-номер'];
const inputPlaceholders: string[] = [
	'Укажите марку машины',
	'Укажите VIN-номер',
	'Укажите ГОС-номер'
];

export const HomeForm: FC = memo(() => {
	const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
		mode: 'onBlur',
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
		navigate('/application')
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
					<Input
						name={'mainInput'}
						placeholder={inputPlaceholders[activeTab || 0]}
						register={register}
						errors={errors}
					/>
					<Button className={cls.button} type={'submit'}>
						Отправить заявку
					</Button>
					
					<p className={cls.text}>Менеджер ответит в течении 3-10 минут</p>
				</form>
			
			</div>
			
		</div>
	);
});
