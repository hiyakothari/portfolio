
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Sparx Labs",
      location: "San Francisco, CA",
      duration: "June 2025 - September 2025",
      color: "from-purple-500 to-purple-600",
      summary: "Built a cross-platform educational app with integrated frontend and backend, enhancing scalability and user engagement.",
      details: [
        "Built a cross-platform educational app from the ground up, integrating frontend and backend systems to enhance scalability and user engagement across iOS, Android, and web platforms",
        "Delivered responsive UI/UX with seamless onboarding flows, profile creation, and interactive learning screens using Jetpack Compose (Android), SwiftUI (iOS), and React (Web)",
        "Engineered secure backend infrastructure with Firebase and PostgreSQL, supporting user authentication, real-time progress tracking, and cross-platform data synchronization",
        "Implemented RESTful APIs to enable efficient communication between frontend and backend services",
        "Collaborated with product managers and designers to define technical requirements and ensure pixel-perfect implementation of designs"
      ],
      technologies: ["Jetpack Compose", "SwiftUI", "React", "Firebase", "PostgreSQL", "REST APIs", "Kotlin", "JavaScript"]
    },
    {
      id: 2,
      title: "ICS Undergraduate Tutor",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      duration: "September 2024 - June 2025",
      color: "from-emerald-500 to-emerald-600",
      summary: "Tutored over 100 students in Python, Java, and C++ fundamentals, contributing to a 30% increase in course pass rates.",
      details: [
        "Tutored over 100 students in Python, Java, and C++ fundamentals, contributing to a 30% increase in course pass rates",
        "Delivered personalized coding reviews and debugging strategies that improved student project quality and code efficiency",
        "Developed supplemental learning materials and practice problems to reinforce key programming concepts",
        "Held weekly office hours providing one-on-one support for students struggling with data structures, algorithms, and object-oriented programming",
        "Mentored students on best practices for code readability, documentation, and version control"
      ],
      technologies: ["Python", "Java", "C++", "Data Structures", "Algorithms", "Debugging"]
    },
    {
      id: 3,
      title: "Undergraduate Research Assistant",
      company: "Prof. Olivares's Lab, UCI",
      location: "Irvine, CA",
      duration: "June 2024 - June 2025",
      color: "from-blue-500 to-blue-600",
      summary: "Built machine learning models analyzing environmental datapoints, achieving 85% accuracy in predicting PFAS contamination hotspots.",
      details: [
        "Built machine learning models analyzing environmental datapoints, achieving 85% accuracy in predicting PFAS contamination hotspots across California water sources",
        "Processed and cleaned large datasets using Pandas and NumPy, implementing feature engineering techniques to improve model performance",
        "Produced interactive geospatial visualizations using Python data visualization libraries, which were presented in academic conferences and used in policy discussions with environmental agencies"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Visualization", "Geospatial Analysis", "Machine Learning"]
    },
    {
      id: 4,
      title: "Teacher Assistant for Python Class",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      duration: "September 2023 - December 2023",
      color: "from-orange-500 to-orange-600",
      summary: "Mentored 80+ students in Python fundamentals, covering topics from basic syntax to advanced data structures.",
      details: [
        "Mentored 80+ students in Python fundamentals, covering topics from basic syntax to advanced data structures and debugging best practices",
        "Led lab sessions demonstrating practical coding techniques and real-world applications of programming concepts",
        "Provided detailed feedback on student code submissions, focusing on improving code quality, efficiency, and problem-solving approaches"
      ],
      technologies: ["Python", "Debugging", "Algorithm Design", "Teaching & Mentorship"]
    },
    {
      id: 5,
      title: "Learner Assistant",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      duration: "September 2022 - March 2023",
      color: "from-violet-500 to-violet-600",
      summary: "Led interactive coding sessions for 100+ students in foundational Computer Science courses.",
      details: [
        "Led interactive coding sessions for 100+ students in foundational Computer Science courses",
        "Guided students through debugging processes and code optimization practices, improving assignment quality by 25%",
        "Facilitated collaborative learning environment where students could ask questions and work through problems together",
        "Developed debugging workflow strategies that students could apply to future programming challenges",
        "Assisted with lab setup, testing infrastructure, and technical troubleshooting"
      ],
      technologies: ["Python", "Problem Solving", "Code Optimization", "Peer Instruction"]
    }
  ];

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 font-['Inter',sans-serif]">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Work Experience</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey building impactful software solutions
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(exp.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-slate-600 font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-slate-500 flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {exp.duration}
                        </span>
                        <span className="text-sm text-slate-500 flex items-center">
                          <i className="ri-map-pin-line mr-1"></i>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-slate-600 text-sm max-w-xs hidden lg:block">
                      {exp.summary}
                    </p>
                    <i className={`ri-arrow-${expandedCard === exp.id ? 'up' : 'down'}-s-line text-2xl text-slate-400 transition-transform duration-300`}></i>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === exp.id && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements & Responsibilities</h4>
                    <ul className="space-y-3 mb-6">
                      {exp.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in Working Together?</h3>
          <p className="text-slate-600 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <button 
            onClick={handleGetInTouch}
            className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-7 0 transition-all duration-300 font-medium text-lg whitespace-nowrap inline-flex items-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Get In Touch</span>
            <i className="ri-arrow-right-line"></i>
          </button>
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
