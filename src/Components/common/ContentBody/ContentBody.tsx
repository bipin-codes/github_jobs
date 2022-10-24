import React, { PropsWithChildren } from "react";
import { Container } from "./ContentBody.styles";

const ContentBody: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
export default ContentBody;
