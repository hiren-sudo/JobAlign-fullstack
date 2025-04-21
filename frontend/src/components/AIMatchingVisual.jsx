// components/AIMatchingVisual.jsx
import React from 'react';

const AIMatchingVisual = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI-Powered Job Matching</h3>
            <p className="mb-6">Our sophisticated algorithms analyze your resume and compare it against thousands of job postings to find your perfect match.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Skill Recognition</h4>
                  <p className="text-sm opacity-80">Identifies your skills and matches them to job requirements</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Experience Analysis</h4>
                  <p className="text-sm opacity-80">Evaluates your work history for relevance and fit</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Match Scoring</h4>
                  <p className="text-sm opacity-80">Provides percentage-based compatibility scores</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <svg className="w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="rgba(255, 255, 255, 0.1)" />
              <g className="animate-spin-slow">
                <circle cx="100" cy="30" r="10" fill="rgba(255, 255, 255, 0.8)" />
                <circle cx="170" cy="100" r="10" fill="rgba(255, 255, 255, 0.6)" />
                <circle cx="100" cy="170" r="10" fill="rgba(255, 255, 255, 0.8)" />
                <circle cx="30" cy="100" r="10" fill="rgba(255, 255, 255, 0.6)" />
              </g>
              <circle cx="100" cy="100" r="40" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
              <path d="M90,80 L110,80 L110,120 L90,120 Z" fill="rgba(255, 255, 255, 0.6)" />
              <path d="M80,90 L120,90 L120,110 L80,110 Z" fill="rgba(255, 255, 255, 0.6)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default AIMatchingVisual;