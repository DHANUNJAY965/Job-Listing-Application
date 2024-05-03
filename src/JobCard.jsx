import React, { useState } from 'react';

const JobCard = ({ job }) => {
  // State to manage expansion of job details
  const [isExpanded, setIsExpanded] = useState(false);

   // Function to toggle expansion state
  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div style={{ borderRadius: '50px' }} className="job-card p-8 border border-gray-300 mb-4 shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
      <p className="text-xl font-bold capitalize">{job.jobRole}</p>
      <h2 className="text-lg capitalize ">Weekday</h2>
      <p className="text-gray-600 capitalize">Location : {job.location}</p>
      <p className="text-gray-600 mt-1">Estimated Salary: ${job.minJdSalary != null ? ` ${job.minJdSalary} - $ ${job.maxJdSalary}` : ` ${job.maxJdSalary}`}<span className="text-green-500 pl-1"> ✅</span></p>
      <p className="text-gray-600 mt-2 font-semibold">About Company:</p>
      <p className=' font-semibold'>About Us</p>
      
      {isExpanded ? (
        <p className="text-gray-600">{job.jobDetailsFromCompany}</p>
      ) : (
        <>
          <p className="text-gray-600">{job.jobDetailsFromCompany.substring(0, 100)}</p>
          <div className='flex justify-center'>
            <button onClick={toggleExpand} className="text-blue-500">Show More</button>
          </div>
        </>
      )}
       {/* Show "Show Less" button if expanded */}
      {isExpanded && (
        <div className="flex justify-center">
          <button onClick={toggleExpand} className="text-blue-500">Show Less</button>
        </div>
      )}
      <div className="mt-2">
        <h3 className=" text-slate-600">Minimum Experience  : </h3>
        <h2 className="text-gray-600 font-semibold">{job.minExp != null ? job.minExp : "0"} years</h2>
      </div>
      <div className='flex justify-center mt-2'>
        <a href={job.jdLink} className=" w-44 text-black bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:outline-none  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " style={{ backgroundColor: 'rgb(85, 239, 196)' }}>
          ⚡ Easy Apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;
