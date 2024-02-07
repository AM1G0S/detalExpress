import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
	gap: 40px;
  padding-top: 85px;
`;

export const Inner = styled.div`
	flex: 1 1 50%;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 1.1;
	margin-bottom: 35px;
`;

export const MainImg = styled.img`
  width: 100%;
	max-height: 450px;
  object-fit: contain;
	margin: 0 auto;
`;
