import { FC, memo } from "react";
import { FormCheck } from "../../components";
import {FormWrapper, Inner, MainImg, Title} from "./styled";

import mainImgSrc from "../../assets/img/main-image.png";

interface HomeProps {}

export const Home: FC = memo((props: HomeProps) => {
  const {} = props;

  return (
    <FormWrapper>
      <Inner>
        <Title>Нужны автозапчасти?</Title>
        <FormCheck></FormCheck>
      </Inner>
      <Inner>
        <MainImg src={mainImgSrc} alt={""}/>
      </Inner>
    </FormWrapper>
  );
});
