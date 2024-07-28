import React from 'react';

const Dropdown = ({ options, label }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="dropdown">{label}</label>
      <select id="dropdown" className='p-2 my-2'>
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown