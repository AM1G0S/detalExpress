import {FC} from "react";
import {Link} from "react-router-dom";

import cls from "./Pagination.module.scss";

interface paginationProps {
	currentPage: string
}

const pageNames: Record<string, string> = {
	'/tariffs': 'Тарифы',
	'/reviews': 'Отзывы',
	'/blog': 'Блог',
	'/faq': 'Вопросы',
	'/contact-us': 'Контакты',
	'/login': 'Вход',
	'/register': 'Регистрация',
	'/application': 'Отправить запрос',
	'/politic': 'Политика конфиденциальности'
};

export const Pagination: FC<paginationProps> = ({currentPage}) => {
	const pageName = pageNames[currentPage] || currentPage.slice(1);
	
	return (
		<>
			<div className={cls.pagination}>
				<Link className={cls.mainPage} to={'/'}>
					Гланая&nbsp;/&nbsp;
				</Link>
				<span className={cls.page}>
				{pageName}
				</span>
			</div>
		</>
	)
}
