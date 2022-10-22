import styled from "styled-components";

export const JobCard = styled.div`
  display: flex;
  margin: 2rem 0;
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;
  @media (max-width: 496px) {
    padding: 0.5rem;
  }
  @media (max-width: 350px) {
    padding: 0.2rem;
  }
`;
export const JobImage = styled.img.attrs<{ image: string }>(({ image }) => ({
  src: image,
}))<{
  image: string;
}>`
  height: 90px;
  width: 90px;
  border-radius: 4px;
`;

export const JobContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // flex-grow: 1;
  margin-left: 1rem;
  flex: 1;
`;

export const Company = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: #334680;
  margin: 0.5rem 0;
`;

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #334680;
  margin: 0.5rem 0;
`;
export const JobFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  // @media (max-width: 496px) {
  //   display: block;
  //   flex-direction: column;
  // }
`;
export const FooterLeft = styled.div`
  border: 1px solid #334680;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.87rem;
  color: #334680;
  padding: 0.5rem;
  text-align: center;
  @media (max-width: 496px) {
    margin: 0.5rem 0;
  }
`;
export const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
`;

export const FooterLabel = styled.p`
  color: #b9bdcf;
  font-size: 0.75rem;
`;
export const FooterIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 0.9rem;
  margin: 0 0.5rem;
  text-align: right;
  color: #b9bdcf;
`;
