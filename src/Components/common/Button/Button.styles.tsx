import styled, { css } from "styled-components";

const activePage = css`
  background-color: #1e86ff;
  color: #fff;
`;

export const DefaultButton = styled.button<{ active: boolean }>`
  outline: none;
  border: 1px solid #b7bcce;
  padding: 0.75rem 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  margin: 0.5rem;
  color: #b7bcce;
  font-size: 0.75rem;
  font-weight: 400;

  ${({ active }) =>
    active && activePage} //if shrink is true apply the css above

    ${({ active }) =>
    !active &&
    css`
      &:hover {
        border-color: #1e86ff;
        color: #1e86ff;

        &:active {
          background-color: #1e86ff;
          color: #fff;
        }
      }
    `}
`;
