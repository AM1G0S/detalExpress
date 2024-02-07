import {FC, memo} from 'react';
import {Header} from "../components";

interface HomeProps {

}

export const Home: FC = memo((props: HomeProps) => {
	const {} = props;
	
	return (
		<Header/>
	);
});
