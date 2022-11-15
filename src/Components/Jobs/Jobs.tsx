import { JobContext } from "Contexts/Jobs/Jobs.context";
import React, { useContext } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const { jobs } = useContext(JobContext);

  return (
    <>
      {jobs.slice(0, 10).map((job, index) => (
        <Job {...job} key={index} />
      ))}
    </>
  );
};

export default Jobs;
