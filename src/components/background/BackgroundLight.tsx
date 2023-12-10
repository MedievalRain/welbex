import styled from "styled-components";

type BackgroundLightProps = {
  size: number;
  color: string;
  left?: string;
  top?: string;
};

export const BackgroundLight = styled.div<BackgroundLightProps>`
  position: absolute;
  z-index: -1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  flex-shrink: 0;
  border-radius: ${(props) => props.size}px;
  opacity: 0.5;
  background: ${(props) => props.color};
  filter: blur(196px);
`;
