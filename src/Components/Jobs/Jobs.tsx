import React, { useState } from "react";
import Job, { IJob } from "../Job/Job";
import { Container } from "./Jobs.styles";

const Jobs = () => {
  const [jobs] = useState<IJob[]>([
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
  ]);
  return (
    <Container>
      {jobs.slice(0, 5).map((job, index) => (
        <Job {...job} key={index} />
      ))}
    </Container>
  );
};

export default Jobs;
