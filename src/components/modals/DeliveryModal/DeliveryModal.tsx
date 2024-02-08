import {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {setDelivery} from "../../../redux/slices/applicationSlice.ts";
import {Modal} from '../../ui/Modal/Modal';

import cls from './DeliveryModal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const cities = [
	"Бердск",
	"Владивосток",
	"Владимир",
	"Волгоград",
	"Вологда",
	"Воронеж",
	"Екатеринбург",
	"Ижевск",
	"Иркутск",
	"Казань",
	"Калининград",
	"Калуга",
	"Кемерово",
	"Киров",
]

export const DeliveryModal: FC<ModalProps> = ({isOpen, onClose}) => {
	const [activeCity, setActiveCity] = useState('');
	const dispatch = useDispatch();
	
	const handleCityClick = (city: string) => {
		setActiveCity(city);
		dispatch(setDelivery(city));
	};
	
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={cls.delivery}>
				<h2>Выбор города</h2>
				<ul className={cls.deliveryList}>
					{cities.map((city) => (
						<li key={city} className={activeCity === city ? cls.active : ''} onClick={() => handleCityClick(city)}>
							{city}
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
};
