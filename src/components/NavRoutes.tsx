import styled from "styled-components";
import { NavRoute } from "./NavRoute";

const StyledNavRoutes = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  font-weight: 500;
  align-items: center;
`;

function NavRoutes() {
  return (
    <StyledNavRoutes>
      <NavRoute href="/">Услуги</NavRoute>
      <NavRoute href="/">Виджеты</NavRoute>
      <NavRoute href="/">Интеграции</NavRoute>
      <NavRoute href="/">Кейсы</NavRoute>
      <NavRoute href="/">Сертификаты</NavRoute>
    </StyledNavRoutes>
  );
}

export { NavRoutes };
