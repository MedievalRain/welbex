import styled from "styled-components";
import { FooterColumns } from "./FooterColumns";
import { windowPadding } from "../../styles/windowPadding";
import { Copyright } from "./Copyright";

const StyledFooter = styled.footer`
  ${windowPadding}
  margin-bottom:60px;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterColumns />
      <Copyright />
    </StyledFooter>
  );
}

export { Footer };
