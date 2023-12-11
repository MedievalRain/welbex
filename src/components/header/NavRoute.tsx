import styled from "styled-components";
import { resizeBreakpoint } from "../../hooks/useBreakpoint";

export const NavRoute = styled.a`
  @media (max-width: ${resizeBreakpoint}px) {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;
