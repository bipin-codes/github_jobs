import React, { FC, PropsWithChildren } from "react";
import { Container } from "./LeftContainer.styles";
const LeftContainer: FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
export default LeftContainer;
