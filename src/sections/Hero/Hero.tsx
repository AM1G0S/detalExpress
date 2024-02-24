import classnames from "classnames";
import {FC, memo} from "react";
import engineVideo from "../../assets/animation/engine.mp4";
import {HomeForm} from "../../components";
import cls from "./Hero.module.scss";
import styles from "../../styles/style.module.scss";

export const Hero: FC = memo(() => {
	return (
		<section className={styles.section}>
			<div className={classnames(styles.wrapper, cls.formWrapper, 'separator')}>
				<div className={styles.inner}>
					<h1 className={cls.title}><span>Нужны</span> автозапчасти?</h1>
					<HomeForm></HomeForm>
				</div>
				<div className={styles.inner}>
					<video className={cls.video} autoPlay muted loop controls={false}>
						<source src={engineVideo} type="video/mp4"/>
					</video>
				</div>
			</div>
		</section>
	)
})
