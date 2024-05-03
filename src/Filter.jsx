import React from 'react';

const Filter = ({ title, options, handleChange }) => {
  return (
    <div className="flex items-center">
      {/* Dropdown select element */}
      <select
        onChange={handleChange}
        className="appearance-none border border-gray-300 rounded-lg px-3 py-2 mr-2 leading-tight focus:outline-none focus:border-blue-500"
      >
        <option value="">Select {title}</option>
        {/* Mapping through options and rendering each as an option */}
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="text-gray-800 hover:bg-blue-100"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
