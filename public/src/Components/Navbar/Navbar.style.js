import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin: auto;
  height: ${(props) => (props.extendNavbar ? "320px" : "100px")};
  background-color: #E85A4F;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 100px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  @media (max-width: 700px) {
    padding-left: 2%;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  padding-top: 5px;
  margin: 10px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLinkLogo = styled(Link)`

`;

export const NavbarLink = styled(Link)`
  color: #fcfcfd;
  font-weight: 400;
  font-size: 40px;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
  &:hover {
    color: #595958;
`;

export const NavbarLinkExtended = styled(Link)`
  color: #EAE7DC;
  font-weight: 400;
  font-size: 40px;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  max-width: 400px;
  height: auto;
  cursor: pointer;
`;

export const OpenLinksButton = styled.button`
  position: absolute;
  top: 12px;
  right: 0px;
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fcfcfd;
  font-size: 60px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;