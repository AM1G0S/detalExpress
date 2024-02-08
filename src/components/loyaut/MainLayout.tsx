import {FC} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Footer, Header} from "../index.ts";
import {Pagination} from "./Pagination/Pagination.tsx";

const MainLayout: FC = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	
	return (
		<div className="wrapper">
			<div className="container">
				<Header/>
				
				<main className="content">
					{currentPath === '/' ? ''
						:
						<Pagination currentPage={currentPath}/>
					}
					<Outlet/>
				</main>
				
				<Footer/>
			</div>
		</div>
	);
};

export default MainLayout;
