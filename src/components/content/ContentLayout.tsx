import styled from "styled-components";
import { TitleSection } from "./TitleSection";
import { DescriptionSection } from "./DescriptionSection";

const StyledContentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 94px;
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
