// ResultsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResumePreview from '../components/ResumePreview';
import JobCard from '../components/JobCard';
import AIMatchingVisual from '../components/AIMatchingVisual';

const ResultsPage = () => {
  const location = useLocation();
  const parsedData = location.state?.parsedData;

  const [resumeData, setResumeData] = useState({
    // name: '',
    email: '',
    phone: '',
    skills: [],
    education: [],
    experience: []
  });

  const [jobMatches, setJobMatches] = useState([]);

  useEffect(() => {
    if (parsedData) {
      setResumeData({
        // name: parsedData.name,
        email: parsedData.email,
        phone: parsedData.phone,
        skills: parsedData.skills.split(',').map(skill => skill.trim()),
        education: parsedData.education.split(',').map(degree => ({
          degree: degree.trim(),
          institution: "Not specified",
          year: "Not specified"
        })),
        experience: [] // Experience not extracted in current parser
      });

      // Mock job matches based on skills (in a real app, this would come from an API)
      const mockJobMatches = [
        {
          id: 1,
          title: "Software Developer",
          company: "Tech Solutions Inc.",
          location: "Remote",
          matchPercentage: 85,
          description: "Looking for developers with experience in various technologies.",
          salary: "$90,000 - $120,000"
        },
        {
          id: 2,
          title: "Full Stack Engineer",
          company: "Innovative Tech",
          location: "San Francisco, CA",
          matchPercentage: 78,
          description: "Join our team to work on cutting-edge technologies.",
          salary: "$100,000 - $140,000"
        }
      ];
      setJobMatches(mockJobMatches);
    }
  }, [parsedData]);

  if (!parsedData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">No Resume Data Found</h1>
          <p className="text-gray-600">Please upload a resume first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Resume Analysis Results</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Your Resume</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* <div>
              <h3 className="text-lg font-medium text-gray-700">Name</h3>
              <p className="text-gray-600">{resumeData.name}</p>
            </div> */}
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">{resumeData.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Phone</h3>
              <p className="text-gray-600">{resumeData.phone}</p>
            </div>
          </div>
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">How We Match You</h2>
        <AIMatchingVisual />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">Job Matches</h2>
          <div className="text-sm text-gray-600">Based on your skills and education</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobMatches.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 