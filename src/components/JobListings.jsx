import { useEffect, useState } from "react";

import React from "react";
// import data from "../jobs.json";
import Joblisting from "./Joblisting";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false }) => {
  // const jobs = data.jobs; // Access the jobs array from the imported data
  // const JobList= isHome ? jobs.slice(0,3) : jobs;

  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchjobs = async () => {
      const apiurl = isHome ? '/api/jobs?_limit=3' : "/api/jobs"
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setjobs(data);
      } catch (error) {
        console.log("got an error while fetching.");
      }finally
      {
        setloading(false);
      }

    };
    fetchjobs();
  }, []);
  if (!Array.isArray(jobs)) {
    return <div>No jobs available</div>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
          {loading?(
            <Spinner loading={loading}/>
          ):(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
             {jobs.map((job) => (
            <Joblisting key={job.id} job={job} />
          ))}
        </div>
          
          )}
         
      </div>
    </section>
  );
};

export default JobListings;
