import {FC} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Footer, Header} from "../index.ts";
import {Pagination} from "./Pagination/Pagination.tsx";

const MainLayout: FC = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	
	return (
		<div className="wrapper">
			
			<Header/>
			
			<main className="content">
				<div className="container">
					{currentPath === '/' ? ''
						:
						<Pagination currentPage={currentPath}/>
					}
					<Outlet/>
				</div>
			</main>
			
			<Footer/>
		
		</div>
	);
};

export default MainLayout;
