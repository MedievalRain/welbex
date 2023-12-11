import styled from "styled-components";
import { resizeBreakpoint } from "../../hooks/useBreakpoint";

const StyledCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  @media (max-width: ${resizeBreakpoint}px) {
    align-items: start;
  }
`;

const PolicyUrl = styled.a`
  text-decoration: underline;
`;

function Copyright() {
  return (
    <StyledCopyright>
      <p>©WELBEX 2022. Все права защищены.</p>
      <PolicyUrl href="/">Политика конфиденциальности</PolicyUrl>
    </StyledCopyright>
  );
}

export { Copyright };
