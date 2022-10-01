import React, { ChangeEvent, useState } from "react";
import { Button, Container, IconSpan, Input, Root } from "./Search.styles";

const Search = () => {
  const [term, setTerm] = useState("");

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <Root img={require("../../assets/images/backgroundImg.png")}>
      <Container>
        <IconSpan> Work</IconSpan>
        <Input
          placeholder="Title, companies, expertise or benefits"
          value={term}
          onChange={onInputChanged}
        />
        <Button>Search</Button>
      </Container>
    </Root>
  );
};
export default Search;
