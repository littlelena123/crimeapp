import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { NavLink as LinkS } from "react-router-dom";
import { NavLink as LinkA } from "react-router-dom";
export const Nav = styled.nav`
background: #17263c;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  text-decoration: none;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
	text-decoration: none;
  
`;
export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  
`;
export const NavLinks = styled(LinkS)`
color: white;
display: flex;
align-items: center;
margin-top:1rem;
padding: 0 1rem;
font-size: 1.0rem;
height: 100%;
cursor: pointer;

text-decoration: none;
&:hover {
  color: #a3c2f0;
}
  &.active {
    border-bottom: 3px solid #a3c2f0;
  }
  text-decoration: none;
`;
export const NavLinksA = styled(LinkA)`
margin-top:1rem;
font-size: 1.0rem;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

	text-decoration: none;
  &:hover {
    color: #a3c2f0;
  }
`;
export const p = styled.p`
  text-decoration: none;
`;
