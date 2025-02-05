import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserFilter = ({ onFilterChange }) => {
  const [country, setCountry] = useState('All');
  const [degree, setDegree] = useState('All');
  const [membershipType, setMembershipType] = useState('All');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const countries = ['All', 'India', 'France'];
  const membershipTypes = ['All', 'Student Member', 'Executive Team Member'];
  const degrees = ['All', 'Bachelor', 'Master', 'PhD'];

  useEffect(() => {
    handleFilterChange();
  }, [country, degree, membershipType, startDate, endDate]);

  const handleFilterChange = () => {
    onFilterChange({
      country: country === 'All' ? '' : country,
      degree: degree === 'All' ? '' : degree,
      membershipType: membershipType === 'All' ? '' : membershipType,
      startDate,
      endDate,
    });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Filter Users</h2>
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded p-2 flex-1 min-w-[150px]"
        >
          <option value="All">All Countries</option>
          {countries.filter(c => c !== 'All').map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="border rounded p-2 flex-1 min-w-[150px]"
        >
          <option value="All">Any Degree</option>
          {degrees.filter(d => d !== 'All').map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={membershipType}
          onChange={(e) => setMembershipType(e.target.value)}
          className="border rounded p-2 flex-1 min-w-[150px]"
        >
          <option value="All">All Membership Types</option>
          {membershipTypes.filter(m => m !== 'All').map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="border rounded p-2 flex-1 min-w-[150px]"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          className="border rounded p-2 flex-1 min-w-[150px]"
        />
      </div>
    </div>
  );
};

export default UserFilter;