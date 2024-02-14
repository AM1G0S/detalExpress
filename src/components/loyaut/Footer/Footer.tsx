import classnames from "classnames";
import {FC, memo} from 'react';
import {Link} from "react-router-dom";
import cls from './Footer.module.scss';

import vkLogo from '../../../assets/img/vk.png';
import whatsappLogo from '../../../assets/img/whatsapp.png';

interface HeaderProps {
}

export const Footer: FC = memo((props: HeaderProps) => {
	const {} = props;
	
	return (
		<footer className={classnames(cls.footer, 'separator')}>
			<div className="container">
				<div className={cls.top}>
					<div>
						<p className={cls.title}>Поддержка</p>
						<a className={cls.email} href="mailto:avto.face@yandex.ru">avto.face@yandex.ru</a>
						<p className={cls.grayColor}>с 07:00 до 00:00 МСК</p>
					</div>
					
					<div className={classnames(cls.socials)}>
						<a className={cls.social} href="##">
							<img src={vkLogo} alt="вконтакте"/>
							ВКонтакте
						</a>
						<a className={cls.social} href="##">
							<img src={whatsappLogo} alt="WhatsApp"/>
							WhatsApp
						</a>
					</div>
					
					<div className={cls.politic}>
						<Link className={classnames(cls.grayColor, cls.link)} to="#">Политика обработки данных</Link>
						<Link className={classnames(cls.grayColor, cls.link)} to="#">Пользовательское/Лицензионное соглашение</Link>
					</div>
				</div>
			</div>
			
			<div className={cls.bottom}>
				<div className={classnames(cls.bottomInner, 'container')}>
					<p>© 2024. Все права защищены.</p>
					<p>
						ООО "АИСТСОФТ"<br/>
						ИНН: 3307021951 ОГРН: 11733280000328
					</p>
					<p>Город Москва, Нахимовский проспект, дом 27, корпус 3</p>
				</div>
			</div>
		
		</footer>
	);
});
