import styled from "styled-components";
import {
  FeatureTitle,
  FeatureDescription,
  FeatureWrapper,
} from "./FeatureItem";

const StyledFeaturesGrid = styled.div`
  margin-bottom: 61px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 31px;
`;

function FeaturesGrid() {
  return (
    <StyledFeaturesGrid>
      <FeatureWrapper>
        <FeatureTitle>Виджеты</FeatureTitle>
        <FeatureDescription>30 готовых решений</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper>
        <FeatureTitle>Dashboard</FeatureTitle>
        <FeatureDescription>с показателями вашего бизнеса</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper>
        <FeatureTitle>Skype Аудит</FeatureTitle>
        <FeatureDescription>отдела продажи CRM системы</FeatureDescription>
      </FeatureWrapper>
      <FeatureWrapper>
        <FeatureTitle>35 дней</FeatureTitle>
        <FeatureDescription>использования CRM</FeatureDescription>
      </FeatureWrapper>
    </StyledFeaturesGrid>
  );
}

export { FeaturesGrid };
