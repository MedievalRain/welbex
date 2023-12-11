import styled from "styled-components";
import { FeaturesGrid } from "./FeaturesGrid";
import { PrimaryButton } from "./PrimaryButton";

const StyledDescriptionSection = styled.section`
  width: 291px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  display: block;
  text-align: right;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 40px;
`;

const HighlightedTitle = styled.h2`
  display: inline;
  background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;

function DescriptionSection() {
  return (
    <StyledDescriptionSection>
      <Title>
        Вместе с <HighlightedTitle>бесплатной</HighlightedTitle>{" "}
        <HighlightedTitle>консультацией</HighlightedTitle> мы дарим:
      </Title>
      <FeaturesGrid />
      <PrimaryButton>Получить консультацию</PrimaryButton>
    </StyledDescriptionSection>
  );
}

export { DescriptionSection };
