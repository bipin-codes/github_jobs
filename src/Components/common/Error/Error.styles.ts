import styled from "styled-components";

interface ErrorDivProps {
  msg: string;
}
export const ErrorContainer = styled.div<ErrorDivProps>`
  font-size: 0.8rem;
  background-color: #fd6e73;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  padding: 0.2rem;
  color: #82171a;
  font-weight: 600;
  :before {
    content: "${({ msg }) => msg}";
  }
`;
