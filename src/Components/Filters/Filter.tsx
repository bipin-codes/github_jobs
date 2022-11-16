import { JobContext } from "Contexts/Jobs/Jobs.context";
import React, { ChangeEvent, useContext } from "react";
import {
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
  const { locations, fullTime, setFullTime, locationQuery, setLocationQuery } =
    useContext(JobContext);

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  const onCheckboxChanged = (_: ChangeEvent<HTMLInputElement>) => {
    setFullTime(!fullTime);
  };

  const onToggleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  return (
    <>
      <FullTimeContainer>
        <FullTimeInput
          id="full_time"
          checked={fullTime}
          onChange={onCheckboxChanged}
        />
        <InputLabel target="full_time">Full Time</InputLabel>
      </FullTimeContainer>
      <LocationContainer>
        <StyledHeading>Location</StyledHeading>
        <LocationFilter placeholder="City,state,zip code or country">
          <IconSpan>public</IconSpan>
          <Input
            placeholder="City, state, zip code or country"
            value={locationQuery}
            onChange={onInputChanged}
          />
        </LocationFilter>
      </LocationContainer>
      {locations.map((location, index) => (
        <ToggleContainer key={index}>
          <ToggleInput
            onChange={onToggleLocation}
            value={location}
            id={index.toString()}
            checked={location === locationQuery}
          ></ToggleInput>
          <InputLabel target={index.toString()}>{location}</InputLabel>
        </ToggleContainer>
      ))}
    </>
  );
};
export default Filter;
