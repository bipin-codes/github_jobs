import React from "react";

import ContentBody from "Components/common/ContentBody";
import Header from "Components/common/Header";
import Heading from "Components/common/Heading";
import {
  JobTitle,
  Root,
  Days,
  Tag,
  TitleContainer,
  TitleMain,
  HStack,
  IconSpan,
  Left,
  Navigation,
  Right,
  StyledContent,
  StyledDescription,
  StyledHeading,
  DaysIcon,
  JobDetailsContainer,
  Logo,
  CompanyTitle,
  CompanyInfoContainer,
  Location,
} from "./JobDetail.styles";
import { useLocation } from "react-router-dom";
import IJob from "Components/Job/types";
import { cityName, filteredName, getDays } from "utils/helper";

const JobDetail = () => {
  const { state } = useLocation();
  const { job } = state as { job: IJob };

  return (
    <Root>
      <Header>
        <Heading></Heading>
      </Header>

      <ContentBody>
        <Left>
          <Navigation to={"/"}>
            <IconSpan>Arrow_Back</IconSpan>Back to search
          </Navigation>
          <StyledHeading>HOW TO APPLY</StyledHeading>
          <StyledContent>
            Please
            <a
              style={{ textDecoration: "none" }}
              href={job.redirect_url}
              target="_blank"
              rel="noreferrer"
            >
              {" apply "}
            </a>
            here for this Job.
          </StyledContent>
        </Left>
        <Right>
          <TitleContainer>
            <TitleMain>
              <JobTitle>{job.title}</JobTitle>
              <Tag>{filteredName(job.contract_type)}</Tag>
            </TitleMain>
            <HStack>
              <DaysIcon>Schedule</DaysIcon>
              <Days>{getDays(job.created.toString())} days ago</Days>
            </HStack>
          </TitleContainer>

          <JobDetailsContainer>
            <Logo image={"https://via.placeholder.com/150"}></Logo>
            <CompanyInfoContainer>
              <CompanyTitle>{job.company.display_name}</CompanyTitle>
              <HStack>
                <DaysIcon>public</DaysIcon>
                <Location>{cityName(job.location.display_name)}</Location>
              </HStack>
            </CompanyInfoContainer>
          </JobDetailsContainer>
          <StyledDescription>{job.description}</StyledDescription>
        </Right>
      </ContentBody>
    </Root>
  );
};
export default JobDetail;
