// components/ResumePreview.jsx
import React from 'react';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{resumeData.name}</h2>
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{resumeData.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{resumeData.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{resumeData.location}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-indigo-600">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-indigo-600">Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className={index !== resumeData.education.length - 1 ? "mb-4" : ""}>
            <div className="flex justify-between">
              <h4 className="font-medium">{edu.degree}</h4>
              <span className="text-gray-600 text-sm">{edu.years}</span>
            </div>
            <p className="text-gray-600">{edu.institution}</p>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-indigo-600">Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className={index !== resumeData.experience.length - 1 ? "mb-4 pb-4 border-b" : ""}>
            <div className="flex justify-between">
              <h4 className="font-medium">{exp.position}</h4>
              <span className="text-gray-600 text-sm">{exp.years}</span>
            </div>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;