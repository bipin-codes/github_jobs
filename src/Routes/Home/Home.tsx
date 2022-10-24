import { useEffect, useState } from "react";
import Filter from "Components/Filters/Filter";

import Jobs from "Components/Jobs/Jobs";
import Paginator from "Components/Paginator/Paginator";
import Search from "Components/Search/Search";
import { HomeBody } from "./Home.styles";
import { Heading } from "Components/common/Heading/Heading";
import Root from "Components/common/Root/Root";
import Header from "Components/common/Header/Header";
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
      <HomeBody>
        <Filter></Filter>
        <Jobs></Jobs>
      </HomeBody>
      <Paginator
        range={100}
        currentIndex={currentIndex}
        onPageSelect={pageSelected}
      />
    </Root>
  );
};

export default Home;
