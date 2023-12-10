import styled from "styled-components";
import { Phone } from "./PhoneLink";
import { SocialLinks } from "./SocialLinks";

const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.94rem;
  align-items: center;
`;

function Contacts() {
  return (
    <StyledContacts>
      <Phone />
      <SocialLinks />
    </StyledContacts>
  );
}

export { Contacts };
