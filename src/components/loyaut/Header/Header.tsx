import classnames from "classnames";
import {getAuth, signOut} from "firebase/auth";
import {FC, memo, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/use-auth.ts";
import {removeUser} from "../../../redux/slices/userSlice.ts";
import {RootState} from "../../../redux/store.ts";

import cls from "./Header.module.scss";

import logoImg from "../../../assets/img/logo.png";
import profileIcon from '../../../assets/img/profile.svg'

export const Header: FC = memo(() => {
	const [menuActive, setMenuActive] = useState(false);
	const profileBtn = useRef<HTMLDivElement>(null);
	
	const deliveryCity = useSelector((state: RootState) => state.application.delivery);
	const profileName = useSelector((state: RootState) => state.user.name);
	
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (profileBtn.current && !profileBtn.current.contains(event.target as Node)) {
				setMenuActive(false)
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	
	const {isAuth} = useAuth();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	return (
		<header className={cls.header}>
			<div className={cls.inner}>
				<Link to={"/"}>
					<img src={logoImg} className={cls.logo} alt={'логотип'}/>
				</Link>
				<div className={cls.menu}>
					<ul className={cls.menuList}>
						<li className={cls.menuItem}>
							<a href={'#reviews'}>Отзывы</a>
						</li>
						<li className={cls.menuItem}>
							<a href={'#process'}>Этапы оформления</a>
						</li>
						<li className={cls.menuItem}>
							<a href={'#faq'}>Ответы на вопросы</a>
						</li>
						<li className={cls.menuItem}>
							<Link to={"/contact-us"}>Контакты</Link>
						</li>
						<span className="cube"></span>
					</ul>
				</div>
				
				{
					isAuth ? (
						<>
							<div className={cls.profile} ref={profileBtn}>
								
								<span className={cls.profileName}>{profileName}</span>
								<span className={cls.city}>{deliveryCity}</span>
								
								<div className={cls.profileBtn} onClick={() => setMenuActive(!menuActive)}>
									<img className={cls.icon} src={profileIcon} alt="иконка профиля"/>
									<svg className={classnames(cls.icon, cls.arrowIcon, menuActive ? cls.show : '')} viewBox="0 0 9 5"
									     fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd"
										      d="M4.50122 3.03033L0.731158 0L0.00195312 1.06821L4.13662 4.39161C4.35321 4.5657 4.64923 4.5657 4.86582 4.39161L9.00049 1.06821L8.27128 0L4.50122 3.03033Z"
										      fill="#2A2A36"></path>
									</svg>
								</div>
								
								<div className={classnames(cls.profileMenu, menuActive ? cls.show : '')}>
									<Link to={"/profile#requests"}>Мои запросы</Link>
									<Link to={"/profile#settings"}>Мои профиль</Link>
									<Link to={"/profile"} onClick={() => {
										const auth = getAuth();
										signOut(auth).then(() => {
											dispatch(removeUser());
											navigate('/');
										})
									}}>Выход</Link>
								</div>
								
							</div>
						</>
					) : (
						<Link className={cls.profile} to={"/login"}>
							Войти
							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.375 11.063C9.83178 11.063 12.75 11.6318 12.75 13.8285C12.75 16.0252 9.81306 16.575 6.375 16.575C2.91822 16.575 0 16.0054 0 13.8095C0 11.6128 2.93609 11.063 6.375 11.063ZM14.4491 4.67505C14.8709 4.67505 15.2133 5.02308 15.2133 5.44992V6.44973H16.2359C16.6568 6.44973 17 6.79776 17 7.22461C17 7.65145 16.6568 7.99948 16.2359 7.99948H15.2133V9.00017C15.2133 9.42702 14.8709 9.77505 14.4491 9.77505C14.0282 9.77505 13.685 9.42702 13.685 9.00017V7.99948H12.6641C12.2423 7.99948 11.9 7.65145 11.9 7.22461C11.9 6.79776 12.2423 6.44973 12.6641 6.44973H13.685V5.44992C13.685 5.02308 14.0282 4.67505 14.4491 4.67505ZM6.375 0.425049C8.71639 0.425049 10.5932 2.32618 10.5932 4.69786C10.5932 7.06954 8.71639 8.97068 6.375 8.97068C4.03361 8.97068 2.15676 7.06954 2.15676 4.69786C2.15676 2.32618 4.03361 0.425049 6.375 0.425049Z"
									fill="#E84B37"
								></path>
							</svg>
						</Link>
					)
				}
				
				<div className={cls.burgerMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
});
