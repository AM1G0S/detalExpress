import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";

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