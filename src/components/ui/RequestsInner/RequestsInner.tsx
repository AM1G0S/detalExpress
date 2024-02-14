import {FC, memo} from "react";
import {RequestsProps} from "../../../types.ts";
import {Request} from "../Request/Request.tsx";
import cls from "./RequestsInner.module.scss"

export const RequestsInner: FC<RequestsProps> = memo((props) => {
	const {requests} = props
	
	return (
		<div className={cls.wrapper}>
			<h2 className={cls.title}>Мои запросы</h2>
			
			<div className={cls.requests}>
				{
					requests.map(request => (
						<Request key={request.id} {...request}/>
					))
				}
			</div>
		</div>
	)
})
