import React, { ChangeEvent, useState } from "react";
import {
  Container,
  FullTimeInput,
  IconSpan,
  Input,
  InputLabel,
  LocationContainer,
  StyledHeading,
  ToggleContainer,
  ToggleInput,
} from "./Filter.styles";
const Filter = () => {
  const locations = ["London", "Amsterdam", "Berlin", "New York"];

  const [location, setLocation] = useState("");

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <FullTimeInput id="full_time" />
        <InputLabel target="full_time">Full Time</InputLabel>
      </div>
      <div>
        <StyledHeading>Location</StyledHeading>
        <LocationContainer placeholder="City,state,zip code or country">
          <IconSpan>public</IconSpan>
          <Input
            placeholder="City, state, zip code or country"
            value={location}
            onChange={onInputChanged}
          />
        </LocationContainer>
      </div>
      {locations.map((location, index) => (
        <ToggleContainer key={index}>
          <ToggleInput value={location} id={index.toString()}></ToggleInput>
          <InputLabel target={index.toString()}>{location}</InputLabel>
        </ToggleContainer>
      ))}
    </Container>
  );
};
export default Filter;
