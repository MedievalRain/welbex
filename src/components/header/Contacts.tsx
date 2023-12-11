import styled from "styled-components";
import { Phone } from "../shared/PhoneLink";
import { SocialLinks } from "./SocialLinks";
import { useBreakpointContext } from "../../hooks/useBreakpoint";

const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.94rem;
  align-items: center;
`;

function Contacts() {
  const breakpoint = useBreakpointContext();
  return (
    <StyledContacts>
      {breakpoint === "big" && <Phone />}
      <SocialLinks />
    </StyledContacts>
  );
}

export { Contacts };
