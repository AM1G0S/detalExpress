import classnames from "classnames";
import {FC, memo} from "react";
import {Accordion} from "../../components";

import cls from "./Questions.module.scss";
import styles from "../../styles/style.module.scss";

import questionsImg from "../../assets/img/question-mark.png";

const questions = [
	{
		title: 'Запчасть точно подойдет для моего автомобиля?',
		description: 'Да, мы подбираем все запчасти в соответствии с VIN номером вашего автомобиля.'
	},
	{
		title: 'Вы доставите запчасти в срок?',
		description: 'Да, мы доставляем запчасти в срок.'
	},
	{
		title: 'Я могу быть уверен(-а), что запчасть хорошего качества?',
		description: 'Да, все запчасти в наличии и отличном качестве в нашем магазине.'
	},
	{
		title: 'В течении какого времени можно сделать возврат товара?',
		description: 'В течении 14 дней после получения.'
	},
]

export const Questions: FC = memo(() => {
	return (
		<section className={classnames(styles.section, cls.questions)}>
			<div className={classnames(styles.wrapper)}>
				<div className={styles.inner}>
					<img className={cls.img} src={questionsImg} alt="Question img"/>
				</div>
				<div className={styles.inner}>
					<h2 className={styles.title}><span>Ответы</span> на частые вопросы</h2>
					<Accordion questions={questions}/>
				</div>
			</div>
		</section>
	)
})
