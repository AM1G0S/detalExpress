import {collection, query, where, getDocs} from "firebase/firestore";
import {FC, memo, useEffect, useState} from "react";
import {db} from "../../../firebase";
import {RootState} from "../../../redux/store";
import {RequestType} from "../../../types";
import {Request} from "../Request/Request";
import cls from "./RequestsInner.module.scss";
import {useSelector} from "react-redux";

export const RequestsInner: FC = memo(() => {
	const [requests, setRequests] = useState<RequestType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const userId = useSelector((state: RootState) => state.user.id);
	
	useEffect(() => {
		const fetchRequests = async () => {
			const requestsQuery = query(collection(db, "requests"), where("userId", "==", userId));
			
			const querySnapshot = await getDocs(requestsQuery);
			const requestsArray = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}) as RequestType);
			setRequests(requestsArray);
			setIsLoading(false);
		};
		fetchRequests().then();
	}, [userId]);
	
	return (
		<div className={cls.wrapper}>
			<h2 className={cls.title}>Мои запросы</h2>
			
			<div className={cls.requests}>
				{isLoading ? (
					<h3>Загрузка...</h3>
				) : (
					<>
						{requests.length > 0 ? (
							requests.map((request, index) => {
								// @ts-ignore
								const formattedDate = request.time.toDate().toLocaleString();
								return (
									<Request key={request.id} {...request} id={index + 1} time={formattedDate}/>
								);
							})
						) : (
							<p>Запросы не найдены.</p>
						)}
					</>
				)}
			</div>
		</div>
	);
});
