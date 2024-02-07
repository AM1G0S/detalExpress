import { FC, memo } from "react";
import { FormCheck } from "../../components";
import cls from "./Home.module.scss";

import mainImgSrc from "../../assets/img/main-image.png";

interface HomeProps {}

export const Home: FC = memo((props: HomeProps) => {
  const {} = props;

  return (
    <div className={cls.formWrapper}>
      <div className={cls.inner}>
        <h1 className={cls.title}>Нужны автозапчасти?</h1>
        <FormCheck></FormCheck>
      </div>
      <div className={cls.inner}>
        <img className={cls.mainImg} src={mainImgSrc} alt={""}/>
      </div>
    </div>
  );
});
