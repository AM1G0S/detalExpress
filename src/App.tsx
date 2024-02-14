import {FC, lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import MainLayout from "./components/loyaut/MainLayout.tsx";

import {useAuth} from "./hooks/use-auth.ts";

const Application = lazy(() => import('./pages/Application/Application'));
const Login = lazy(() => import('./pages/Login/Login'));

const App: FC = () => {
	const {isAuth} = useAuth();
	
	return (
		<>
			<Routes>
				<Route path={"/"} element={<MainLayout/>}>
					<Route path="" element={<Home/>}/>
					<Route
						path="blog"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								<h1>В разработке...</h1>
							</Suspense>
						}
					/>
					<Route
						path="contact-us"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								<h1>В разработке...</h1>
							</Suspense>
						}
					/>
					<Route
						path="application"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								{
									isAuth ? <Application/> : <Login/>
								}
							</Suspense>
						}
					/>
					<Route
						path="/login"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								<Login/>
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								<h1>Страницы не существует</h1>
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
