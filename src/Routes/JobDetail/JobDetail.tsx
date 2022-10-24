import ContentBody from "Components/common/ContentBody";
import LeftContainer from "Components/common/ContentBody/LeftContainer";
import RightContainer from "Components/common/ContentBody/RightContainer";
import Header from "Components/common/Header";
import Heading from "Components/common/Heading";
import Root from "Components/common/Root";
import React from "react";
const JobDetail = () => {
  return (
    <Root>
      <Header>
        <Heading></Heading>
      </Header>

      <ContentBody>
        <LeftContainer>
          <div>Left</div>
        </LeftContainer>
        <RightContainer>
          <div>Right</div>
        </RightContainer>
      </ContentBody>
    </Root>
  );
};
export default JobDetail;
