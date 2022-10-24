import { useEffect, useState } from "react";
import Filter from "Components/Filters";

import Jobs from "Components/Jobs";
import Paginator from "Components/Paginator";
import Search from "Components/Search";
import Heading from "Components/common/Heading";
import Root from "Components/common/Root";
import Header from "Components/common/Header";
import ContentBody from "Components/common/ContentBody";
import LeftContainer from "Components/common/ContentBody/LeftContainer";
import RightContainer from "Components/common/ContentBody/RightContainer";
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const pageSelected = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    console.log(`Current Index ${currentIndex}`);
  }, [currentIndex]);

  return (
    <Root>
      <Header>
        <Heading />
        <Search />
      </Header>
      <ContentBody>
        <LeftContainer>
          <Filter></Filter>
        </LeftContainer>
        <RightContainer>
          <Jobs></Jobs>
        </RightContainer>
      </ContentBody>
      <Paginator
        range={100}
        currentIndex={currentIndex}
        onPageSelect={pageSelected}
      />
    </Root>
  );
};

export default Home;
