import React, { FC } from "react";
import { JobCard, JobContent, JobImage } from "./Job.styles";
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
      <JobContent>
        <div>
          <p>{company}</p>
          <p>{title}</p>
          <div>{tag}</div>
        </div>
      </JobContent>
    </JobCard>
  );
};
export default Job;
