import styled from "styled-components";
import { TitleSection } from "./TitleSection";
import { DescriptionSection } from "./DescriptionSection";
import { NoiseBackground } from "../background/NoiseBackground";
import {
  resizeBreakpoint,
  useBreakpointContext,
} from "../../hooks/useBreakpoint";
import { windowPadding } from "../../styles/windowPadding";

const StyledContentLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${resizeBreakpoint}px) {
    flex-direction: column;
    gap: 45px;
    padding-top: 40px;
    overflow: hidden;
  }
  margin-bottom: 124px;
  ${windowPadding}
  @media (max-width: ${resizeBreakpoint}px) {
    margin-bottom: 35px;
  }
`;

function ContentLayout() {
  const breakpoint = useBreakpointContext();
  return (
    <StyledContentLayout>
      {breakpoint === "small" && <NoiseBackground />}
      <TitleSection />
      <DescriptionSection />
    </StyledContentLayout>
  );
}

export { ContentLayout };
