import {FC, memo, useState} from "react";
import {Button} from "../../components";
import {LoginFrom} from "../../components";

import cls from "./Login.module.scss";

const Login: FC = memo(() => {
	const [activeTab, setActiveTab] = useState<number>(0);
	
	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};
	
	return (
		<section className={cls.login}>
			
			<div className={cls.inputTabs}>
				<Button
					variant={"secondary"}
					size={"lg"}
					isActive={activeTab === 0}
					onClick={() => handleTabClick(0)}
				>
					Войти
				</Button>
				<Button
					variant={"secondary"}
					size={"lg"}
					isActive={activeTab === 1}
					onClick={() => handleTabClick(1)}
				>
					Регистрация
				</Button>
			</div>
			
			
			<LoginFrom variant={activeTab === 0 ? "login" : "register"}/>
		
		
		</section>
	);
});

export default Login;
