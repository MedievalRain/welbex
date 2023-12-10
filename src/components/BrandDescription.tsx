import styled from "styled-components";

const StyledBrandDescription = styled.p`
  width: 140px;
  font-family: Montserrat;
  font-size: 0.625rem;
  font-weight: 300;
`;

function BrandDescription() {
  return (
    <StyledBrandDescription>
      крупный интегратор CRM в Росcии и ещё 8 странах
    </StyledBrandDescription>
  );
}

export { BrandDescription };
