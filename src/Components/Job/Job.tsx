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

const cityName = (name: string) => name.split(",")[0];
const getDays = (from: string) => {
  let timeDifference = Date.now() - new Date(from).getTime();
  let dayMilliSeconds = 1000 * 60 * 60 * 24;
  let totalDays = Math.abs(timeDifference / dayMilliSeconds); // it returns negative value if start date < end date
  totalDays = Math.floor(totalDays); // to get complete days
  return totalDays;
};

const filteredName = (name: string) => {
  if (name.indexOf("_") > -1) return name.replace("_", " ");
  return name;
};

const Job: FC<IJob> = ({
  title,
  logo,
  company,
  contract_type,
  created,
  location,
}) => {
  const navigate = useNavigate();
  const onJobSelected = () => navigate("job");
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
