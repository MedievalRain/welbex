import { Phone } from "../shared/PhoneLink";
import { SocialLinks } from "../shared/SocialLinks";
import { FooterColumnTitle, FooterColumnList } from "./FooterColumn";
import styled from "styled-components";

const ContactsColumnList = styled(FooterColumnList)`
  align-items: end;
  @media (max-width: 1024px) {
    align-items: start;
  }
`;

const ContactsColumnTitle = styled(FooterColumnTitle)`
  text-align: end;
  @media (max-width: 1024px) {
    text-align: start;
  }
`;

const FooterSocialLink = styled(SocialLinks)`
  max-width: 80px;
`;

function FooterContactsColumn() {
  return (
    <div>
      <ContactsColumnTitle>Контакты</ContactsColumnTitle>
      <ContactsColumnList>
        <li>
          <Phone />
        </li>
        <FooterSocialLink />
        <li>Москва, Путевой проезд 3с1, к 902</li>
      </ContactsColumnList>
    </div>
  );
}

export { FooterContactsColumn };
