import {ChangeEvent, FC, memo, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store.ts";

import {setMainInput} from "../../../redux/slices/applicationSlice";

import {Button} from "../Button/Button.tsx";
import {Input} from "../Input/Input";
import {TabButton} from "../TabButton/TabButton";
import {Link} from "react-router-dom";

import cls from "./FormCheck.module.scss";

interface FormCheckProps {
}

const tabs: string[] = ['VIN', 'Марка авто', 'ГОС-номер'];
const inputPlaceholders: string[] = [
	'Укажите VIN-номер',
	'Укажите марку машины',
	'Укажите ГОС-номер'
];

export const FormCheck: FC = memo((props: FormCheckProps) => {
	const {} = props;
	const dispatch = useDispatch<AppDispatch>();
	const [activeTab, setActiveTab] = useState<number | null>(0);
	const [inputValue, setInputValue] = useState<string>('');
	
	useEffect(() => {
		dispatch(
			setMainInput({mainInput: inputValue})
		);
	}, [inputValue, dispatch]);
	
	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};
	
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}
	
	return (
		<form className={cls.form}>
			<div className={cls.inputTabs}>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						isActive={activeTab === index}
						onClick={() => handleTabClick(index)}
						type={'button'}>
						{tab}
					</TabButton>
				))}
			</div>
			<div>
				<Input
					type="text"
					value={inputValue}
					placeholder={inputPlaceholders[activeTab || 0]}
					onChange={onChangeInput}
				/>
			</div>
			<div>
				<Link className={cls.link} to={'/application'}>
					<Button disabled={!inputValue}>
						{inputValue ? 'Отправить заявку' : 'Введите данные'}
					</Button>
				</Link>
			</div>
		</form>
	);
});
