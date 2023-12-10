import styled from "styled-components";
import Logo from "../Logo";
import { Contacts } from "./Contacts";

const StyledHeader = styled.header`
  background-color: transparent;
`;

const StyledNav = styled.nav`
  display: flex;
`;
const RoutesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <RoutesWrapper>ROUTES</RoutesWrapper>
        <Contacts />
      </StyledNav>
    </StyledHeader>
  );
}

export { Header };
