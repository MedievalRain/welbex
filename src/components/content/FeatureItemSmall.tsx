import styled from "styled-components";

export const FeatureItemSmall = styled.h3`
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.65px;
  text-transform: uppercase;
  position: relative;

  &::before {
    width: 10px;
    content: "";
    position: absolute;
    left: -20px;
    top: 6px;
    z-index: 1;
    border-top: 1px;
    border-image-slice: 1;
    border-width: 1px;
    border-style: solid;
    border-image-source: linear-gradient(
      to right,
      rgba(252, 176, 69, 1),
      rgba(255, 63, 120, 1)
    );
  }
`;
