import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RequestFilter = ({ onFilterChange ,count}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [degree, setDegree] = useState('');
  const [residenceCardType, setResidenceCardType] = useState('');
  const [requestFor, setRequestFor] = useState('');
  const [rating, setRating] = useState('');
  

  const degreeOptions = ['Bachelor', 'Master', 'PhD'];
  const residenceCardOptions = ['APS', 'Salaries', 'Passport talent', 'Resident Card', 'Student Visa from India'];
  const requestForOptions = [
    'Administrative Support',
    'Scholarship',
    'Accommodation and Domicile',
    'Loan and Financing',
    'Daily life',
    'French Language',
    'Career Guidance and Job Search',
    'Entrepreneurship and Company Creation'
  ];
  const ratingOptions = [
    { value: '', label: 'All Ratings' },
    { value: '1', label: '1-Extremely dissatisfied' },
    { value: '2', label: '2-Dissatisfied' },
    { value: '3', label: '3-Somehow satisfied' },
    { value: '4', label: '4-Very happy' },
    { value: '5', label: '5-Happy' }
  ];

  useEffect(() => {
    handleFilterChange();
  }, [startDate, endDate, degree, residenceCardType, requestFor,rating]);

  const handleFilterChange = () => {
    onFilterChange({
      startDate,
      endDate,
      degree,
      residenceCardType,
      requestFor,
      rating
    });
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow">
     <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4">Filter Requests</h2>
      <div className="mb-2 inline-flex items-center bg-blue-100 text-black px-4  rounded-full shadow-md transition-all hover:bg-blue-200 ">
      <span className="font-semibold text-sm">Total: {count}</span>
    </div>

      </div>
      <div className="flex flex-wrap items-center gap-2">
      <select
          value={requestFor}
          onChange={(e) => setRequestFor(e.target.value)}
          className="border rounded p-2 w-48"
        >
          <option value="">Request Type</option>
          {requestForOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="border rounded p-2 w-36"
        >
          <option value="">Degree</option>
          {degreeOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select
          value={residenceCardType}
          onChange={(e) => setResidenceCardType(e.target.value)}
          className="border rounded p-2 w-48"
        >
          <option value="">Residence Card Type</option>
          {residenceCardOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border rounded p-2 w-48"
        >
          {ratingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="border rounded p-2 w-36"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          className="border rounded p-2 w-36"
        />
      </div>
    </div>
  );
};

export default RequestFilter;