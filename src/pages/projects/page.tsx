
import Navigation from '../../components/layout/Navigation';

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Matcher",
      description: "Built a tool that scores resumes against job descriptions using NLP and GPT-based suggestions. Designed UI in Figma and deployed via Streamlit.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "OpenAI API"],
      language: "Python",
      github: "https://github.com/hiyakothari/AI-Resume-Matcher"
    },
    {
      title: "CI/CD E-Commerce Deployment",
      description: "Developed and automated a CI/CD pipeline for a MERN app with GitHub Actions and Docker. Deployed on AWS with rollback and error tracking.",
      technologies: ["Node.js", "MongoDB", "Docker", "AWS"],
      language: "JavaScript",
      github: null
    },
    {
      title: "Smart Garden System",
      description: "IoT-based irrigation system using sensors and AWS Lambda to automate watering based on real-time soil and weather data.",
      technologies: ["Python", "Arduino", "AWS IoT", "MQTT"],
      language: "Python",
      github: "https://github.com/hiyakothari/Smart-Garden-System"
    },
    {
      title: "Library Management System",
      description: "Built a GUI-based application for book checkouts, returns, and inventory management. Used JDBC to connect to MySQL.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      language: "Java",
      github: "https://github.com/hiyakothari/-Library-Management-System"
    },
    {
      title: "Unix Shell Job Scheduler",
      description: "Implemented a custom shell extension in C to manage foreground/background jobs, handle signals, and control process queues.",
      technologies: ["C", "Linux", "OS"],
      language: "C",
      github: "https://github.com/hiyakothari/Unix-Shell-Job-Scheduler"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 font-['Inter',sans-serif]">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of projects I've been working on. From web applications to open source contributions, here's what keeps me busy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group p-6"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 font-medium">{project.language}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-7 transition-colors font-medium inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <span>View on GitHub</span>
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">Private Repository</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to See More?</h3>
          <p className="text-slate-600 mb-6">
            Check out my GitHub for more projects and contributions to open-source communities.
          </p>
          <a
            href="https://github.com/hiyakothari"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium text-lg whitespace-nowrap inline-flex items-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>View GitHub</span>
          </a>
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
        </div>
      </footer>
    </div>
  );
}
