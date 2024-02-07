import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
	gap: 40px;
  padding-top: 85px;
	
	@media (max-width: 660px) {
    flex-direction: column;
		padding-top: 40px;
	}
`;

export const Inner = styled.div`
	flex: 1 0 50%;
	
	@media (max-width: 660px) {
		flex: 1 0 100%;
		width: 100%;
	}
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 35px;

  @media (max-width: 660px) {
    font-size: 48px;
  }

  @media (max-width: 375px) {
    font-size: 38px;
  }
`;

export const MainImg = styled.img`
  width: 100%;
	max-height: 450px;
  object-fit: contain;
	margin: 0 auto;
`;
