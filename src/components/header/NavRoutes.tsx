import styled from "styled-components";
import { NavRoute } from "./NavRoute";
import {
  resizeBreakpoint,
  useBreakpointContext,
} from "../../hooks/useBreakpoint";

const StyledNavRoutes = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;

  @media (max-width: ${resizeBreakpoint}px) {
    height: 55px;
    justify-content: space-between;
    width: 100%;
    gap: 0px;
  }
`;

function NavRoutes() {
  const breakpoint = useBreakpointContext();
  return (
    <StyledNavRoutes>
      <NavRoute href="/">Услуги</NavRoute>
      <NavRoute href="/">Виджеты</NavRoute>
      <NavRoute href="/">Интеграции</NavRoute>
      <NavRoute href="/">Кейсы</NavRoute>
      {breakpoint === "big" && <NavRoute href="/">Сертификаты</NavRoute>}
    </StyledNavRoutes>
  );
}

export { NavRoutes };
