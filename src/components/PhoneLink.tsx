import styled from "styled-components";

const StyledPhone = styled.a`
  white-space: nowrap;
  white-space: pre;
`;

function Phone() {
  return <StyledPhone href="tel:+7555555-55-55">+7 555 555-55-55</StyledPhone>;
}

export { Phone };
