// components/JobCard.jsx
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg border-l-4 border-indigo-600">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <div className="bg-indigo-100 text-indigo-800 font-semibold px-3 py-1 rounded-full text-sm">
          {job.matchPercentage}% Match
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          <span>{job.jobType}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{job.salary}</span>
        </div>
      </div>
      {/* <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills && job.skills.map((skill, index) => (
        <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
        {skill}
        </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{job.postedDate}</span>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;