import { useEffect, useState } from "react";
import Filter from "../Components/Filters/Filter";
import Jobs from "../Components/Jobs/Jobs";
import Paginator from "../Components/Paginator/Paginator";
import Search from "../Components/Search/Search";
import { HomeBody, HomeContainer, HomeHeader, StyledSpan } from "./Home.styles";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const pageSelected = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    console.log(`Current Index ${currentIndex}`);
  }, [currentIndex]);

  return (
    <HomeContainer>
      <HomeHeader>
        <StyledSpan>Indeed </StyledSpan>Jobs
        <Search />
      </HomeHeader>
      <HomeBody>
        <Filter></Filter>
        <Jobs></Jobs>
      </HomeBody>
      <Paginator
        range={100}
        currentIndex={currentIndex}
        onPageSelect={pageSelected}
      />
    </HomeContainer>
  );
};

export default Home;
