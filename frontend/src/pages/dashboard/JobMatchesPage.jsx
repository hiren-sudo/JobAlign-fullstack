// pages/dashboard/JobMatchesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JobMatchesPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    experience: 'all',
    salary: 'all',
    jobType: 'all',
  });

  useEffect(() => {
    // Simulate API call to fetch job matches
    const fetchJobs = async () => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock job data
      const mockJobs = [
        {
          id: 1,
          title: 'Senior Frontend Developer',
          company: 'Tech Innovations Inc.',
          location: 'San Francisco, CA',
          salary: '$120,000 - $150,000',
          matchPercentage: 92,
          description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.',
          postedDate: '2 days ago',
          jobType: 'Full-time',
          experience: '5-7 years',
          skills: ['React', 'TypeScript', 'CSS', 'HTML', 'JavaScript'],
          applied: false
        },
        {
          id: 2,
          title: 'Frontend Engineer',
          company: 'Digital Solutions Ltd.',
          location: 'Remote',
          salary: '$90,000 - $110,000',
          matchPercentage: 88,
          description: 'Join our team as a Frontend Engineer to help build responsive web applications using modern JavaScript frameworks.',
          postedDate: '3 days ago',
          jobType: 'Full-time',
          experience: '3-5 years',
          skills: ['Vue.js', 'JavaScript', 'Sass', 'HTML', 'CSS'],
          applied: false
        },
        {
          id: 3,
          title: 'React Developer',
          company: 'Innovative Apps',
          location: 'New York, NY',
          salary: '$100,000 - $130,000',
          matchPercentage: 85,
          description: 'We need a skilled React Developer to join our fast-growing team to help build modern web applications.',
          postedDate: '1 week ago',
          jobType: 'Full-time',
          experience: '3-5 years',
          skills: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'],
          applied: false
        },
        {
          id: 4,
          title: 'UI Developer - Contract',
          company: 'Creative Solutions',
          location: 'Chicago, IL',
          salary: '$70 - $85 per hour',
          matchPercentage: 80,
          description: 'Contract position for a UI Developer to help our clients build beautiful, responsive interfaces.',
          postedDate: '5 days ago',
          jobType: 'Contract',
          experience: '2-4 years',
          skills: ['JavaScript', 'HTML', 'CSS', 'UI/UX', 'Responsive Design'],
          applied: true
        },
        {
          id: 5,
          title: 'Junior Frontend Developer',
          company: 'NextGen Software',
          location: 'Austin, TX',
          salary: '$70,000 - $90,000',
          matchPercentage: 78,
          description: 'Great opportunity for a Junior Frontend Developer to grow with our team and gain valuable experience.',
          postedDate: '2 weeks ago',
          jobType: 'Full-time',
          experience: '1-2 years',
          skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Git'],
          applied: false
        }
      ];
      
      setJobs(mockJobs);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: value
    });
  };

  const applyToJob = (jobId) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId ? { ...job, applied: true } : job
      )
    );
  };

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    return (
      (selectedFilters.location === 'all' || job.location.includes(selectedFilters.location)) &&
      (selectedFilters.experience === 'all' || job.experience.includes(selectedFilters.experience.split('-')[0])) &&
      (selectedFilters.salary === 'all' || 
        (selectedFilters.salary === 'under-80k' && parseInt(job.salary.replace(/[^0-9]/g, '')) < 80000) ||
        (selectedFilters.salary === '80k-100k' && parseInt(job.salary.replace(/[^0-9]/g, '')) >= 80000 && parseInt(job.salary.replace(/[^0-9]/g, '')) <= 100000) ||
        (selectedFilters.salary === 'over-100k' && parseInt(job.salary.replace(/[^0-9]/g, '')) > 100000)) &&
      (selectedFilters.jobType === 'all' || job.jobType === selectedFilters.jobType)
    );
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img 
                    className="h-8 w-auto" 
                    src="/logo.svg" 
                    alt="JobAlign" 
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/dashboard" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/dashboard/job-matches" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Job Matches
                </Link>
                <Link to="/dashboard/applications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Applications
                </Link>
                <Link to="/dashboard/profile" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Profile
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-800 font-medium">JD</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Your Job Matches</h1>
            <p className="mt-2 text-sm text-gray-600">
              Based on your resume, we've found jobs that match your skills and experience.
            </p>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              {/* Filters section */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Filter Jobs</h3>
                  <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedFilters.location}
                        onChange={handleFilterChange}
                      >
                        <option value="all">All Locations</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="New York">New York</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Austin">Austin</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedFilters.experience}
                        onChange={handleFilterChange}
                      >
                        <option value="all">All Experience Levels</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                        Salary Range
                      </label>
                      <select
                        id="salary"
                        name="salary"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedFilters.salary}
                        onChange={handleFilterChange}
                      >
                        <option value="all">All Ranges</option>
                        <option value="under-80k">Under $80,000</option>
                        <option value="80k-100k">$80,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
                        Job Type
                      </label>
                      <select
                        id="jobType"
                        name="jobType"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={selectedFilters.jobType}
                        onChange={handleFilterChange}
                      >
                        <option value="all">All Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Part-time">Part-time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job listings */}
              {isLoading ? (
                <div className="text-center py-10">
                  <svg className="animate-spin mx-auto h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Loading job matches...</p>
                </div>
              ) : (
                <div>
                  {filteredJobs.length === 0 ? (
                    <div className="text-center py-10 bg-white shadow overflow-hidden sm:rounded-lg">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No matching jobs found</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your filters to see more results.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredJobs.map((job) => (
                        <div key={job.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div className="px-4 py-5 sm:px-6">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">{job.company} • {job.location}</p>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                  {job.matchPercentage}% Match
                                </div>
                                <span className="text-sm text-gray-500 mt-1">{job.postedDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                              <div className="sm:col-span-2">
                                <p className="text-sm text-gray-700">
                                  {job.description}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">Salary</h4>
                                <p className="mt-1 text-sm text-gray-900">{job.salary}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">Job Type</h4>
                                <p className="mt-1 text-sm text-gray-900">{job.jobType}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                                <p className="mt-1 text-sm text-gray-900">{job.experience}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                                <div className="mt-1">
                                  {job.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2 mb-2"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                              <Link
                                to={`/dashboard/job/${job.id}`}
                                className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                View Details
                              </Link>
                              {job.applied ? (
                                <span className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600">
                                  Applied
                                </span>
                              ) : (
                                <button
                                  onClick={() => applyToJob(job.id)}
                                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Quick Apply
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobMatchesPage;