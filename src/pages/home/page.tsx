
import Navigation from '../../components/layout/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 font-['Inter',sans-serif]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-purple-600 mb-4 leading-tight">
            Hiya Kothari
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 font-light">
            UC Irvine Graduate | Software Engineer
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
              <i className="ri-code-line text-purple-600"></i>
              <span className="text-purple-700 font-medium">Software Engineering</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
              <i className="ri-brain-line text-purple-600"></i>
              <span className="text-purple-700 font-medium">AI/ML</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
              <i className="ri-stack-line text-purple-600"></i>
              <span className="text-purple-700 font-medium">Full Stack Developer</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-purple-600 transition-colors cursor-pointer bg-white hover:bg-purple-50 rounded-xl shadow-md"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://github.com/hiyakothari" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors cursor-pointer bg-white hover:bg-slate-100 rounded-xl shadow-md"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="mailto:hiyakothari8@gmail.com" 
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-purple-600 transition-colors cursor-pointer bg-white hover:bg-purple-50 rounded-xl shadow-md"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Hey there Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center">
              Hey there! 
              <span className="ml-3 text-3xl">👋</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm a software engineer passionate about building intelligent, user-centered applications that solve real-world problems. Fresh out of UC Irvine with a Computer Science degree, I've worked across the full stack—from developing cross-platform educational apps at Sparx Labs to building ML models that predict environmental contamination with 78% accuracy in academic research.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I love the challenge of turning complex ideas into elegant solutions, whether that's automating CI/CD pipelines, creating IoT systems, or designing seamless user experiences. Now I'm focused on combining AI, full-stack development, and DevOps to create scalable, impactful technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://github.com/hiyakothari" 
              target="_blank"
              rel="noopener noreferrer"
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