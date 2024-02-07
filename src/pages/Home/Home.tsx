import { FC, memo } from "react";
import { FormCheck } from "../../components";
import { Inner, Title } from "./styled";

interface HomeProps {}

export const Home: FC = memo((props: HomeProps) => {
  const {} = props;

  return (
    <>
      <Inner>
        <Title>Проверь историю автомобиля</Title>
        <FormCheck></FormCheck>
      </Inner>
      <Inner></Inner>
    </>
  );
});
