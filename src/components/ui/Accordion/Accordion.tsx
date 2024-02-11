import classnames from "classnames";
import {FC, useState} from 'react';
import cls from './Accordion.module.scss';

interface Question {
	title: string;
	description: string;
}

interface AccordionProps {
	questions: Question[];
}

export const Accordion: FC<AccordionProps> = ({questions}) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	
	const handleToggle = (index: number) => {
		setExpandedIndex(prevIndex => (prevIndex !== index ? index : null));
	};
	
	return (
		<div className={cls.accordion}>
			{questions.map((question, index) => (
				<div key={index} className={cls.item}>
					<button className={cls.title} onClick={() => handleToggle(index)}>
						{question.title}
						<span className={cls.icon}>{expandedIndex === index ? '-' : '+'}</span>
					</button>
					<div className={classnames(cls.description, {[cls.expanded]: expandedIndex === index})}>
						<p>{question.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};
