import {FC, lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import MainLayout from "./components/loyaut/MainLayout.tsx";

const Application = lazy(() => import('./pages/Application/Application'));
const Login = lazy(() => import('./pages/Login/Login'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

const App: FC = () => {
	
	return (
		<>
			<Routes>
				<Route path={"/"} element={<MainLayout/>}>
					<Route path="" element={<Home/>}/>
					<Route
						path="profile"
						element={
							<Suspense fallback={<h2>Загрузка...</h2>}>
								<Profile></Profile>
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
									<Application/>
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
