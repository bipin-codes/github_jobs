import styled from "styled-components";

export const Root = styled.div<{ img: string }>`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 4rem 9rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const Container = styled.div`
  padding: 0.25rem;
  background: #fff;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #b9bdcf;
  flex-grow: 1;
`;
export const Input = styled.input.attrs({
  placeholderTextColor: "#b9bdcf",
})`
  border: none;
  outline: none;
  background-color: #fff;
  flex-grow: 9;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 14px;
`;
export const Button = styled.button`
  background-color: #1e86ff;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 0.25rem;
  flex-grow: 1;
  width: 9rem;
  height: 4rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const IconSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
`;
