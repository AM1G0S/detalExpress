import {FC, memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDelivery, setAddress} from "../../../redux/slices/applicationSlice.ts";
import {RootState} from "../../../redux/store.ts";
import {Button} from "../../ui/Button/Button.tsx";
import {Modal} from "../../ui/Modal/Modal";

import cls from "./DeliveryModal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const cities: string[] = [
	"Москва",
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
	"Киров",
];

const branches: Record<string, string[]> = {
	Москва: ["ул. Шимановского 46", "ул. Ялтинская 12"],
	Бердск: ["Адрес 1 "],
	Владивосток: ["Адрес 1 "],
	Владимир: ["Адрес 1 "],
	Волгоград: ["Адрес 1 "],
	Вологда: ["Адрес 1 "],
	Воронеж: ["Адрес 1 "],
	Екатеринбург: ["Адрес 1 "],
	Ижевск: ["Адрес 1 "],
	Иркутск: ["Адрес 1 "],
	Казань: ["Адрес 1 "],
	Калининград: ["Адрес 1 "],
	Киров: ["Адрес 1 "],
};

export const DeliveryModal: FC<ModalProps> = memo(({isOpen, onClose}) => {
	const dispatch = useDispatch();
	const [activeCity, setActiveCity] = useState(
		useSelector((state: RootState) => state.application.delivery)
	);
	const [activeAddress, setActiveAddress] = useState<string | undefined>(
		useSelector((state: RootState) => state.application.address)
	);
	
	const handleCityClick = (city: string) => {
		dispatch(setDelivery({delivery: city}));
		setActiveAddress('')
		setActiveCity(city);
	};
	
	const handleAddressClick = useCallback((address: string) => {
		dispatch(setAddress({address: address}));
		setActiveAddress(address);
	}, []);
	
	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Выбор города">
			<div className={cls.delivery}>
				<ul className={cls.deliveryList}>
					{cities.map((city) => (
						<li
							key={city}
							className={activeCity === city ? cls.active : ""}
							onClick={() => handleCityClick(city)}
						>
							{city}
						</li>
					))}
				</ul>
				{activeCity && (
					<div className={cls.branches}>
						<h3 className={cls.branchesTitle}>{activeCity}</h3>
						<ul className={cls.branchesList}>
							{branches[activeCity].map((address, index) => (
								<li className={cls.branchesItem} key={index}>
									<span className={activeAddress === address ? cls.active : ""}>{address}</span>
									
									{activeAddress !== address ? (
										<Button
											variant={"select"}
											size={"sm"}
											onClick={() => {
												handleAddressClick(address)
												onClose();
											}
											}
										>
											Выбрать
										</Button>
									) : <span className={activeAddress === address ? cls.active : ""}>Выбран</span>}
								</li>
							))}
						</ul>
					</div>
				)}
				
				<div className={cls.deliveryInfo}>
					<div className={cls.deliveryText}>
						<p>Более 100 пунктов выдачи по всей России.</p>
						<p>Получите заказ в ближайшем пункте выдачи.</p>
					</div>
					
					<div className={cls.contats}>
						<div className={cls.contatsBox}>
							<span>Телефон:</span>
							<p>+7(913)485-95-77</p>
						</div>
						<div className={cls.contatsBox}>
							<span>Электронная почта:</span>
							<p>zakaz@zakaz.ru</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
});
