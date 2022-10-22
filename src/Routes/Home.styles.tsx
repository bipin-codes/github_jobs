import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem 8rem;
  background-color: #f6f7fb;

  @media (max-width: 975px) {
    padding: 1rem;
  }
  @media (max-width: 350px) {
    padding: 0.5rem;
  }
`;
export const HomeHeader = styled.div`
  font-size: 1.5rem;
`;
export const StyledSpan = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
`;

export const HomeBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
