import IJob from "Components/Job/types";
import { LocationContext } from "Contexts/Location/Location.context";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import IJobContext from "./type";

import { DEFAULT_LOCATIONS } from "./type";

export const JobContext = createContext<IJobContext>({
  jobs: new Array<IJob>(),
  setJobs: (_: Array<IJob>) => {},

  fullTime: false,
  setFullTime: (_: boolean) => {},

  searchQuery: "",
  setSearchQuery: (_: string) => {},

  locationQuery: "",
  setLocationQuery: (_: string) => {},

  totalJobs: 0,
  setTotalJobs: (_: number) => {},

  searching: true,
  setSearching: (_: boolean) => {},

  currentPage: 1,
  setCurrentPage: (_: number) => {},

  locations: DEFAULT_LOCATIONS,
  loadingJobs: true,
});

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { userLocation } = useContext(LocationContext);
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [fullTime, setFullTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingJobs, setLoadingJobs] = useState(userLocation.loading);

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
        redirect_url: result.redirect_url,
      })),
    };
  };

  useEffect(() => {
    if (!userLocation.loading) {
      //if user's location is already resolved.
      setLocationQuery(userLocation.location);
      setShouldSearch(true); //Every time index changes call the API again.
    }
  }, [userLocation, currentPage]);

  useEffect(() => {
    const getJobsData = async () => {
      let url = `https://api.adzuna.com/v1/api/jobs/gb/search/${currentPage}?app_id=${
        process.env.REACT_APP_ID
      }&app_key=${process.env.REACT_APP_JOBS_API_KEY}&full_time=${
        fullTime ? 1 : ""
      }&results_per_page=8&what=${
        searchQuery ? searchQuery : "software developer"
      }&where=${locationQuery}&content-type=application/json}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
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

    if (shouldSearch) {
      setLoadingJobs(true);
      getJobsData();
    }
  }, [currentPage, shouldSearch, locationQuery, fullTime, searchQuery]);

  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};
