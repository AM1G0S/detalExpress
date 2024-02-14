import {FC, memo} from "react";
import {RequestType} from "../../../types.ts";
import cls from "./Request.module.scss"

import locationIcon from "../../../assets/img/location-yandex.png";
import dateIcon from "../../../assets/img/date.png";

export const Request: FC<RequestType> = memo((props) => {
	const {id, title, text, address, time} = props
	
	return (
		<div className={cls.request}>
			
			<div className={cls.top}>
				<h3 className={cls.title}>{title}</h3>
				<span className={cls.requestId}># {id}</span>
			</div>
			<div className={cls.body}>
				<p>{text}</p>
			</div>
			
			<div className={cls.bottom}>
				<p className={cls.address}>
					<img className={cls.locationIcon} src={locationIcon} alt="иконка местоположения"/>
					Пукт выдачи: {address}
				</p>
				<p className={cls.requestTime}>
					<img className={cls.dateIcon} src={dateIcon} alt="иконка даты"/>
					{time}
				</p>
			</div>
		</div>
	)
})
