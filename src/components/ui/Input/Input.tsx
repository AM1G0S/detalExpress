import {FC, memo} from "react";

import {StyledInput} from "./styled.ts";

interface InputProps {
	type: string;
	placeholder: string;
}

export const Input: FC<InputProps> = memo((props) => {
	const {type, placeholder} = props;
	
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
		/>
	);
});
