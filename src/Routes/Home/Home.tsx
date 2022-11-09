import { useContext, useState } from "react";
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

import { LocationContext } from "Contexts/Location/Location.context";
import Error from "Components/common/Error/Error";
const Home = () => {
  const {
    userLocation: { loading: isLoadingLocation, status: isSuccess, message },
  } = useContext(LocationContext);

  const [currentIndex, setCurrentIndex] = useState(1);

  const pageSelected = (index: number) => setCurrentIndex(index);

  const ErrorPanel = () =>
    !isSuccess && !isLoadingLocation ? <Error msg={message} /> : null;

  return (
    <Root>
      <Header>
        <ErrorPanel />
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
