import {FC, memo} from 'react';
import {Link} from "react-router-dom";

import {Logo, Wrapper} from './styled';

interface HeaderProps {

}

export const Header: FC = memo((props: HeaderProps) => {
	const {} = props;
	
	return (
		<Wrapper>
			<Link to={'/'}>
				<Logo>
					DetalExpress
				</Logo>
			</Link>
		</Wrapper>
	);
});
