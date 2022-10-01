import Filter from "../Components/Filters/Filter";
import Jobs from "../Components/Jobs/Jobs";
import Search from "../Components/Search/Search";
import { HomeBody, HomeContainer, HomeHeader, StyledSpan } from "./Home.styles";

const Home = () => {
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
    </HomeContainer>
  );
};

export default Home;
