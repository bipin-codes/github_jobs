import styled from "styled-components";

export const JobCard = styled.div`
  display: flex;
  margin: 2rem 0;
  background-color: #fff;
  padding: 1rem;
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
`;

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #334680;
`;

export const Tag = styled.div`
  border: 1px solid #334680;
  border-radius: 0.25rem;
  width: 4rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.87rem;
  color: #334680;
  padding: 0.5rem;
  text-align: center;
`;

export const JobFooter = styled.div`
  display: flex;
  align-self: flex-end;

  // flex: 1;
  // align-items: center;
`;

export const FooterLabel = styled.div`
  color: #b9bdcf;
`;
export const FooterIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  font-size: 1rem;
  margin: 0 0.5rem;
  text-align: right;
  color: #b9bdcf;
`;
