import IJob from "Components/Job/types";
import { createContext, useState, PropsWithChildren } from "react";

const defaultJobs: Array<IJob> = [
  {
    title: "Front-End Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
  {
    title: "Back-End Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
  {
    title: "FullStack Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
  {
    title: "Blockchain Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
  {
    title: "Laravel Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
  {
    title: "MEAN Software Engineer",
    company: "Kasisto",
    tag: "Full Time",
    location: "New York",
    posted: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 100 + 1)
      )
    ),
    logo: "im.png",
  },
];

const initialState = {
  jobs: defaultJobs,
  fullTime: false,
  query: "",
  location: "",
};

export const JobContext = createContext(initialState);

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jobs] = useState(defaultJobs);
  return (
    <JobContext.Provider value={initialState}>{children}</JobContext.Provider>
  );
};
