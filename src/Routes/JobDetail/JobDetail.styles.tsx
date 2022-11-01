import { Container as LeftContainer } from 'Components/common/ContentBody/LeftContainer/LeftContainer.styles';
import { Container as RightContainer } from 'Components/common/ContentBody/RightContainer/RightContainer.styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container as RootContainer } from 'Components/common/Root/Root.styles';
import { FooterLeft } from 'Components/Job/Job.styles';

export const Root = styled(RootContainer)`
  min-height: 100vh;
`;
export const Navigation = styled(Link)`
  color: #1e86ff;
  text-decoration: none;
`;
export const IconSpan = styled.span.attrs({
  className: 'material-symbols-outlined',
})`
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
  margin-right: 0.5rem;
  width: 0.94rem;
  height: 0.94rem;
`;

export const Left = styled(LeftContainer)`
  margin: 2rem 0;
  flex: 3;
`;
export const Right = styled(RightContainer)`
  flex: 7;
`;

export const StyledHeading = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #b9bdcf;
  margin: 1rem 0;
`;
export const StyledContent = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  color: #334680;
`;

export const StyledDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #334680;
`;
export const JobTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #334680;
`;

export const Tag = styled(FooterLeft)`
  margin-left: 0.5rem;
  line-height: 0
  padding: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const TitleMain = styled.div`
  display: flex;
  align-items: center;
`;
export const HStack = styled.div`
  display: flex;
  align-items: center;
`;
export const DaysIcon = styled(IconSpan)`
  color: #b7bcce;
`;
export const Days = styled.span`
  color: #b7bcce;
`;

export const JobDetailsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
`;
export const Logo = styled.img.attrs<{ image: string }>(({ image }) => ({
  src: image,
}))<{
  image: string;
}>`
  height: 42px;
  width: 42px;
  border-radius: 4px;
`;
export const CompanyInfoContainer = styled.div`
  margin: 0 1rem;
`;
export const CompanyTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #334680;
`;
export const Location = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #334680;
  line-height: 1rem;
`;
