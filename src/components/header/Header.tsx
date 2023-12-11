import styled from "styled-components";
import Logo from "../../Logo";
import { Contacts } from "./Contacts";
import { NavRoutes } from "./NavRoutes";
import { BrandDescription } from "./BrandDescription";
import { windowPadding } from "../../styles/windowPadding";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  ${windowPadding}
`;

const StyledHeader = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  line-height: normal;
  gap: 0.5rem;
  margin-top: 2.875rem;
  @media (max-width: 1024px) {
    margin: 0rem;
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.25rem;
  width: 100%;
`;

function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <StyledNav>
          <Logo />
          <NavRoutes />
        </StyledNav>
        <Contacts />
      </StyledHeader>
      <BrandDescription />
    </Wrapper>
  );
}

export { Header };
