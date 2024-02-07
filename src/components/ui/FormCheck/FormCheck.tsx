import {FC, memo, useState} from "react";

import {Input} from "../Input/Input.tsx";
import {TabButton} from "../TabButton/TabButton";

import {Form, InputTabs, SubmitButton} from "./styled.ts";

interface HeaderProps {
}

const tabs: string[] = ['VIN', 'Марка', 'ГОС-номер'];
const inputPlaceholders: string[] = [
	'Укажите VIN-номер',
	'Укажите марку машины',
	'Укажите ГОС-номер'
];

export const FormCheck: FC = memo((props: HeaderProps) => {
	const {} = props;
	const [activeTab, setActiveTab] = useState<number | null>(0);
	
	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};
	
	return (
		<Form>
			<InputTabs>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						isActive={activeTab === index}
						onClick={() => handleTabClick(index)}
						type={'button'}>
						{tab}
					</TabButton>
				))}
			</InputTabs>
			<div>
				<Input
					type="text"
					placeholder={inputPlaceholders[activeTab || 0]}
				/>
			</div>
			<div>
				<SubmitButton type={'button'}>
					Отправить запрос
				</SubmitButton>
			</div>
		</Form>
	);
});
