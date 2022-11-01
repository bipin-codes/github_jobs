import React, { FC } from 'react';
import {
  Title,
  Company,
  JobCard,
  JobContent,
  JobImage,
  FooterLeft,
  JobFooter,
  FooterIcon,
  FooterLabel,
  FooterRight,
} from './Job.styles';

import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
export interface IJob {
  company: string;
  title: string;
  logo: string;
  tag: string;
  location: string;
  posted: Date;
}

const Job: FC<IJob> = ({ title, logo, company, tag, posted, location }) => {
  const navigate = useNavigate();
  const onJobSelected = () => navigate('job');
  return (
    <JobCard onClick={onJobSelected}>
      <JobImage image={require('../../assets/images/im.png')}></JobImage>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}
      >
        <JobContent>
          <Company>{company}</Company>
          <Title>{title}</Title>

          <JobFooter>
            <FooterLeft>{tag}</FooterLeft>
            <FooterRight>
              <FooterIcon> Public </FooterIcon>
              <FooterLabel>{location}</FooterLabel>
              <FooterIcon> Schedule </FooterIcon>
              <FooterLabel>
                <Moment diff={posted} unit="days" /> days ago
              </FooterLabel>
            </FooterRight>
          </JobFooter>
        </JobContent>
      </div>
    </JobCard>
  );
};
export default Job;
