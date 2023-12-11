import styled from "styled-components";
import { gradientTextColor } from "../../styles/gradientTextColor";
import { resizeBreakpoint } from "../../hooks/useBreakpoint";

const StyledTitleSection = styled.section`
  font-size: 3rem;
  @media (max-width: ${resizeBreakpoint}px) {
    font-size: 2.25rem;
  }
`;
const Title = styled.h1``;

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
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 400;
  @media (max-width: ${resizeBreakpoint}px) {
    width: 271px;
  }
`;
function TitleSection() {
  return (
    <StyledTitleSection>
      <Title>
        Зарабатывайте <br /> больше
      </Title>
      <GradientTitle>с WELBEX</GradientTitle>{" "}
      <DescriptionText>Развиваем и контролируем продажи за вас</DescriptionText>
    </StyledTitleSection>
  );
}

export { TitleSection };
