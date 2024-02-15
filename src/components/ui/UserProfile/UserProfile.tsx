import {FC, memo} from "react";
import cls from "./UserProfile.module.scss"

interface UserProfileProps {

}

export const UserProfile: FC<UserProfileProps> = memo((props) => {
	const {} = props
	
	return (
		<div className={cls.wrapper}>
			<h2 className={cls.title}>Настройки профиля</h2>
			
			
		</div>
	)
})
