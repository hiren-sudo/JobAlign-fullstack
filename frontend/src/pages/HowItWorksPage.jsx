// pages/HowItWorksPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How JobAlign Works</h1>
            <p className="text-xl text-indigo-100">
              Our AI-powered platform makes job matching simpler, faster, and more accurate than traditional methods.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">The JobAlign Process</h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                  <div className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-indigo-600">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resume Upload & Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Upload your resume in any common format (PDF, DOCX, DOC, RTF). Our proprietary AI analyzes your document using natural language processing to extract key information:
                  </p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-6">
                    <li>Technical and soft skills</li>
                    <li>Education and certifications</li>
                    <li>Work experience and accomplishments</li>
                    <li>Career progression and growth</li>
                    <li>Industry-specific knowledge</li>
                  </ul>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 md:order-2">
                  <div className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-indigo-600">2</span>
                  </div>
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile Creation & Customization</h3>
                  <p className="text-gray-600 mb-4">
                    After analysis, we create a comprehensive skill profile that you can review and customize:
                  </p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-6">
                    <li>Verify extracted skills and experience</li>
                    <li>Add skills that might not be evident from your resume</li>
                    <li>Set job preferences (location, salary, remote work options)</li>
                    <li>Indicate industries or roles you're most interested in</li>
                    <li>Opt in or out of specific matching criteria</li>
                  </ul>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                  <div className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-indigo-600">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Matching Algorithm</h3>
                  <p className="text-gray-600 mb-4">
                    Our advanced matching algorithm evaluates thousands of job listings against your profile:
                  </p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-6">
                    <li>Analyzes 50+ data points from your profile</li>
                    <li>Considers both exact and adjacent skill matches</li>
                    <li>Evaluates career trajectory and growth potential</li>
                    <li>Factors in your preferences and requirements</li>
                    <li>Uses machine learning to improve matches over time</li>
                  </ul>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 md:order-2">
                  <div className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-indigo-600">4</span>
                  </div>
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Job Recommendations</h3>
                  <p className="text-gray-600 mb-4">
                    Receive a curated list of job opportunities that best match your profile:
                  </p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-6">
                    <li>Each job includes a match percentage score</li>
                    <li>Detailed breakdown of matching criteria</li>
                    <li>Information on skill gaps and how to address them</li>
                    <li>Daily updates with new matching opportunities</li>
                    <li>Option to apply directly through our platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Behind */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">The Technology Behind JobAlign</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                JobAlign uses a combination of cutting-edge technologies to deliver accurate job matches:
              </p>
              
              <h3>Natural Language Processing (NLP)</h3>
              <p>
                Our advanced NLP models can understand the context and meaning behind the text in your resume and job descriptions. This allows us to identify skills and qualifications even when they're not explicitly stated.
              </p>
              
              <h3>Machine Learning</h3>
              <p>
                Our algorithms continuously learn from successful job placements, improving match accuracy over time. The system also adapts to changing industry terminology and emerging skills.
              </p>
              
              <h3>Knowledge Graph</h3>
              <p>
                We've built a comprehensive knowledge graph of skills, roles, and industries that understands the relationships between different competencies. This allows us to identify transferable skills and suggest career paths you might not have considered.
              </p>
              
              <h3>Data Security</h3>
              <p>
                Your privacy is our priority. We employ bank-level encryption for all personal data and follow strict data handling protocols that exceed industry standards. Your information is only shared with employers when you explicitly approve an application.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-indigo-600">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">James Smith</h4>
                    <p className="text-gray-600 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "JobAlign found me a position that perfectly matched my skill set and career goals. The AI recognized my potential for a role I wouldn't have applied for on my own, and it turned out to be my dream job."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-indigo-600">RP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rachel Patel</h4>
                    <p className="text-gray-600 text-sm">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "After struggling with traditional job boards for months, JobAlign matched me with three fantastic opportunities in just one week. The skill gap analysis helped me prepare for interviews and land a position with a 30% salary increase."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Job Match?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of job seekers who've found their ideal positions through JobAlign's intelligent matching.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-50 transition">
                Create Free Account
              </Link>
              <Link to="/demo" className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-800 transition">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Is JobAlign free to use?</h3>
                <p className="text-gray-600">
                  JobAlign offers a free basic account with limited job matches and a premium subscription that provides unlimited matches, priority applications, and personalized career coaching.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How accurate is the resume analysis?</h3>
                <p className="text-gray-600">
                  Our AI has a 95% accuracy rate for skill extraction and job matching, based on our internal testing and user feedback. You can always review and modify the extracted information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How often are new job matches added?</h3>
                <p className="text-gray-600">
                  Our system scans for new job listings 24/7 and updates your matches daily. You'll receive notifications for highly compatible new opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Can employers find me through JobAlign?</h3>
                <p className="text-gray-600">
                  Yes, with your permission. You can make your profile visible to employers, maintaining control over who sees your information. You can also remain anonymous until you decide to apply.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How is JobAlign different from other job boards?</h3>
                <p className="text-gray-600">
                  Unlike traditional job boards that rely on keyword matching, JobAlign uses AI to understand the nuance of your skills and experience, finding opportunities that truly match your capabilities and potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;