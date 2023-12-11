import styled from "styled-components";
import { Phone } from "../shared/PhoneLink";
import { SocialLinks } from "../shared/SocialLinks";
import { useBreakpointContext } from "../../hooks/useBreakpoint";

const StyledContacts = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 47px;
`;

function Contacts() {
  const breakpoint = useBreakpointContext();
  return (
    <StyledContacts>
      {breakpoint === "big" && <Phone />}
      {breakpoint === "big" && <SocialLinks />}
    </StyledContacts>
  );
}

export { Contacts };
