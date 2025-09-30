
import { useState } from 'react';
import Navigation from '../../components/layout/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 font-['Inter',sans-serif]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting
            projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <i className="ri-mail-line text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Email</p>
                      <a
                        href="mailto:hiyakothari8@gmail.com"
                        className="text-slate-900 font-medium hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        hiyakothari8@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <i className="ri-map-pin-line text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">Location</p>
                      <p className="text-slate-900 font-medium">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <i className="ri-linkedin-line text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/hiya-kothari-b9055b290/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-medium hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/hiya-kothari-b9055b290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-slate-500 hover:text-purple-600 transition-colors cursor-pointer bg-slate-50 hover:bg-purple-50 rounded-xl"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    href="https://github.com/hiyakothari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer bg-slate-50 hover:bg-slate-100 rounded-xl"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://github.com/hiyakothari" 
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="mailto:hiyakothari8@gmail.com" 
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
          <p className="text-slate-400 mb-4">© 2025 Hiya Kothari. Built with Love!!</p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </footer>
    </div>
  );
}