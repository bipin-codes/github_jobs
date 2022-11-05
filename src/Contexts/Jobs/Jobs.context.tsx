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

export const JobsContext = createContext({ jobs: defaultJobs });

export const JobsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jobs] = useState(defaultJobs);
  return (
    <JobsContext.Provider value={{ jobs: jobs }}>
      {children}
    </JobsContext.Provider>
  );
};
