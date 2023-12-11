import styled from "styled-components";
import { FeatureItemSmall } from "./FeatureItemSmall";

const StyledSmallFeaturesGrid = styled.div`
  margin-bottom: 61px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 31px;
  padding-left: 20px;
`;

function SmallFeaturesGrid() {
  return (
    <StyledSmallFeaturesGrid>
      <FeatureItemSmall>Skype аудит</FeatureItemSmall>
      <FeatureItemSmall>30 виджетов</FeatureItemSmall>
      <FeatureItemSmall>Dashboard</FeatureItemSmall>
      <FeatureItemSmall>Месяц amoCRM</FeatureItemSmall>
    </StyledSmallFeaturesGrid>
  );
}

export { SmallFeaturesGrid };
