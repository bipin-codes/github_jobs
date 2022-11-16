import React, { ChangeEvent, useContext } from "react";
import { Button, Container, IconSpan, Input, Root } from "./Search.styles";
import { JobContext } from "Contexts/Jobs/Jobs.context";
const Search = () => {
  const { searchQuery, setSearchQuery, setSearching } = useContext(JobContext);

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const onSearchClick = () => setSearching(true);

  return (
    <Root img={require("../../assets/images/backgroundImg.png")}>
      <Container>
        <IconSpan>Work</IconSpan>
        <Input
          placeholder="Title, companies, expertise or benefits"
          value={searchQuery}
          onChange={onInputChanged}
        />
        <Button onClick={onSearchClick}>Search</Button>
      </Container>
    </Root>
  );
};
export default Search;
