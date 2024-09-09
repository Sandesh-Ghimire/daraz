import React from 'react'
import data from "../jobs.json"
import Joblisting from './Joblisting';



const JobListings = () => {
    const jobs = data.jobs; // Access the jobs array from the imported data
// const recentJobs= jobs.slice(0,3);
    if (!Array.isArray(jobs)) {
      return <div>No jobs available</div>;
    }


  return (

   <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (

<Joblisting key={job.id} job={job} /> 

            )
            )}
        </div>
      </div>
    </section>

  )
}

export default JobListings