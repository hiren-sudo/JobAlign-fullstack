// components/ResumeUploadForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeUploadForm = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      validateAndSetFile(uploadedFile);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();
    if (fileType === 'pdf' || fileType === 'docx' || fileType === 'doc') {
      setFile(file);
    } else {
      alert('Please upload PDF, DOC, or DOCX files only.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a resume file.');
      return;
    }

    setIsLoading(true);
    
    // Simulate processing with a timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/results'); // Navigate to results page after upload
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <div
          className={`border-2 border-dashed rounded-xl p-10 text-center mb-6 transition-colors
            ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            {file ? (
              <div className="flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="text-gray-600 mb-4">
            {file ? (
              <>
                <p className="font-semibold">{file.name}</p>
                <p className="text-sm">({(file.size / 1024 / 1024).toFixed(2)} MB)</p>
              </>
            ) : (
              <>
                <p className="font-semibold">Drag & drop your resume here</p>
                <p className="text-sm">Support for PDF, DOC, DOCX files only</p>
              </>
            )}
          </div>
          
          <div>
            <label className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-200 transition duration-300">
              {file ? 'Change File' : 'Browse File'}
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg
              hover:bg-indigo-700 transition duration-300 flex items-center
              ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading || !file}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Resume...
              </>
            ) : (
              <>Analyze with AI</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeUploadForm; 