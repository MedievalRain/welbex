import { css } from "styled-components";

export const gradientTextColor = css`
  background: linear-gradient(
    90deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(255, 63, 120, 1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
