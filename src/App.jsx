import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'


import React from "react";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import Addjob from './pages/Addjob';
import EditjobPage from './pages/EditjobPage';

const App = () => {
//add new job  
const addjob = async(newjob)=> {
const res= await  fetch('/api/jobs',{
method: 'POST',
headers:{
  'Content-Type':application/json
},
body: JSON.stringify(newjob),
    }
  );
  return;
};

//deletejob
const deletejob= async (id)=>
{
  const res= await  fetch(`/api/jobs/${id}`,{
    method: 'DELETE',
  });
      return;
}

const updateJob= async(job)=>
{
  const res= await  fetch(`/api/jobs/${id}`,{
    method: 'PUT',
  
  headers:{
    'Content-Type':application/json
  },
  body: JSON.stringify(job),
      }
    );
      return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobsPage/>}/>
  <Route path='*' element={<NotFoundPage/>}/>
  <Route path='/jobs/:id' element={<JobPage deletejob={
    deletejob}/>} loader={jobLoader}/>
     <Route path='/edit-job/:id' element={<EditjobPage updateJobSumbit={updateJob}/>} loader={jobLoader}/>
  <Route path='/add-job' element={<Addjob addJobSumbit={addjob}/>}/>

</Route>
)
);

  return (

   <RouterProvider router={router}/>

  );
};

export default App;
