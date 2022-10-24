import React, { PropsWithChildren } from "react";
import { Container } from "./Root.styles";

const Root: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
export default Root;
