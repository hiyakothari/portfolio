
import Navigation from '../../components/layout/Navigation';

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 font-['_Inter',sans-serif]">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Skills &amp; Technologies</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, languages, and tools I work with to build amazing software experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Backend Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-server-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Node.js</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Python</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Java</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Express.js</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Django</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">REST APIs</span>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-smartphone-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Mobile Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">React Native</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">iOS Development</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Android Development</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Kotlin</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Swift</span>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-cloud-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Cloud &amp; DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">AWS</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Google Cloud</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Docker</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">CI/CD</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Git</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">GitHub Actions</span>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-code-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">JavaScript</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">TypeScript</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Python</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Java</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">C++</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Kotlin</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Rust</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">SQL</span>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-tools-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Tools &amp; Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">VS Code</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">IntelliJ IDEA</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Postman</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Figma</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">MongoDB</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">PostgreSQL</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Redis</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Firebase</span>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="ri-code-s-slash-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">React</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">TypeScript</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">JavaScript</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">HTML5</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Next.js</span>
              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200">Angular</span>
            </div>
          </div>

        </div>

        {/* Always Learning */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Always Learning</h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to continuous learning. I regularly 
            explore new frameworks, tools, and best practices to stay current with industry 
            trends and deliver cutting-edge solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg">GPT Integration</span>
            <span className="px-6 py-3 bg-violet-600 text-white rounded-full font-medium shadow-lg">Vector Databases</span>
            <span className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg">Rust</span>
            <span className="px-6 py-3 bg-violet-600 text-white rounded-full font-medium shadow-lg">WebAssembly</span>
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

        </div>
      </footer>
    </div>
  );
}
