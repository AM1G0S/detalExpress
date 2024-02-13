import classnames from "classnames";
import {memo} from "react";
import {ReviewsSlider} from "../../components/";
import styles from "../../styles/style.module.scss";
import cls from "../Reviews/Reviews.module.scss";

export const Reviews = memo(() => {
	return (
		<section id={'reviews'} className={classnames(styles.section, cls.reviews)}>
			<h2 className={classnames(styles.title, cls.title)}><span>Нам</span> доверяют</h2>
			
			<ReviewsSlider/>
		
		</section>
	)
})

