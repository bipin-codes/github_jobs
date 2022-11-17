import { JobContext } from "Contexts/Jobs/Jobs.context";
import React, { useContext } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const { jobs } = useContext(JobContext);

  return (
    <>
      {jobs.length > 0 ? (
        jobs.slice(0, 10).map((job, index) => <Job job={job} key={index} />)
      ) : (
        <h1 style={{ textAlign: "center" }}>No Jobs Found!</h1>
      )}
    </>
  );
};

export default Jobs;
