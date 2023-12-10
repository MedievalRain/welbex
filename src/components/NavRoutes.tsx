import styled from "styled-components";

const StyledNavRoutes = styled.div`
  display: flex;
  justify-content: start;
  gap: 1.875rem;
  font-weight: 500;
  align-items: center;
`;

function NavRoutes() {
  return (
    <StyledNavRoutes>
      <a href="/">Услуги</a>
      <a href="/">Виджеты</a>
      <a href="/">Интеграции</a>
      <a href="/">Кейсы</a>
      <a href="/">Сертификаты</a>
    </StyledNavRoutes>
  );
}

export { NavRoutes };
