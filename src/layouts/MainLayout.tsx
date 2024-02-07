import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <main className="content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
