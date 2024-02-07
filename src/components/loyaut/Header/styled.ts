import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  z-index: 99;
  transition: .3s;
  background: #fafafa;
`;

export const Inner = styled.nav`
  max-width: 1240px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
	margin: 0 auto;
`

export const Logo = styled.span`
	font-weight: 700;
	font-size: 26px;
	
	@media(max-width: 480px) {
		font-size: 20px;
	}
`;

export const Menu = styled.div`
	@media (max-width: 991px) {
    display: none;
	}
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
	gap: 30px;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  font-weight: 500;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  & > a {
    position: relative;
    font-size: 14px;
		font-weight: 500;
	  
    &:not(:last-child) {
      margin-right: 15px;
      padding-right: 15px;
	    
	    @media(max-width: 480px) {
        margin-right: 8px;
        padding-right: 8px;
	    }
    }

    &:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: #ebebeb;
      position: absolute;
      top: 0;
      right: 0;
    }

    &:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
`;
