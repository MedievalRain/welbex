import { SVGProps } from "react";
import styled from "styled-components";

interface StyledBallProps extends SVGProps<SVGSVGElement> {
  left: string;
  top: string;
}

export const StyledBall = styled.svg<StyledBallProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;
