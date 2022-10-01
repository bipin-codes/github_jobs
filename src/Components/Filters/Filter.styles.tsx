import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
`;
export const FullTimeInput = styled.input.attrs({ type: "checkbox" })`
  border-color: #b9bdcf;
  color: #b9bdcf;
`;
type InputProps = {
  target: string;
};
export const InputLabel = styled.label.attrs<InputProps>(({ target }) => ({
  htmlFor: target,
}))<InputProps>`
  font-family: "Poppins", sans-serif;
  color: #334680;
  font-weight: 500;
`;

export const StyledHeading = styled.h6`
  color: #b9bdcf;
  font-size: 1rem;
`;

export const LocationContainer = styled.div`
  border: none;
  outline: none;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 14px;
  border-radius: 4px;
  width: 23rem;
  height: 4rem;
  align-items: center;
  justify-content: space-around;
  display: flex;
  color: #b9bdcf;
`;
export const IconSpan = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
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

export const ToggleContainer = styled.div`
  margin: 0.5rem;
`;
export const ToggleInput = styled.input.attrs({
  type: "radio",
  name: "location",
})``;
