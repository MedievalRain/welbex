import styled from "styled-components";

const StyledTitleSection = styled.section``;
const Title = styled.h1`
  font-size: 3rem;
`;
const GradientTitle = styled.h1`
  background: linear-gradient(
    90deg,
    rgba(252, 176, 69, 1) 0%,
    rgba(255, 63, 120, 1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
