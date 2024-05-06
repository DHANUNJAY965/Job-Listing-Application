// App.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsSuccess, setFilters } from './Redux/actions';
import Navbar from './Navbar';
import JobCard from './JobCard';
import InfiniteScroll from './InfiniteScroll';

const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    // Fetching initial job data
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    // Fetch job data from API and update state
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ limit: 10, offset: jobs.length })
    })
    .then(response => response.json())
    .then(data => {
      dispatch(fetchJobsSuccess(data.jdList));
    })
    .catch(error => console.error(error));
  };

  const handleFilterChange = (filterName, value) => {
    // Update filter state
    dispatch(setFilters({ [filterName]: value }));
  };

  const filteredJobs = jobs.filter(job => {
    // Apply filters
    return (
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.experience === '' || (job.minExp == parseInt(filters.experience) )) &&
      (filters.salary === '' || (job.minJdSalary >= parseInt(filters.salary) )) &&
      (filters.role === '' || job.jobRole.toLowerCase().includes(filters.role.toLowerCase()))
    );
  });

  return (
    <div>
      <Navbar handleFilterChange={handleFilterChange} />
      <div  className={`container mt-4 px-6 ${filteredJobs.length === 0 ? 'container mt-4 px-6 bg-gray-300' : ''}`}>
        {filteredJobs.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <p className=" text-center text-2xl font-bold text-red-500">No jobs found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {filteredJobs.map((job, index) => (
              <div key={index} className="col-span-1">
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
      <InfiniteScroll loadMore={fetchJobs} />
    </div>
  );
};

export default App;
