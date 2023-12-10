import styled from "styled-components";
import { hideMedia } from "../../styles/hideMedia";

const StyledPhone = styled.a`
  white-space: nowrap;
  white-space: pre;
  ${hideMedia}
`;

function Phone() {
  return <StyledPhone href="tel:+7555555-55-55">+7 555 555-55-55</StyledPhone>;
}

export { Phone };
