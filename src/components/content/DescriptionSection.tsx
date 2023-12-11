import styled from "styled-components";
import { FeaturesGrid } from "./FeaturesGrid";
import { PrimaryButton } from "./PrimaryButton";
import { resizeBreakpoint } from "../../styles/media";
import { SmallFeaturesGrid } from "./SmallFeaturesGrid";
import { useWidth } from "../../hooks/useWidth";

const StyledDescriptionSection = styled.section`
  width: 291px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    align-items: start;
  }
`;

const Title = styled.h2`
  display: block;
  text-align: right;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    width: 271px;
    text-align: start;
  }
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
  width: max-content;
  @media (max-width: 1024px) {
    text-transform: none;
  }
`;

function DescriptionSection() {
  const width = useWidth();
  const isScreenSmall = width > resizeBreakpoint;
  return (
    <StyledDescriptionSection>
      <Title>
        Вместе с <HighlightedTitle>бесплатной</HighlightedTitle>{" "}
        <HighlightedTitle>консультацией</HighlightedTitle> мы дарим:
      </Title>
      {isScreenSmall ? <FeaturesGrid /> : <SmallFeaturesGrid />}
      {isScreenSmall && <PrimaryButton>Получить консультацию</PrimaryButton>}
    </StyledDescriptionSection>
  );
}

export { DescriptionSection };
