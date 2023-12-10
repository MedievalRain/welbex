import styled from "styled-components";
import Logo from "../Logo";
import { Contacts } from "./Contacts";
import { NavRoutes } from "./NavRoutes";

const StyledHeader = styled.header`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <NavRoutes />
      </StyledNav>
      <Contacts />
    </StyledHeader>
  );
}

export { Header };
