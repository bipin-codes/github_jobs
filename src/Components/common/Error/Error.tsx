import React from "react";
import { ErrorContainer } from "./Error.styles";
const Error: React.FC<{ msg: string }> = ({ msg }) => (
  <ErrorContainer>{msg}</ErrorContainer>
);

export default Error;
