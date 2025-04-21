// ResultsPage.jsx
import React, { useState } from 'react';
import ResumePreview from '../components/ResumePreview';
import JobCard from '../components/JobCard';
import AIMatchingVisual from '../components/AIMatchingVisual';

const ResultsPage = () => {
  // Mock data - in a real app, this would come from API or context
  const [resumeData, setResumeData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    skills: ["React", "JavaScript", "Node.js", "UI/UX Design", "TypeScript", "RESTful APIs"],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        year: "2018-2022"
      }
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "2022-Present",
        description: "Developed responsive web applications using React and TypeScript."
      },
      {
        title: "Web Development Intern",
        company: "Digital Innovations",
        duration: "2021-2022",
        description: "Assisted in building and maintaining client websites."
      }
    ]
  });

  const [jobMatches, setJobMatches] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Innovative Tech",
      location: "San Francisco, CA (Remote)",
      matchPercentage: 92,
      description: "Looking for a skilled developer with React and TypeScript experience to join our growing team.",
      salary: "$120,000 - $150,000"
    },
    {
      id: 2,
      title: "UI/UX Developer",
      company: "Design Solutions",
      location: "New York, NY",
      matchPercentage: 87,
      description: "Join our team to create beautiful user interfaces with modern JavaScript frameworks.",
      salary: "$110,000 - $130,000"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "WebSphere Inc.",
      location: "Austin, TX (Hybrid)",
      matchPercentage: 78,
      description: "Looking for developers with experience in both frontend and backend technologies.",
      salary: "$100,000 - $125,000"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Resume Analysis Results</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Your Resume</h2>
        <ResumePreview resumeData={resumeData} />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">How We Match You</h2>
        <AIMatchingVisual />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">Job Matches</h2>
          <div className="text-sm text-gray-600">Based on your skills and experience</div>
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