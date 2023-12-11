import styled from "styled-components";
import { gradientTextColor } from "../../styles/gradientTextColor";

const StyledTitleSection = styled.section``;
const Title = styled.h1`
  font-size: 3rem;
`;
const GradientTitle = styled.h1`
  ${gradientTextColor}
  font-size: 3rem;
  font-weight: 900;
`;
const DescriptionText = styled.p`
  width: 275px;
  margin-top: 30px;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 400;
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
