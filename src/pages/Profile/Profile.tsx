import {FC, memo, useState} from "react";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {Button, RequestsInner, UserProfile} from "../../components";
import {useAuth} from "../../hooks/use-auth.ts";
import {removeUser} from "../../redux/slices/userSlice.ts";
import cls from "./Profile.module.scss"

import requestsIcon from '../../assets/img/request.svg'
import profileIcon from '../../assets/img/profile.svg'
import exitIcon from '../../assets/img/exit.svg'

const Profile: FC = memo(() => {
	const [activeSection, setActiveSection] = useState('requests');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {isAuth} = useAuth();
	
	return isAuth ? (
		<div className={cls.wrapper}>
			<div className={cls.sidebar}>
				<ul className={cls.sidebarList}>
					<li className={cls.sidebarItem} onClick={() => setActiveSection('requests')}>
						<img className={cls.sidebarIcon} src={requestsIcon} alt="иконка запросов"/>
						Мои запросы
					</li>
					<li className={cls.sidebarItem} onClick={() => setActiveSection('profile')}>
						<img className={cls.sidebarIcon} src={profileIcon} alt="иконка профиля"/>
						Мой профиль
					</li>
					<li className={cls.sidebarItem} onClick={() => {
						dispatch(removeUser());
						navigate('/');
					}}>
						<img className={cls.sidebarIcon} src={exitIcon} alt="иконка выхода"/>
						Выход
					</li>
				</ul>
				
				<Button
					size={'lg'}
					variant={'primary'}
					onClick={() => navigate('/application')}
					className={cls.sidebarBtn}
				>
					Новая заявка
				</Button>
			</div>
			<div className={cls.profileContent}>
				{activeSection === 'requests' ? <RequestsInner/> : <UserProfile/>
				}
			</div>
		</div>
	) : (
		<Navigate to={'/login'}/>
	)
})

export default Profile
