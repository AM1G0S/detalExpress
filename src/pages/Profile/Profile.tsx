import {FC, memo} from "react";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {Button, RequestsInner} from "../../components";
import {useAuth} from "../../hooks/use-auth.ts";
import {removeUser} from "../../redux/slices/userSlice.ts";
import {RequestType} from "../../types.ts";
import cls from "./Profile.module.scss"

import requestsIcon from '../../assets/img/request.svg'
import profileIcon from '../../assets/img/profile.png'
import exitIcon from '../../assets/img/exit.svg'

interface ProfileProps {

}

const requests: RequestType[] = [
	{
		id: 1,
		title: 'WFONXXGBBNWJ73985',
		text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рукопись она, языкового одна власти переписали, маленький страна всемогущая снова, ведущими продолжил бросил рыбного букв вершину вскоре путь вдали все.',
		address: 'Медведево (ул. Крылова 15)',
		time: '09:57 07.12.2023'
	},
	{
		id: 2,
		title: 'WFONXXGBBNWJ73985',
		text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рукопись она, языкового одна власти переписали, маленький страна всемогущая снова, ведущими продолжил бросил рыбного букв вершину вскоре путь вдали все.',
		address: 'Медведево (ул. Крылова 15)',
		time: '09:57 07.12.2023'
	},
	{
		id: 3,
		title: 'WFONXXGBBNWJ73985',
		text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рукопись она, языкового одна власти переписали, маленький страна всемогущая снова, ведущими продолжил бросил рыбного букв вершину вскоре путь вдали все.',
		address: 'Медведево (ул. Крылова 15)',
		time: '09:57 07.12.2023'
	}
];

const Profile: FC<ProfileProps> = memo((props) => {
	const {} = props
	const {isAuth} = useAuth();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	return isAuth ? (
		<div className={cls.wrapper}>
			<div className={cls.sidebar}>
				<ul className={cls.sidebarList}>
					<li className={cls.sidebarItem}>
						<img className={cls.sidebarIcon} src={requestsIcon} alt="иконка запросов"/>
						Мои запросы
					</li>
					<li className={cls.sidebarItem}>
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
			<RequestsInner requests={requests}/>
		</div>
	) : (
		<Navigate to={'/login'}/>
	)
})

export default Profile
