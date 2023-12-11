import styled from "styled-components";

import TelegramIcon from "../../icons/TelegramIcon";
import ViberIcon from "../../icons/ViberIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";
import { SocialLink } from "./SocialLink";

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  width: 100%;
  max-width: 100px;
  justify-content: space-between;
`;

function SocialLinks() {
  return (
    <StyledSocialLinks>
      <SocialLink href={"/"}>
        <TelegramIcon />
      </SocialLink>
      <SocialLink href={"/"}>
        <ViberIcon />
      </SocialLink>
      <SocialLink href={"/"}>
        <WhatsappIcon />
      </SocialLink>
    </StyledSocialLinks>
  );
}

export { SocialLinks };
