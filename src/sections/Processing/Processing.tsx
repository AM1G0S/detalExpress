import classnames from "classnames";
import {FC, memo} from "react";
import {ProcessStep} from "../../components";

import cls from "./Processing.module.scss";
import styles from "../../styles/style.module.scss";

import processingImg from "../../assets/img/basket.png";

const processingSteps = [
	{
		step: 1,
		title: "Отправьте информацию об авто и список нужных запчастей",
		description: "Информация передается нашему менеджеру",
		imgSrc: '/src/assets/img/step1.png'
	},
	{
		step: 2,
		title: "Наш менеджер свяжется с Вами",
		description: "Уточнит детали по списком запчастей",
		imgSrc: '/src/assets/img/step2.png'
	},
	{
		step: 3,
		title: "Перейдите в «Мои запросы»",
		description: "Оплатите удобным для Вас способом",
		imgSrc: '/src/assets/img/step3.png'
	},
	{
		step: 4,
		title: "Доставим заказы в течение 1 дня",
		description: "Получите заказ в пунтке выдачи, который указали во время оформления",
		imgSrc: '/src/assets/img/step4.png'
	},
]

export const Processing: FC = memo(() => {
	return (
		<section className={classnames(styles.section, cls.processing)}>
			<h2 className={classnames(styles.title, cls.title)}><span>Этапы</span> оформления</h2>
			
			<div className={classnames(cls.questions, styles.wrapper)}>
				<div className={classnames(styles.inner, cls.imgBox)}>
					<img className={cls.img} src={processingImg} alt="basket img"/>
				</div>
				<div className={styles.inner}>
					<div className={cls.steps}>
						{processingSteps.map(step => (
							<ProcessStep
								key={step.step}
								step={step.step}
								title={step.title}
								description={step.description}
								imgSrc={step.imgSrc}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
})
