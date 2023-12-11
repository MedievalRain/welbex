import { css } from "styled-components";

export const resizeBreakpoint = 1024;

export const hideMedia = css`
  @media (max-width: ${resizeBreakpoint}px) {
    display: none;
  }
`;
