import { Container as LeftContainer } from "Components/common/ContentBody/LeftContainer/LeftContainer.styles";
import { Container as RightContainer } from "Components/common/ContentBody/RightContainer/RightContainer.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container as RootContainer } from "Components/common/Root/Root.styles";

export const Root = styled(RootContainer)`
  min-height: 100vh;
`;
export const Navigation = styled(Link)`
  color: #1e86ff;
  text-decoration: none;
`;
export const IconSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
  margin-right: 0.5rem;
`;

export const Left = styled(LeftContainer)`
  margin: 2rem 0;
  flex: 3;
`;
export const Right = styled(RightContainer)`
  flex: 7;
`;

export const StyledHeading = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #b9bdcf;
  margin: 1rem 0;
`;
export const StyledContent = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  color: #334680;
`;

export const StyledDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #334680;
`;
export const JobTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #334680;
`;
