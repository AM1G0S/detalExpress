import {FC, memo} from "react";
import {Processing} from "../../sections/Processing/Processing";
import {Questions} from "../../sections/Questions/Questions";
import {Hero} from "../../sections/Hero/Hero";

interface HomeProps {
}

export const Home: FC = memo((props: HomeProps) => {
	const {} = props;
	
	return (
		<>
			<Hero/>
			
			<Processing/>
			
			<Questions/>
		</>
	);
});
