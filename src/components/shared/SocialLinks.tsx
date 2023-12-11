import styled from "styled-components";

import TelegramIcon from "../../icons/TelegramIcon";
import ViberIcon from "../../icons/ViberIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";
import { SocialLink } from "./SocialLink";
import { forwardRef } from "react";

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 100px;
  justify-content: space-between;
`;

const SocialLinks = forwardRef<HTMLDivElement, { className?: string }>(
  (props, ref) => (
    <StyledSocialLinks {...props} ref={ref}>
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
  )
);

export { SocialLinks };
