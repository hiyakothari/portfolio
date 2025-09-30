
export default function About() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">About Me</h1>
          <div className="w-20 h-1 bg-red-400 mx-auto mb-12"></div>

          {/* Added social link */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With over 5 years of experience in software development, I specialize in creating robust, 
              scalable applications that solve real-world problems. My journey began with a fascination 
              for how technology can transform ideas into reality, and that passion continues to drive 
              my work today.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I thrive at the intersection of frontend elegance and backend efficiency, with a particular 
              interest in AI and machine learning applications. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open-source projects, or hiking in the mountains 
              with my camera.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-2xl text-red-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-server-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">AWS</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">PyTorch</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">OpenAI API</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">Scikit-learn</span>
              </div>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Currently Exploring</h3>
            <p className="text-gray-700 mb-6">
              I'm diving deep into advanced AI architectures and exploring the potential of 
              large language models in software development workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">GPT Integration</span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Vector Databases</span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Rust</span>
            </div>
          </div>

          {/* Added footer */}
          <p className="text-slate-400 mb-4 text-center">© 2025 Hiya Kothari. Built with Love!!</p>
        </div>
      </div>
    </div>
  );
}
