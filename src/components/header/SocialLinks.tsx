import styled from "styled-components";

import TelegramIcon from "../../icons/TelegramIcon";
import ViberIcon from "../../icons/ViberIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";
import { SocialLink } from "./SocialLink";
import { hideMedia } from "../../styles/media";

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 1.88rem;
  align-items: center;
  ${hideMedia}
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
