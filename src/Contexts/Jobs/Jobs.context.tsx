import IJob from "Components/Job/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import IJobContext from "./type";

import { DEFAULT_LOCATIONS } from "./type";

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

  searching: true,
  setSearching: (status: boolean) => {},

  currentPage: 1,
  setCurrentPage: (number: number) => {},

  locations: DEFAULT_LOCATIONS,
  loadingJobs: true,
});

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [fullTime, setFullTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);
  const [shouldSearch, setShouldSearch] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingJobs, setLoadingJobs] = useState(true);

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

    searching: shouldSearch,
    setSearching: setShouldSearch,

    currentPage,
    setCurrentPage,

    locations: DEFAULT_LOCATIONS,
    loadingJobs,
  };

  const generateRequiredData = (data: any): { count: number; jobs: IJob[] } => {
    return {
      count: data.count,
      jobs: data.results.map((result: any) => ({
        company: { display_name: result.company.display_name },
        title: result.title,
        logo: "",
        contract_type: result.contract_time ?? result.contract_type,
        location: { display_name: result.location.display_name },
        created: new Date(result.created),
        description: result.description,
      })),
    };
  };

  useEffect(() => {
    const getJobsData = async () => {
      let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
        process.env.REACT_APP_ID
      }&app_key=${process.env.REACT_APP_JOBS_API_KEY}&full_time=${
        fullTime ? 1 : ""
      }&results_per_page=10&what=${
        searchQuery ? searchQuery : "software developer"
      }&content-type=application/json}`;

      try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const { count, jobs } = generateRequiredData(data);

        setShouldSearch(false);
        setTotalJobs(count);
        setJobs(jobs);
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingJobs(false);
      }
    };

    if (shouldSearch) getJobsData();
  }, [shouldSearch, locationQuery, fullTime, searchQuery]);

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};
