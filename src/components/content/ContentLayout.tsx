import styled from "styled-components";
import { TitleSection } from "./TitleSection";
import { DescriptionSecion } from "./DescriptionSecion";

const StyledContentLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ContentLayout() {
  return (
    <StyledContentLayout>
      <TitleSection />
      <DescriptionSecion />
    </StyledContentLayout>
  );
}

export { ContentLayout };
