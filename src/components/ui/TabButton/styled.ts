import styled, { css } from 'styled-components';

interface ButtonProps {
	isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(33.33% - 13.33px);
  height: 50px;
  padding: 0 30px;
  background: var(--grey-color);
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  text-decoration: none;
  font-weight: 700;
  transition: .3s;
  font-size: 16px;
  cursor: pointer;

  ${({ isActive }) => isActive && css`
    color: var(--light-color);
    background: var(--accent-color); // Измените на нужный цвет для активного состояния
  `}
`;
