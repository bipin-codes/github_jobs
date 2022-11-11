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

import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

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
      <JobImage image={require("../../assets/images/im.png")}></JobImage>
      <div
        style={{ display: "flex", justifyContent: "space-between", flex: 1 }}
      >
        <JobContent>
          <Company>{company.display_name}</Company>
          <Title>{title}</Title>

          <JobFooter>
            <FooterLeft>{contract_type}</FooterLeft>
            <FooterRight>
              <FooterIcon> Public </FooterIcon>
              <FooterLabel>{location.display_name}</FooterLabel>
              <FooterIcon> Schedule </FooterIcon>
              <FooterLabel>
                <Moment diff={created} unit="days" /> days ago
              </FooterLabel>
            </FooterRight>
          </JobFooter>
        </JobContent>
      </div>
    </JobCard>
  );
};
export default Job;
