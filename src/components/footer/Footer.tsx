import styled from "styled-components";
import { FooterColumns } from "./FooterColumns";
import { windowPadding } from "../../styles/windowPadding";

const StyledFooter = styled.footer`
  ${windowPadding}
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterColumns />
    </StyledFooter>
  );
}

export { Footer };
