import IJob from "Components/Job/types";
type IJobContext = {
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

  searching: boolean;
  setSearching: (status: boolean) => void;

  currentPage: number;
  setCurrentPage: (no: number) => void;

  locations: Array<string>;
  loadingJobs: boolean;
};
export default IJobContext;

export const DEFAULT_LOCATIONS = ["London", "Amsterdam", "Berlin", "New York"];
