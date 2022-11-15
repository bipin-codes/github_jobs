import IJob from "Components/Job/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

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

  totalJobs: number;
  setTotalJobs: (length: number) => void;

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

  totalJobs: 0,
  setTotalJobs: (value: number) => {},

  locations: DEFAULT_LOCATIONS,
});

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_JOBS_API_KEY}&results_per_page=10&what=javascript%20developer&content-type=application/json`;
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [fullTime, setFullTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);

  const values = {
    jobs,
    setJobs,

    searchQuery,
    setSearchQuery,

    locationQuery,
    setLocationQuery,

    fullTime,
    setFullTime,
    totalJobs,
    setTotalJobs,
    locations: DEFAULT_LOCATIONS,
  };

  const generateRequiredData = (data: any): { count: number; jobs: IJob[] } => {
    return {
      count: data.count,
      jobs: data.results.map((result: any) => ({
        company: { display_name: result.company.display_name },
        title: result.title,
        logo: "",
        contract_type: result.contract_type,
        location: { display_name: result.location.display_name },
        created: new Date(result.created),
        description: result.description,
      })),
    };
  };

  useEffect(() => {
    const getJobsData = async () => {
      const response = await fetch(url);

      const data = await response.json();
      const { count, jobs } = generateRequiredData(data);
      setTotalJobs(count);
      setJobs(jobs);
    };
    getJobsData();
  }, [url]);

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};
