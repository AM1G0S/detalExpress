import classnames from "classnames";
import {FC, memo} from "react";
import {ProcessStep} from "../../components";

import cls from "./Processing.module.scss";
import styles from "../../styles/style.module.scss";

//images
import processingImg from "../../assets/img/basket.png";
import step1 from "../../assets/img/step1.png";
import step2 from "../../assets/img/step2.png";
import step3 from "../../assets/img/step3.png";
import step4 from "../../assets/img/step4.png";

const processingSteps = [
	{
		step: 1,
		title: "Отправьте информацию об авто и список нужных запчастей",
		description: "Информация передается нашему менеджеру",
		imgSrc: step1
	},
	{
		step: 2,
		title: "Наш менеджер свяжется с Вами",
		description: "Уточнит детали по списком запчастей",
		imgSrc: step2
	},
	{
		step: 3,
		title: "Перейдите в «Мои запросы»",
		description: "Оплатите удобным для Вас способом",
		imgSrc: step3
	},
	{
		step: 4,
		title: "Доставим заказы в течение 1 дня",
		description: "Получите заказ в пунтке выдачи, который указали во время оформления",
		imgSrc: step4
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
