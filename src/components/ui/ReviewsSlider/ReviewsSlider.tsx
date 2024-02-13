import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Review } from '../Review/Review';

import cls from './ReviewsSlider.module.scss'

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

export const ReviewsSlider = () => {
	
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		loop: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 500,
		arrows: false,
		adaptiveHeight: true,
		appendDots: (dots: any) => <ul>{dots}</ul>,
		customPaging: () => (
			<div className="ft-slick__dots--custom">
				<div className="loading" />
			</div>
		),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
					slidesToShow: 1,
				}
			}
		]
	};
	
	return (
		<Slider className={cls.sliderWrapper} {...settings}>
			{reviews.map((review) => (
				<div key={review.id}>
					<Review {...review} />
				</div>
			))}
		</Slider>
	);
};
