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

  @media (max-width: 680px) {
    padding: 0.6rem;
    margin: 0.2rem;
  }

  ${({ active }) => active && activePage}

  ${({ active, disabled }) =>
    !active &&
    !disabled &&
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
export const FixButton = styled(DefaultButton)`
  padding: 0.2rem;
  margin: 0 1rem;
  width: 70px;
  color: #fff;
  outline: none;
  background-color: #1e86ff;
  border: none;
`;
