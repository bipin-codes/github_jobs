import React, { PropsWithChildren } from "react";
import { ErrorContainer } from "./Error.styles";
const Error: React.FC<PropsWithChildren<{ msg: string }>> = ({
  children,
  msg,
}) => <ErrorContainer msg={msg}>{children}</ErrorContainer>;

export default Error;
