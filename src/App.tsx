import {FC, lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import MainLayout from "./components/loyaut/MainLayout.tsx";

const Application = lazy(() => import('./pages/Application/Application'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route
            path="tariffs"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <h1>В разработке...</h1>
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <h1>В разработке...</h1>
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <h1>В разработке...</h1>
              </Suspense>
            }
          />
          <Route
            path="faq"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <h1>В разработке...</h1>
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <h1>В разработке...</h1>
              </Suspense>
            }
          />
          <Route
            path="application"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Application/>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
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
