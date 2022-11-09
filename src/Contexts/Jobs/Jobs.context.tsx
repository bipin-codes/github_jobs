import IJob from "Components/Job/types";
import { createContext, PropsWithChildren, useState } from "react";

const DEFAULT_LOCATIONS = ["London", "Amsterdam", "Berlin", "New York"];

export type IJobContext = {
  jobs: Array<IJob>;
  setJobs: (jobs: Array<IJob>) => void;

  fullTime: boolean;
  setFullTime: (checked: boolean) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  locationQuery: string;
  setLocationQuery: (query: string) => void;

  locations: Array<string>;
};

export const JobContext = createContext<IJobContext>({
  jobs: new Array<IJob>(),
  setJobs: (jobs: Array<IJob>) => {},

  fullTime: false,
  setFullTime: (checked: boolean) => {},

  searchQuery: "",
  setSearchQuery: (query: string) => {},

  locationQuery: "",
  setLocationQuery: (query: string) => {},

  locations: DEFAULT_LOCATIONS,
});

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [fullTime, setFullTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const values = {
    jobs,
    setJobs,

    searchQuery,
    setSearchQuery,

    locationQuery,
    setLocationQuery,

    fullTime,
    setFullTime,

    locations: DEFAULT_LOCATIONS,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};
