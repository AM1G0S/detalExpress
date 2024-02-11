import {FC, memo} from "react";

import cls from "./Review.module.scss";

import locationIcon from "../../../assets/img/location.png";
import yandexIcon from "../../../assets/img/location-yandex.png";
import towGisIcon from "../../../assets/img/map2gis.png";

interface ReviewProps {
	id: number;
	name: string;
	lastName: string;
	avatar: string;
	text: string;
	city: string;
	platform: string;
}

export const Review: FC<ReviewProps> = memo((
	{
		name, lastName, avatar, text, city, platform
	}) => {
	return (
		<div className={cls.review}>
			<img className={cls.platformIcon} src={platform === "yandex" ? yandexIcon : towGisIcon} alt="platform icon"/>
			<div className={cls.text}>
				<p>{text}</p>
			</div>
			<div className={cls.bottom}>
				<div className={cls.user}>
					<img className={cls.avatar} src={avatar} alt="user avatar"/>
					<span className={cls.name}>{name}<br/>{lastName}</span>
				</div>
				<div className={cls.userLocation}>
					<img className={cls.locationIcon} src={locationIcon} alt="location icon"/>
					<span className={cls.city}>{city}</span>
				</div>
			</div>
		</div>
	)
})
