import {FC, memo} from 'react';
import cls from './Footer.module.scss';

interface HeaderProps {

}

export const Footer: FC = memo((props: HeaderProps) => {
	const {} = props;
	
	return (
		<footer className={cls.footer}>
		
		</footer>
	);
});
