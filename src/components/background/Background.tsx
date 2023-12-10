import styled from "styled-components";
import { BackgroundLight } from "./BackgroundLight";

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

function Background() {
  return (
    <StyledBackground>
      <BackgroundLight color="#961A1A" size={311} left={"-102px"} top={"25%"} />
      <BackgroundLight color="#833AB4" size={259} left={"41%"} top={"-154px"} />
    </StyledBackground>
  );
}

export { Background };
