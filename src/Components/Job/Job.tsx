import React, { FC } from "react";
import IJob from "./types";
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
} from "./Job.styles";

import { useNavigate } from "react-router-dom";
import { cityName, filteredName, getDays } from "utils/helper";

const Job: FC<{ job: IJob }> = ({ job }) => {
  const navigate = useNavigate();
  const { title, company, contract_type, created, location } = job;
  const onJobSelected = () => navigate("job", { state: { job } });
  return (
    <JobCard onClick={onJobSelected}>
      <JobImage image={"https://via.placeholder.com/150"}></JobImage>
      <div
        style={{ display: "flex", justifyContent: "space-between", flex: 1 }}
      >
        <JobContent>
          <Company>{company.display_name}</Company>
          <Title>{title}</Title>

          <JobFooter>
            {contract_type && (
              <FooterLeft>{filteredName(contract_type)}</FooterLeft>
            )}
            <FooterRight>
              <FooterIcon> Public </FooterIcon>
              <FooterLabel>{cityName(location.display_name)}</FooterLabel>
              <FooterIcon> Schedule </FooterIcon>
              <FooterLabel>
                {getDays(created.toString())}
                days ago
              </FooterLabel>
            </FooterRight>
          </JobFooter>
        </JobContent>
      </div>
    </JobCard>
  );
};
export default Job;
