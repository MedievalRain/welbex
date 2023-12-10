import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { hideMedia } from "../styles/hideMedia";
interface NavRouteProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hideOnSmallScreen?: boolean;
}

const StyledNavRoute = styled.a<NavRouteProps>`
  ${(props) => (props.hideOnSmallScreen ? hideMedia : null)}
  @media (max-width: 1024px) {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

function NavRoute(props: NavRouteProps) {
  return <StyledNavRoute {...props} />;
}

export { NavRoute };
