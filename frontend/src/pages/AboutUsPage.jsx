// pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JobAlign</h1>
            <p className="text-xl text-indigo-100">
              We're on a mission to help job seekers find their perfect career match through the power of AI.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                JobAlign was founded in 2023 by a team of tech professionals who experienced firsthand the challenges of finding the right job match in a sea of opportunities. We realized that traditional job boards were inefficient, forcing job seekers to wade through hundreds of listings that often didn't match their skills or experience.
              </p>
              <p>
                Our founders, who had backgrounds in artificial intelligence and recruiting, saw an opportunity to create a better way. By leveraging the power of AI, we could analyze both job seekers' skills and job requirements to create meaningful connections that benefit both parties.
              </p>
              <p>
                What started as a small experiment has grown into a platform that helps thousands of job seekers find their perfect career match every month. We're proud of the success stories we've helped create and are continuously improving our algorithms to make even better matches.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Mission</h2>
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-600">
              <p className="text-xl text-gray-700 italic">
                "To create a job market where skills and potential are perfectly matched with opportunity, eliminating the noise and frustration from the job search process."
              </p>
            </div>
            <div className="mt-12 prose prose-lg max-w-none text-gray-600">
              <p>
                At JobAlign, we believe that finding the right job shouldn't be a matter of luck or connections. It should be a data-driven process that respects the unique skills and potential of each individual.
              </p>
              <p>
                Our mission extends beyond just matching skills to job descriptions. We aim to understand the human behind the resume – their career aspirations, work style preferences, and growth potential. This holistic approach allows us to make matches that lead to fulfilling, long-term career relationships.
              </p>
              <p>
                We're also committed to creating a level playing field where bias is minimized. Our AI algorithms are designed to focus on skills and potential rather than factors that could lead to discrimination in the hiring process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Morgan',
                  position: 'CEO & Co-Founder',
                  image: '/api/placeholder/120/120',
                  bio: 'Former tech recruiter with 10+ years of experience in the industry.'
                },
                {
                  name: 'Jamie Lee',
                  position: 'CTO & Co-Founder',
                  image: '/api/placeholder/120/120',
                  bio: 'AI researcher with a PhD in machine learning from Stanford University.'
                },
                {
                  name: 'Taylor Wilson',
                  position: 'Head of Product',
                  image: '/api/placeholder/120/120',
                  bio: 'Product leader who previously built career platforms at major tech companies.'
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Be part of the revolution in job searching. Upload your resume today and let our AI matching technology find your perfect career match.
          </p>
          <Link to="/signup" className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition duration-300 inline-block">
            Get Started For Free
          </Link>
          <p className="mt-6 text-indigo-200">No credit card required. Free for job seekers.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;