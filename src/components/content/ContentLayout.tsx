import styled from "styled-components";
import { TitleSection } from "./TitleSection";
import { DescriptionSection } from "./DescriptionSection";

const StyledContentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 94px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 45px;
    padding-top: 40px;
  }
`;

function ContentLayout() {
  return (
    <StyledContentLayout>
      <TitleSection />
      <DescriptionSection />
    </StyledContentLayout>
  );
}

export { ContentLayout };
