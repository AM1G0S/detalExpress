import classnames from "classnames";
import {FC, memo} from "react";
import {HomeForm} from "../../components";
import {Questions} from "../../sections/Questions/Questions.tsx";
import cls from "./Home.module.scss";
import styles from "../../styles/style.module.scss";

import engineVideo from "../../assets/animation/engine.mp4";

interface HomeProps {
}

export const Home: FC = memo((props: HomeProps) => {
	const {} = props;
	
	
	
	return (
		<>
			<div className={classnames(styles.wrapper, cls.formWrapper, 'separator')}>
				<div className={styles.inner}>
					<h1 className={cls.title}><span>Нужны</span> автозапчасти?</h1>
					<HomeForm></HomeForm>
				</div>
				<div className={styles.inner}>
					<video className={cls.video} autoPlay muted loop>
						<source src={engineVideo} type="video/mp4"/>
					</video>
				</div>
			</div>
			
			<Questions />
		</>
	);
});
