import axios from "axios";
import classnames from "classnames";
import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Input, TabButton} from "../../components";
import {DeliveryModal} from "../../components/modals/DeliveryModal/DeliveryModal";
import {Button} from "../../components/ui/Button/Button.tsx";
import {Loader} from "../../components/ui/Loader/Loader.tsx";
import {RootState} from "../../redux/store.ts";

import cls from "./Application.module.scss"

type Inputs = {
	mainInput: string | number
	replacement: string
	name: string
	phone: number
	checkbox: boolean
}

export const Application: FC = () => {
	const mainInputValue = useSelector((state: RootState) => state.application.mainInput)
	const deliveryCity = useSelector((state: RootState) => state.application.delivery);
	const deliveryAddress = useSelector((state: RootState) => state.application.address);
	
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<Inputs>({
		defaultValues: {
			mainInput: mainInputValue,
		}
	})
	
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoading(true)
			
			const message = `<b>Заявка с сайта</b>\n\n` +
				`<b>Номер или марка машины:</b>\n${data.mainInput}\n` +
				`<b>Список запчастей:</b>\n${data.replacement || "Не указано"}\n` +
				`<b>Имя:</b> ${data.name}\n` +
				`<b>Телефон:</b> ${data.phone}\n` +
				`<b>Адрес:</b>\n` + `${deliveryCity} - ${deliveryAddress}`;
			
			const response = await axios.post('https://детальэкспресс.рф/send-message', {
				message: message,
				parse_mode: 'html'
			});
			if (response.data.success) {
				setIsLoading(false)
				alert('Запрос успешно отправлен!');
			} else {
				alert('Ошибка при отправке сообщения');
			}
		} catch (error) {
			console.error(error);
			setIsLoading(false)
			alert('Ошибка при отправке сообщения');
		}
	};
	
	return (
		<>
			<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
				<label className={cls.label}>
					<p className={cls.subtitle}>VIN-номер или марка машины</p>
					<Input
						className={classnames({[cls.error]: errors.mainInput})}
						{...register("mainInput", {
							required: 'Это поле обязательно к заполнению'
						})}
						placeholder={errors.mainInput ? 'Это поле обязательно к заполнению' : 'XTAGFL110KY343166'}
						type={'text'}
					/>
				</label>
				<label className={cls.label}>
					<p className={cls.subtitle}>Укажите список запчастей</p>
					<textarea
						{...register("replacement")}
						placeholder={'Диски, тряпки, антифриз, грм, помпа'}
						className={cls.textarea}
					/>
				</label>
				
				<div className={cls.formBox}>
					<label className={cls.label}>
						<p className={cls.subtitle}>Имя</p>
						<Input
							className={classnames({[cls.error]: errors.name})}
							{...register("name", {
								required: 'Это поле обязательно к заполнению'
							})}
							placeholder={errors.name ? 'Это поле обязательно к заполнению' : 'Андрей'}
							type={'text'}
						/>
					</label>
					<label className={cls.label}>
						<p className={cls.subtitle}>Телефон</p>
						<Input
							className={classnames({[cls.error]: errors.phone})}
							{...register("phone", {
								required: 'Это поле обязательно к заполнению'
							})}
							placeholder={errors.phone ? 'Это поле обязательно к заполнению' : '89194121355'}
							type={'tel'}
						/>
					</label>
				</div>
				
				<div className={cls.delivery}>
					<p className={cls.deliveryTitle}>Пункт выдачи</p>
					<div className={cls.deliveryBox}>
						<span className={cls.adress}>
							{deliveryCity} - {deliveryAddress}
						</span>
						<TabButton
							isActive={true}
							type={'button'}
							onClick={() => setIsModalOpen(!isModalOpen)}
						>
							Изменить
						</TabButton>
					</div>
				</div>
				
				<div>
					<label className={cls.agree}>
						<input
							{...register("checkbox", {
								required: 'Это поле обязательно к заполнению'
							})}
							className={classnames(cls.checkbox, {[cls.error]: errors.checkbox})}
							type="checkbox"/>
						<span>
					Согласен на обработку персональных данных в соответствии с <Link
							to="/politic">Политикой конфиденциальности</Link>
				</span>
					</label>
					{errors.checkbox && <p className={cls.errorText + ' ' + cls.checkboxEroor}>Примите оферту</p>}
				</div>
				
				<Button type={'submit'}>
					{isLoading ? <Loader width={40} height={40}/> : 'Отправить запрос'}
				</Button>
			</form>
			
			<DeliveryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}/>
		</>
	)
}
