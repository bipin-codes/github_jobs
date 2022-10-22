import styled from "styled-components";

export const Container = styled.div`
  text-align: right;

  @media (max-width: 680px) {
    text-align: center;
  }
`;
export const IconSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
`;
