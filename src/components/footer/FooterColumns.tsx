import styled from "styled-components";
import {
  FooterListWrapper,
  FooterColumnList,
  FooterColumnTitle,
} from "./FooterColumn";

import { FooterContactsColumn } from "./FooterContactsColumn";

const StyledFooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 23px;
    margin-bottom: 50px;
  }
`;

function FooterColumns() {
  return (
    <StyledFooterColumns>
      <div>
        <FooterColumnTitle>О компании</FooterColumnTitle>
        <FooterColumnList>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </FooterColumnList>
      </div>
      <div>
        <FooterColumnTitle>Меню</FooterColumnTitle>
        <FooterListWrapper>
          <FooterColumnList>
            <li>Расчёт стоимости</li>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграции</li>
            <li>Наши клиенты</li>
          </FooterColumnList>
          <FooterColumnList>
            <li>Кейсы</li>
            <li>Благодарственные письма</li>
            <li>Сертификаты</li>
            <li>Блог на Youtube</li>
            <li>Вопрос / Ответ</li>
          </FooterColumnList>
        </FooterListWrapper>
      </div>
      <FooterContactsColumn />
    </StyledFooterColumns>
  );
}

export { FooterColumns };
