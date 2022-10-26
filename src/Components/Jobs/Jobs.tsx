import { JobsContext } from "Contexts/Jobs/Jobs.context";
import React, { useContext } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      {jobs.slice(0, 5).map((job, index) => (
        <Job {...job} key={index} />
      ))}
    </>
  );
};

export default Jobs;
