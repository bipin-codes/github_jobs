import styled from "styled-components";

export const FullTimeContainer = styled.div`
  margin-top: 2rem;
`;
export const FullTimeInput = styled.input.attrs({ type: "checkbox" })`
  border-color: #b9bdcf;
  color: #b9bdcf;
  margin-right: 0.5rem;
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
  &:hover {
    font-weight: 800;
  }
`;

export const LocationContainer = styled.div`
  margin: 0.5rem 0;
`;
export const StyledHeading = styled.h6`
  color: #b9bdcf;
  font-size: 1rem;
  margin: 1rem 0;
`;
export const LocationFilter = styled.div`
  border: none;
  outline: none;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 0.87rem;
  border-radius: 0.25rem;
  align-items: center;
  padding: 1rem 0.5rem;
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
  line-height: 0.87rem;
  margin-right: 0.5rem;
`;

export const ToggleContainer = styled.div`
  margin-top: 1rem;
`;
export const ToggleInput = styled.input.attrs({
  type: "radio",
  name: "location",
})`
  margin-right: 0.5rem;
`;
