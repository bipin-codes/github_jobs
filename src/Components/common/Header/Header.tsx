import React, { PropsWithChildren } from "react";
import { Container } from "./Header.styles";
const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
export default Header;
