import React, { ChangeEvent, useState } from "react";
import {
  Container,
  FullTimeContainer,
  FullTimeInput,
  IconSpan,
  Input,
  InputLabel,
  LocationContainer,
  LocationFilter,
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
      <FullTimeContainer>
        <FullTimeInput id="full_time" />
        <InputLabel target="full_time">Full Time</InputLabel>
      </FullTimeContainer>
      <LocationContainer>
        <StyledHeading>Location</StyledHeading>
        <LocationFilter placeholder="City,state,zip code or country">
          <IconSpan>public</IconSpan>
          <Input
            placeholder="City, state, zip code or country"
            value={location}
            onChange={onInputChanged}
          />
        </LocationFilter>
      </LocationContainer>
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
