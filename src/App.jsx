import { useState, useEffect } from 'react';
import profilePhoto from './ProfilePic/Qasim.jpeg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-black text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Qasim Ali
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'hover:text-indigo-500 dark:hover:text-indigo-300'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-black shadow-md py-2 px-4">
            {['home', 'about', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left capitalize py-2 px-3 rounded-md text-sm font-medium ${
                  activeSection === item
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Section */}
        <section id="home" className={`min-h-[calc(100vh-5rem)] flex items-center justify-center ${activeSection !== 'home' && 'hidden'}`}>
          <div className="text-center px-4">
            <div className="mx-auto h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-indigo-500 mb-6">
              <img 
                src={profilePhoto} 
                alt="Syed Qasim Ali" 
                className="h-full w-full object-cover" 
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Syed Qasim Ali</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 mb-6">
              Frontend Developer
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg mb-8">
              I build responsive, user-friendly web interfaces with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://linkedin.com/in/s-qasim-ali" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base"
              >
                View LinkedIn
              </a>
              <a 
                href="https://github.com/S-Q-Ali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition text-sm sm:text-base"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-8 md:py-12 ${activeSection !== 'about' && 'hidden'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-base md:text-lg">
                I'm a Computer Science graduate with a minor in Web Frontend from University of Central Punjab, passionate about creating beautiful and functional web experiences.
              </p>
              <p className="mb-4 text-base md:text-lg">
                My expertise includes building responsive interfaces with React.js, optimizing performance, and implementing modern UI/UX principles.
              </p>
              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Redux', 'Python', 'MySQL', 'C++'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Frontend Web Developer - Social Swirl</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">Oct 2024 - Nov 2024</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>Built responsive web interfaces boosting user engagement by 30%</li>
                    <li>Created dynamic UI components cutting development time by 15%</li>
                    <li>Improved site speed by 20% through optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Project Lead - University Database Management System</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">Jun 2022 - Jul 2022</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>Led team to develop comprehensive database system</li>
                    <li>Designed ERD and implemented MySQL database</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-8 md:py-12 ${activeSection !== 'projects' && 'hidden'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Social Swirl E-commerce</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">Oct 2024 - Nov 2024</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  Feature-rich e-commerce platform for a clothing brand built with React.js, Redux, and Tailwind CSS.
                </p>
                <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <li>Engineered seamless user experience with interactive components</li>
                  <li>Implemented optimized Redux state management</li>
                  <li>Integrated dynamic APIs for real-time product updates</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Redux', 'Tailwind CSS', 'API Integration'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Ask the Quran AI</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">Mar 2025 - Jul 2025</p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered web app that answers Quran-related questions using prompt engineering.
                </p>
                <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <li>Developed clean, responsive interface</li>
                  <li>Implemented AI question-answering functionality</li>
                  <li>Deployed live at askthequranai.netlify.app</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Prompt Engineering', 'Responsive Design'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://askthequranai.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm sm:text-base text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-8 md:py-12 ${activeSection !== 'education' && 'hidden'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">University of Central Punjab, Lahore</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Minor in Web Frontend</p>
                </div>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm">
                  Oct 2021 - Jul 2025
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Govt. College, Sheikhupura</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">Intermediate in Sciences</p>
                </div>
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm">
                  Oct 2019 - May 2021
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-8 md:py-12 ${activeSection !== 'contact' && 'hidden'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="order-2 md:order-1">
              <h3 className="text-lg md:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-0.5">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">(+92)-0314-4993685</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-0.5">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">syedqasim963@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-0.5">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Gujranwala Road, Kot Hussain, Sheikhupura</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg md:text-xl font-semibold mb-3 sm:mb-4">Connect With Me</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a 
                    href="https://github.com/S-Q-Ali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/s-qasim-ali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-3 sm:mb-4">Send Me a Message</h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Syed Qasim Ali. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;