import React, { FC } from "react";
import {
  Title,
  Company,
  JobCard,
  JobContent,
  JobImage,
  Tag,
  JobFooter,
  FooterIcon,
  FooterLabel,
} from "./Job.styles";

import Moment from "react-moment";
export interface IJob {
  company: string;
  title: string;
  logo: string;
  tag: string;
  location: string;
  posted: Date;
}

const Job: FC<IJob> = ({ title, logo, company, tag, posted, location }) => {
  return (
    <JobCard>
      <JobImage image={require("../../assets/images/im.png")}></JobImage>
      <div
        style={{ display: "flex", justifyContent: "space-between", flex: 1 }}
      >
        <JobContent>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Tag>{tag}</Tag>
        </JobContent>
        <JobFooter>
          <FooterIcon> Public </FooterIcon>
          <FooterLabel>{location}</FooterLabel>
          <FooterIcon> Schedule </FooterIcon>
          <FooterLabel>
            <Moment diff={posted} unit="days" /> days ago
          </FooterLabel>
        </JobFooter>
      </div>
    </JobCard>
  );
};
export default Job;
