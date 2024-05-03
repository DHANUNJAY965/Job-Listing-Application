import Filter from './Filter';

const Navbar = ({ handleFilterChange }) => {
  // Array of job roles for the Job Role filter
  const jobRoles = ['Frontend', 'iOS', 'Android', 'Tech Lead', 'Backend'];

  return (
    <nav className=" bg-gray-200 py-4 sticky top-0 z-10 overflow-x-auto shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-evenly">
          <Filter
            title="Location"
            options={['Delhi NCR', 'Mumbai', 'Remote', 'Chennai', 'Bangalore']}
            handleChange={(e) => handleFilterChange('location', e.target.value)}
          />
          <Filter
            title="Experience"
            options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']}
            handleChange={(e) => handleFilterChange('experience', e.target.value)}
          />
          <Filter
            title="Job Role"
            options={jobRoles}
            handleChange={(e) => handleFilterChange('role', e.target.value)}
          />
          <Filter
            title="Min Salary"
            options={['5', '10', '20', '40', '60', '80', '100']}
            handleChange={(e) => handleFilterChange('salary', e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
