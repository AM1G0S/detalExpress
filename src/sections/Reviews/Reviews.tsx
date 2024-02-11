import classnames from "classnames";
import {memo} from "react";
import {Review} from "../../components";
import styles from "../../styles/style.module.scss";
import cls from "../Processing/Processing.module.scss";

const reviews = [
	{
		id: 1,
		name: "Валерия",
		lastName: "Иванова",
		avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
		text: "Очень понравилось. Спасибо за качественную работу. Может еще раз попробовать?",
		city: 'Москва',
		platform: 'yandex'
	},
	{
		id: 2,
		name: "Алексей",
		lastName: "Петров",
		avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
		text: "Очень понравилось. Спасибо за качественную работу. Может еще раз попробовать?",
		city: 'Москва',
		platform: '2gis'
	},
	{
		id: 3,
		name: "Иван",
		lastName: "Сидоров",
		avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
		text: "Очень понравилось. Спасибо за качественную работу. Может еще раз попробовать?",
		city: 'Санкт-Петербург',
		platform: 'yandex'
	},
	{
		id: 4,
		name: "Екатерина",
		lastName: "Кексова",
		avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
		text: "Очень понравилось. Спасибо за качественную работу. Может еще раз попробовать?",
		city: 'Морки',
		platform: '2gis'
	},
	{
		id: 5,
		name: "Ахреп",
		lastName: "Луков",
		avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
		text: "Очень понравилось. Спасибо за качественную работу. Может еще раз попробовать?",
		city: 'Самара',
		platform: 'yandex'
	},
]

export const Reviews = memo(() => {
	return (
		<section className={classnames(styles.section, cls.reviews)}>
			<h2 className={classnames(styles.title, cls.title)}><span>Нам</span> доверяют</h2>
			
			<div className={classnames(styles.reviews, cls.reviews)}>
				{
					reviews.map(review => <Review key={review.id} {...review}/>)
				}
			</div>
		
		</section>
	)
})

