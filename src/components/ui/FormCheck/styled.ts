import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
	gap: 20px;
`;

export const InputTabs = styled.div`
  display: flex;
  align-items: center;
	gap: 15px;
`;

export const SubmitButton = styled.button`
	display: block;
	margin: 0 auto;
  outline: none;
  border: 0px;
  white-space: nowrap;
  height: 65px;
  background: var(--green-color);
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  padding: 0 55px;
  border-radius: 10px;
  transition: .3s;
  cursor: pointer;
	
	&:hover {
		background-color: var(--accent-color);
	}
`;
