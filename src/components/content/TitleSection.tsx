import styled from "styled-components";
import { gradientTextColor } from "../../styles/gradientTextColor";
import { resizeBreakpoint } from "../../hooks/useBreakpoint";

const StyledTitleSection = styled.section`
  font-size: 3rem;
  max-width: 362px;
  line-height: normal;
  @media (max-width: ${resizeBreakpoint}px) {
    font-size: 2.25rem;
  }
`;

const GradientTitle = styled.h1`
  ${gradientTextColor}
  font-weight: 900;
  margin-bottom: 30px;
  @media (max-width: ${resizeBreakpoint}px) {
    margin-bottom: 15px;
  }
`;
const DescriptionText = styled.p`
  width: 275px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  @media (max-width: ${resizeBreakpoint}px) {
    width: 271px;
  }
`;
function TitleSection() {
  return (
    <StyledTitleSection>
      <h1>Зарабатывайте больше</h1>
      <GradientTitle>с WELBEX</GradientTitle>{" "}
      <DescriptionText>Развиваем и контролируем продажи за вас</DescriptionText>
    </StyledTitleSection>
  );
}

export { TitleSection };
