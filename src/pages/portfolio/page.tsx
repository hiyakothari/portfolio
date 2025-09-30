
import Navigation from '../../components/layout/Navigation';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20confident%20software%20engineer%20in%20modern%20business%20casual%20attire%2C%20clean%20minimalist%20studio%20background%20with%20soft%20natural%20lighting%2C%20friendly%20approachable%20expression%2C%20high%20quality%20photography%2C%20looking%20directly%20at%20camera%20with%20slight%20smile&width=300&height=300&seq=portfolio-hero-headshot&orientation=squarish"
              alt="Alex Johnson"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover object-top mx-auto mb-8 shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Alex Johnson
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light">
            Software Engineer & AI Enthusiast
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            I craft digital experiences that bridge innovative technology with human-centered design. 
            Passionate about building scalable solutions that make a meaningful impact in the world.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full">
              <i className="ri-code-line text-red-500"></i>
              <span className="text-gray-700 font-medium">Engineering</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full">
              <i className="ri-brain-line text-red-500"></i>
              <span className="text-gray-700 font-medium">AI & ML</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full">
              <i className="ri-palette-line text-red-500"></i>
              <span className="text-gray-700 font-medium">Creating</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-colors font-medium text-lg whitespace-nowrap inline-flex items-center space-x-2">
            <span>Explore My Work</span>
            <i className="ri-arrow-right-line"></i>
          </button>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-16">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer bg-gray-50 hover:bg-blue-50 rounded-full"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://github.com/hiyakothari" 
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-full"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="mailto:hiyakothari8@gmail.com" 
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer bg-gray-50 hover:bg-red-50 rounded-full"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Hey there Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
                Hey there! 
                <span className="ml-3 text-3xl">👋</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate software engineer at Google, where I build products 
                that impact millions of users. When I'm not coding, you'll find me 
                hosting the 0-1 podcast, where I chat with tech leaders, startup 
                founders, and bold creators about their journey from nothing to 
                something.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I love sharing stories, building communities, and helping others 
                navigate their own 0-1 moments. Whether it's through code, 
                conversations, or content, I'm always looking for ways to make an 
                impact.
              </p>
              <button className="text-red-500 hover:text-red-700 transition-colors font-medium inline-flex items-center space-x-2 cursor-pointer whitespace-nowrap">
                <span>Let's Connect</span>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-red-100 rounded-full p-8 w-64 h-64 flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Building</h3>
                <p className="text-gray-600 text-sm">Creating solutions that matter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/hiya-kothari-b9055b290/" 
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://github.com/hiyakothari" 
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="mailto:hiyakothari8@gmail.com" 
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-rss-fill text-xl"></i>
            </a>
          </div>
          <p className="text-gray-400 mb-4">© 2025 Hiya Kothari. Built with Love!!</p>
        </div>
      </footer>
    </div>
  );
}
