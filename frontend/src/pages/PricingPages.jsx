// pages/PricingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PricingPage = () => {
  const [annual, setAnnual] = useState(true);

  const toggleBilling = () => {
    setAnnual(!annual);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-indigo-100">
              Choose the plan that's right for your job search journey
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
              <button
                onClick={toggleBilling}
                className={`px-4 py-2 rounded-md ${
                  annual ? 'bg-indigo-600 text-white' : 'text-gray-700'
                }`}
              >
                Annual Billing
                {annual && <span className="ml-2 text-xs bg-indigo-800 px-2 py-1 rounded-full">Save 20%</span>}
              </button>
              <button
                onClick={toggleBilling}
                className={`px-4 py-2 rounded-md ${
                  !annual ? 'bg-indigo-600 text-white' : 'text-gray-700'
                }`}
              >
                Monthly Billing
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Free</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">$0</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">Perfect for casual job seekers</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Resume analysis & skill extraction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Up to 10 job matches per month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Basic profile customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Job application tracking</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/signup" 
                      className="w-full inline-block text-center bg-gray-100 hover:bg-gray-200 text-indigo-600 font-semibold px-6 py-3 rounded-md transition"
                    >
                      Sign Up Free
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Premium Plan */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-indigo-600 transform md:scale-105">
                <div className="bg-indigo-600 text-white text-center py-2">
                  <span className="text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">${annual ? '19' : '24'}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">For serious job seekers</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">All Free features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Unlimited job matches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Advanced profile customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Priority application status</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Detailed skill gap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Weekly match recommendations</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/signup" 
                      className="w-full inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Pro</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">${annual ? '39' : '49'}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">For career advancement</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">1-on-1 career coaching (2 sessions/month)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Resume rewriting assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Interview preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Salary negotiation guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Executive profile visibility</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/signup" 
                      className="w-full inline-block text-center bg-gray-100 hover:bg-gray-200 text-indigo-600 font-semibold px-6 py-3 rounded-md transition"
                    >
                      Get Career Pro
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Compare Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 border text-left font-semibold text-gray-800">Feature</th>
                    <th className="p-4 border text-center font-semibold text-gray-800">Free</th>
                    <th className="p-4 border text-center font-semibold text-gray-800">Premium</th>
                    <th className="p-4 border text-center font-semibold text-gray-800">Career Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border text-gray-700">Resume Analysis</td>
                    <td className="p-4 border text-center text-gray-700">Basic</td>
                    <td className="p-4 border text-center text-gray-700">Advanced</td>
                    <td className="p-4 border text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border text-gray-700">Job Matches</td>
                    <td className="p-4 border text-center text-gray-700">10/month</td>
                    <td className="p-4 border text-center text-gray-700">Unlimited</td>
                    <td className="p-4 border text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 border text-gray-700">Profile Customization</td>
                    <td className="p-4 border text-center text-gray-700">Basic</td>
                    <td className="p-4 border text-center text-gray-700">Advanced</td>
                    <td className="p-4 border text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border text-gray-700">Skill Gap Analysis</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">✓</td>
                    <td className="p-4 border text-center text-gray-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 border text-gray-700">Career Coaching</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">2 sessions/month</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border text-gray-700">Resume Rewriting</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 border text-gray-700">Interview Preparation</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">—</td>
                    <td className="p-4 border text-center text-gray-700">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border text-gray-700">Employer Profile Visibility</td>
                    <td className="p-4 border text-center text-gray-700">Standard</td>
                    <td className="p-4 border text-center text-gray-700">Enhanced</td>
                    <td className="p-4 border text-center text-gray-700">Executive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to the new features. If you downgrade, you'll keep your current plan until the end of your billing cycle.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-600">
                  No, all plans are subscription-based and can be canceled at any time. There are no long-term contracts or commitments required.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How do the coaching sessions work?</h3>
                <p className="text-gray-600">
                  Career Pro plan includes two 45-minute coaching sessions per month with experienced career advisors. These sessions are conducted via video call and can be scheduled through your dashboard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you offer discounts for students?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 50% discount on our Premium plan for verified students. Contact our support team with proof of enrollment to apply for the student discount.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal and Apple Pay for subscription payments.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Job Search?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of professionals who have found their ideal career match with JobAlign.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-50 transition">
                Get Started Today
              </Link>
              <a href="#" className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-800 transition">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;