import styled from "styled-components";

export const JobCard = styled.div`
  display: flex;
  margin: 2rem 0;
  background-color: #fff;
`;
export const JobImage = styled.img.attrs<{ image: string }>(({ image }) => ({
  src: image,
}))<{
  image: string;
}>`
  height: 90px;
  width: 90px;
`;

export const JobContent = styled.div`
  display: flex;
`;
