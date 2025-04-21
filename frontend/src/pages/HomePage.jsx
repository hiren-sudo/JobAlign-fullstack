// pages/HomePage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FeatureCard from '../components/FeatureCard';
import ProcessSteps from '../components/ProcessSteps';
import TestimonialCard from '../components/TestimonialCard';
import AIMatchingVisual from '../components/AIMatchingVisual';

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: 'AI-Powered Skill Matching',
      description: 'Our advanced algorithms analyze your skills and experience to match you with the most relevant job opportunities.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Resume Parsing',
      description: 'Upload your resume and our AI will automatically extract your skills, education, and work experience.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Match Percentage',
      description: 'Each job recommendation comes with a match percentage so you can focus on the opportunities that fit you best.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Software Developer',
      company: 'TechCorp',
      image: '/api/placeholder/60/60',
      text: 'JobAlign helped me find a job that perfectly matched my skills within just two weeks. The AI matching technology is incredibly accurate!'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Manager',
      company: 'MediaFuse',
      image: '/api/placeholder/60/60',
      text: 'As someone who was looking to transition to a new industry, JobAlign made it easy to identify transferable skills and find matching opportunities.'
    },
    {
      name: 'Jessica Williams',
      position: 'Data Analyst',
      company: 'DataInsights',
      image: '/api/placeholder/60/60',
      text: 'The resume parsing feature saved me hours of manually filling out profiles. JobAlign extracted my skills accurately and matched me with relevant positions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {user ? 'Welcome!' : 'Find Your Perfect Job Match with AI-Powered Precision'}
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                {user 
                  ? 'Continue your job search journey with personalized recommendations and insights.'
                  : 'JobAlign uses advanced AI to analyze your resume and match you with the most relevant job opportunities, saving you time and improving your chances of landing the perfect role.'
                }
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {user ? (
                  <Link to="/upload" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 text-center">
                    Upload Resume
                  </Link>
                ) : (
                  <>
                    <Link to="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 text-center">
                      Get Started
                    </Link>
                    <Link to="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300 text-center">
                      Learn More
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white border-opacity-20">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-sm">Resume Analyzer</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-indigo-800 bg-opacity-40 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-indigo-200 font-medium">Skills Detected</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-indigo-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-indigo-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-indigo-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">Node.js</span>
                        <span className="bg-indigo-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">UI/UX</span>
                        <span className="bg-indigo-700 bg-opacity-60 text-white text-xs px-2 py-1 rounded">API Design</span>
                      </div>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-40 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <span className="text-indigo-200 font-medium">Experience Level</span>
                      </div>
                      <div className="bg-indigo-900 bg-opacity-50 rounded-full h-2 mb-2">
                        <div className="bg-indigo-400 h-2 rounded-full w-4/5"></div>
                      </div>
                      <div className="text-right text-indigo-200 text-sm">4+ Years</div>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-40 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-indigo-200 font-medium">Analysis Progress</span>
                        <span className="text-indigo-200">92%</span>
                      </div>
                      <div className="bg-indigo-900 bg-opacity-50 rounded-full h-2">
  <div className="bg-green-400 h-2 rounded-full w-11/12"></div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How JobAlign Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform analyzes your skills and experience to connect you with jobs that truly match your profile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and find your perfect job match.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* AI Matching Visual */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Job Matching Technology</h2>
              <p className="text-xl mb-8">
                Our proprietary AI algorithm analyzes thousands of data points to find the jobs that best match your skills, experience, and career goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Skill gap analysis to help you improve your profile</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized job recommendations updated daily</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Industry-specific insights on hiring trends</span>
                </li>
              </ul>
              <Link to="/how-it-works" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition duration-300 inline-block">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <AIMatchingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              JobAlign has helped thousands of job seekers find their perfect career match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Only show for non-authenticated users */}
      {!user && (
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Job Match?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Upload your resume today and let our AI matching technology connect you with the most relevant job opportunities.
            </p>
            <Link to="/signup" className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition duration-300 inline-block">
              Get Started For Free
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;