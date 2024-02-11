import {FC, memo} from "react";
import cls from "./ProcessStep.module.scss";

interface ProcessStepProps {
	step: number;
	title: string;
	description: string;
	imgSrc: string;
}

export const ProcessStep: FC<ProcessStepProps> = memo(({step, title, description, imgSrc}) => {
	return (
		<div className={cls.processStep}>
			<div className={cls.imageBox}>
				<img className={cls.image} src={imgSrc} alt=""/>
			</div>
			<div className={cls.content}>
				<p className={cls.step}>Шаг - {step}</p>
				<div className={cls.title}>{title}</div>
				<div className={cls.description}>{description}</div>
			</div>
		</div>
	)
})
