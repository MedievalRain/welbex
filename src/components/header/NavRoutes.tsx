import styled from "styled-components";
import { NavRoute } from "./NavRoute";

const StyledNavRoutes = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;

  @media (max-width: 1024px) {
    height: 55px;
    justify-content: space-between;
    width: 100%;
    gap: 0px;
  }
`;

function NavRoutes() {
  return (
    <StyledNavRoutes>
      <NavRoute href="/">Услуги</NavRoute>
      <NavRoute href="/">Виджеты</NavRoute>
      <NavRoute href="/">Интеграции</NavRoute>
      <NavRoute href="/">Кейсы</NavRoute>
      <NavRoute hideOnSmallScreen href="/">
        Сертификаты
      </NavRoute>
    </StyledNavRoutes>
  );
}

export { NavRoutes };
