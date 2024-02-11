import classnames from "classnames";
import { FC, memo } from "react";
import { HomeForm } from "../../components";
import cls from "./Home.module.scss";

import engineVideo from "../../assets/animation/engine.mp4";

interface HomeProps {}

export const Home: FC = memo((props: HomeProps) => {
  const {} = props;

  return (
    <div className={classnames(cls.formWrapper, 'separator')}>
      <div className={cls.inner}>
        <h1 className={cls.title}>Нужны автозапчасти?</h1>
        <HomeForm></HomeForm>
      </div>
      <div className={cls.inner}>
        <video className={cls.video} autoPlay muted loop>
          <source src={engineVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
});
