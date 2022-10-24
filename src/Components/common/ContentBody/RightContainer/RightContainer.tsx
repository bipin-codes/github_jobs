import React, { FC, PropsWithChildren } from "react";
import { Container } from "./RightContainer.styles";

const RightContainer: FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
export default RightContainer;
