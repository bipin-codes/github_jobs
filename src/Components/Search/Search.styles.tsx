import styled from "styled-components";

export const Root = styled.div<{ img: string }>`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 4rem 10rem;
  border-radius: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 1100px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 815px) {
    padding: 2rem 2rem;
  }
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
  flex-grow: 8;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 14px;
  text-overflow: ellipsis;
`;
export const Button = styled.button`
  background-color: #1e86ff;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 0.25rem;
  flex-grow: 1;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  @media (max-width: 527px) {
    padding: 0.5rem;
  }
  &:hover {
    cursor: pointer;
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
