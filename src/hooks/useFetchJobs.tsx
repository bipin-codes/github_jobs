import IJob from "Components/Job/types";
import { useState, useEffect } from "react";
const useFetchJobs = (pageSize?: number, country?: string) => {
  const toCall = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_JOBS_API_KEY}&results_per_page=5&what=javascript%20developer&content-type=application/json`;

  const [data] = useState(Array<IJob>);
  const [loading, setLoading] = useState(false);
  const [error] = useState("");
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const result = await (await fetch(toCall, { mode: "no-cors" })).json();
        console.log(result);
      } catch (err) {
        // setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [toCall]);

  return [data, loading, error];
};

export default useFetchJobs;
