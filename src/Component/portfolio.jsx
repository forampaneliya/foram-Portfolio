import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Terminal, X, Minimize2, Maximize2, Folder, FileText } from 'lucide-react';
import { Instagram } from 'react-feather';

export default function Portfolio() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [commandHistory, setCommandHistory] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    // Simulate boot messages
    const bootMessages = [
      '[ OK ] Started Terminal Portfolio Service',
      '[ OK ] Reached target Multi-User System',
      '[ OK ] Started User Portfolio Manager',
    ];

    bootMessages.forEach((msg, index) => {
      setTimeout(() => {
        setCommandHistory(prev => [...prev, { type: 'system', text: msg }]);
      }, index * 300);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && contentRef.current) {
      const container = contentRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: elementTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Pathsy Logistics Solutions",
      description: "A modern, responsive web interface designed for a logistics and supply chain management company. Built with React.js and Tailwind CSS.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/vidhisavaliya-1710/PATHSY-LOGISTICS-SOLUTIONS.git",
      demo: "https://pathsy-logistics-solutions.vercel.app/"
    },
    {
      title: "The Black Turn",
      description: "A full-stack music platform built with the MERN stack providing a sleek and interactive experience for music enthusiasts.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/mitulbhimani07/TheBlack_Turn.git",
      demo: "http://theblackturn.in/"
    },
    {
      title: "Novuscore Drones",
      description: "A modern website showcasing Kisaan Drone solutions in agriculture with smooth theme customization and futuristic design.",
      tech: ["React.js", "SCSS", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/mitulbhimani07/Novuscore-Drone.git",
      demo: "https://novuscore.co.in/"
    }
  ];

  const skills = [
    { name: "HTML5", icon: "▰" },
    { name: "CSS3", icon: "▰" },
    { name: "JavaScript", icon: "▰" },
    { name: "React.js", icon: "▰" },
    { name: "Node.js", icon: "▰" },
    { name: "Express.js", icon: "▰" },
    { name: "MongoDB", icon: "▰" },
    { name: "Tailwind CSS", icon: "▰" },
    { name: "Bootstrap", icon: "▰" }
  ];

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center p-2 md:p-6">
      <div
        className={`bg-gray-950 border-2 border-green-500/50 rounded-lg shadow-2xl shadow-green-500/20 
                    flex flex-col transition-all duration-300 ${isMaximized ? 'w-full h-full' : 'w-full h-full md:w-[96%] md:h-[96%]'
          }`}
      >
        {/* Terminal Header Bar */}
        <div className="bg-gray-900/80 border-b-2 border-green-500/30 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              {/* Red Button - Close Terminal */}
              <button
                onClick={() => {
                  // This will be handled by the parent App component
                  // We'll dispatch a custom event to close the terminal
                  const event = new CustomEvent('closeTerminal');
                  window.dispatchEvent(event);
                }}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-all duration-300 cursor-pointer 
                         flex items-center justify-center group relative"
                title="Close Terminal"
              >
                {/* X icon appears on hover */}
                <X className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black" />
                {/* Tooltip for desktop */}
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                               hidden sm:block">
                  Close Terminal
                </span>
              </button>
              
              {/* Yellow Button - Minimize/Maximize */}
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all duration-300 cursor-pointer 
                         flex items-center justify-center group relative"
                title={isMaximized ? "Restore Window" : "Maximize Window"}
              >
                {isMaximized ? (
                  <Minimize2 className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black" />
                ) : (
                  <Maximize2 className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-black" />
                )}
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                               hidden sm:block">
                  {isMaximized ? "Restore" : "Maximize"}
                </span>
              </button>
              
              {/* Green Button - Active (Optional functionality) */}
              <div
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-all duration-300 cursor-pointer 
                         group relative"
                title="Terminal Active"
              >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                               hidden sm:block">
                  Active
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 ml-4">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono font-bold text-xs md:text-sm">
                foram@portfolio ~ % bash
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-green-400/60 text-xs">
            <span className="hidden md:inline">80x24</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-900/50 border-b border-green-500/20 px-2 md:px-4 py-2 overflow-x-auto">
          <div className="flex space-x-1 md:space-x-2 min-w-max">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 md:px-4 py-1.5 md:py-2 font-mono text-xs md:text-sm transition-all rounded-t
                  ${activeSection === section
                    ? 'bg-gray-950 text-green-400 border-t-2 border-x-2 border-green-500/50'
                    : 'text-green-400/50 hover:text-green-400 hover:bg-gray-900/50'
                  }`}
              >
                {section}.sh
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 font-mono text-green-400 
                     scrollbar-thin scrollbar-track-gray-950 scrollbar-thumb-green-500/50
                     bg-gradient-to-b from-gray-950 to-black"
        >
          {/* Boot Messages */}
          <div className="mb-6 text-xs md:text-sm text-green-400/70 space-y-1">
            {commandHistory.map((cmd, i) => (
              <div key={i} className="animate-fade-in">
                {cmd.text}
              </div>
            ))}
          </div>

          {/* Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center mb-20">
            <div className="text-center space-y-6 md:space-y-8">
              <div className="space-y-2 mb-8">
                <div className="text-green-400/60 text-xs md:text-sm">$ whoami</div>
                <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-green-400 tracking-wider">
                  FORAM_PANELIYA
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-green-400/60 text-xs md:text-sm">$ cat role.txt</div>
                <div className="text-xl md:text-2xl lg:text-4xl text-green-400/90 tracking-wide">
                  &gt; Full-Stack Developer_
                </div>
              </div>

              <div className="flex justify-center space-x-4 md:space-x-6 my-8 md:my-12">
                {[
                  { icon: Github, url: "https://github.com/forampaneliya", label: "github" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/foram-paneliya-114267305/", label: "linkedin" },
                  { icon: Mail, url: "mailto:forampaneliya1204@gmail.com", label: "email" }
                ].map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 md:p-4 border-2 border-green-500/50 hover:border-green-400 
                               transition-all duration-300 hover:bg-green-400/10"
                    title={label}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                    opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                      {label}
                    </div>
                  </a>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-green-500/50 
                           hover:border-green-400 transition-all duration-300 hover:bg-green-400/10
                           text-sm md:text-base group"
              >
                <span>$ ./explore.sh</span>
                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </section>

          {/* Rest of your sections remain unchanged */}
          {/* About Section */}
          <section id="about" className="mb-20 md:mb-32">
            <div className="mb-8">
              <div className="text-green-400/60 text-xs md:text-sm mb-2">$ cat about.txt</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                ╔══════════════════════════╗<br />
                ║&nbsp;&nbsp;ABOUT_ME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                ╚══════════════════════════╝
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg">
              <div className="border-l-4 border-green-500/50 pl-4 md:pl-6 py-2">
                <p className="text-green-400/90 leading-relaxed">
                  <span className="text-green-500">&gt;&gt;</span> I'm a passionate <span className="text-green-300 font-semibold">Full-Stack Developer</span> with
                  expertise in modern web technologies. I specialize in creating scalable applications using React, Node.js,
                  and cloud technologies.
                </p>
              </div>

              <div className="border-l-4 border-green-500/50 pl-4 md:pl-6 py-2">
                <p className="text-green-400/90 leading-relaxed">
                  <span className="text-green-500">&gt;&gt;</span> My development journey spans frontend frameworks, backend APIs,
                  database design, and DevOps practices. I'm committed to writing clean, efficient code and staying updated
                  with the latest industry trends.
                </p>
              </div>

              <div className="mt-8 p-4 md:p-6 border-2 border-green-500/30 bg-gray-900/30">
                <div className="text-green-400/70 text-xs md:text-sm mb-3">$ education --list</div>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-500">►</span>
                    <div>
                      <div className="text-green-400 font-semibold">Bachelor of Computer Applications</div>
                      <div className="text-green-400/70 text-xs md:text-sm">BHAKTA KAVI NARSINH MEHTA UNIVERSITY | 2022 - 2024</div>
                      <div className="text-green-400/60 text-xs mt-1">First Class Honors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-20 md:mb-32">
            <div className="mb-8">
              <div className="text-green-400/60 text-xs md:text-sm mb-2">$ ls -la skills/</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                ╔══════════════════════════╗<br />
                ║&nbsp;&nbsp;TECH_STACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                ╚══════════════════════════╝
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              {/* Frontend */}
              <div className="border-2 border-green-500/30 p-4 md:p-6 bg-gray-900/20 hover:border-green-500/50 transition-all">
                <div className="flex items-center space-x-2 mb-4">
                  <Folder className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-green-400">./frontend/</h3>
                </div>
                <div className="space-y-2 text-sm md:text-base">
                  {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"].map(skill => (
                    <div key={skill} className="flex items-center space-x-2 text-green-400/80">
                      <span className="text-green-500">├──</span>
                      <FileText className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="border-2 border-green-500/30 p-4 md:p-6 bg-gray-900/20 hover:border-green-500/50 transition-all">
                <div className="flex items-center space-x-2 mb-4">
                  <Folder className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-green-400">./backend/</h3>
                </div>
                <div className="space-y-2 text-sm md:text-base">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs"].map(skill => (
                    <div key={skill} className="flex items-center space-x-2 text-green-400/80">
                      <span className="text-green-500">├──</span>
                      <FileText className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20 md:mb-32">
            <div className="mb-8">
              <div className="text-green-400/60 text-xs md:text-sm mb-2">$ git log --oneline</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                ╔══════════════════════════╗<br />
                ║&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                ╚══════════════════════════╝
              </h2>
            </div>

            <div className="space-y-8 md:space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-2 border-green-500/30 p-4 md:p-6 bg-gray-900/20 
                             hover:border-green-500/50 hover:bg-gray-900/40 transition-all duration-300
                             group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-green-400/60 text-xs mb-1">
                        commit {Math.random().toString(36).substring(7)}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-green-500/60 text-xs md:text-sm">#{index + 1}</span>
                  </div>

                  <p className="text-green-400/80 mb-4 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 border border-green-500/40 text-green-400/80 
                                   text-xs md:text-sm hover:bg-green-500/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-green-500/50 
                                 hover:border-green-400 hover:bg-green-400/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-green-500/50 
                                 hover:border-green-400 hover:bg-green-400/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Resume and Certificate Section */}
          <section id="resume" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="mb-8">
              <div className="text-green-400/60 text-xs md:text-sm mb-2">$ ls -la Professional journey & achievements/</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                ╔══════════════════════════╗<br />
                ║&nbsp;&nbsp;RESUME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                ╚══════════════════════════╝
              </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-3"></div>

                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse ml-3"></div>
                </div>
                <p className="text-green-400/70 text-sm md:text-lg font-mono max-w-2xl mx-auto">

                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-green-400 to-green-500 h-full hidden md:block"></div>

                {/* Education Entry */}
                <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
                  <div className="md:w-5/12 md:pr-12 text-center md:text-right mb-8 md:mb-0">
                    <div className="inline-block relative">
                      {/* Terminal Window Style */}
                      <div className="bg-gray-900 border-2 border-green-500/30 rounded-lg p-6 shadow-2xl shadow-green-500/20 hover:border-green-400 transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 font-mono">
                          $ education --current
                        </h3>
                        <div className="text-green-400/90 font-mono text-left">
                          <p className="text-lg font-semibold mb-1">Bachelor of Computer Applications</p>
                          <p className="text-green-400/70 text-sm mb-3">
                            BHAKTA KAVI NARSINH MEHTA UNIVERSITY | 2022 - 2024
                          </p>
                          <ul className="text-sm space-y-2 text-green-400/80">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">►</span>
                              Focused on web development & database management
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">►</span>
                              Completed with First Class Honors
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">►</span>
                              Specialized in modern web technologies
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg shadow-green-500/50 animate-pulse"></div>
                    <div className="absolute w-12 h-12 border-2 border-green-500/30 rounded-full animate-ping"></div>
                  </div>

                  <div className="md:w-5/12"></div>
                </div>

                {/* Experience Entries */}
                {[
                  {
                    title: "Backend Developer",
                    command: "$ backend --experience",
                    description: "Designing and maintaining APIs, managing databases, and implementing server-side logic",
                    skills: ["Node.js", "MongoDB", "REST APIs", "Authentication"],
                    side: "right"
                  },
                  {
                    title: "Frontend Developer",
                    command: "$ frontend --experience",
                    description: "Building responsive and interactive web interfaces with modern frameworks",
                    skills: ["React.js", "Tailwind CSS", "State Management", "UI/UX"],
                    side: "left"
                  }
                ].map((exp, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-5/12 md:px-12 text-center mb-8 md:mb-0">
                      <div className="inline-block relative">
                        {/* Terminal Window */}
                        <div className="bg-gray-900 border-2 border-green-500/30 rounded-lg p-6 shadow-2xl shadow-green-500/20 hover:border-green-400 transition-all duration-300 group">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 font-mono group-hover:text-green-300 transition-colors">
                            {exp.command}
                          </h3>

                          <div className="text-green-400/90 font-mono text-left">
                            <p className="text-lg font-semibold mb-1">{exp.title}</p>
                            <p className="text-green-400/70 text-sm mb-3">
                              Full-Stack Development
                            </p>
                            <p className="text-sm mb-4 text-green-400/80">
                              {exp.description}
                            </p>

                            <div className="space-y-3">
                              <p className="text-green-500 text-xs font-semibold">SKILLS UTILIZED:</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded hover:bg-green-500/20 transition-colors"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg shadow-green-500/50 animate-pulse"></div>
                      <div className="absolute w-12 h-12 border-2 border-green-500/30 rounded-full animate-ping"></div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </div>
                ))}
              </div>

              {/* Certificate Section */}
              <div className="mt-24 md:mt-32">
                <div className="inline-flex items-center mb-4">
                  <div className="mb-8">
                    <div className="text-green-400/60 text-xs md:text-sm mb-2">$ ls -la Official certifications & achievements/</div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                      ╔══════════════════════════╗<br />
                      ║&nbsp;&nbsp;certificate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                      ╚══════════════════════════╝
                    </h2>
                  </div>

                </div>

                {/* Certificate Card */}
                <a
                  href="https://www.linkedin.com/posts/foram-paneliya-114267305_certificate-activity-7298290568831401991-nBud?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3QfeABA-PSHpWU8_CNjnM2pT4wtT-QZ3s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="max-w-3xl mx-auto bg-gray-900 border-2 border-green-500/30 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-1">
                    {/* Terminal Header */}
                    <div className="bg-gray-800/50 border-b border-green-500/20 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-green-400 font-mono text-sm">
                          $ certificate --verify
                        </span>
                      </div>
                      <div className="text-green-400/50 text-xs font-mono">
                        [CLICK TO VERIFY]
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                        <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-4 min-w-[120px] text-center">
                          <div className="text-4xl font-bold text-green-400 mb-2">🏆</div>
                          <div className="text-green-400 text-sm font-semibold">CERTIFIED</div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 font-mono group-hover:text-green-300 transition-colors">
                            TECHWAR Certification
                          </h3>
                          <p className="text-green-400/80 text-sm md:text-base leading-relaxed">
                            Designing with HTML & CSS — Demonstrated expertise in creating responsive and visually appealing web layouts using HTML5 and CSS3. Gained experience in mobile-first design, CSS grid & flexbox, and styling best practices.
                          </p>
                        </div>
                      </div>

                      {/* Skills Gained */}
                      <div className="space-y-3">
                        <p className="text-green-500 text-sm font-semibold font-mono">
                          $ skills_acquired --list
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Responsive Design', 'CSS Grid', 'Flexbox', 'Mobile First'].map((skill, i) => (
                            <div
                              key={i}
                              className="text-center px-3 py-2 bg-green-500/5 border border-green-500/20 rounded hover:bg-green-500/10 transition-colors group/skill"
                            >
                              <span className="text-green-400 text-xs md:text-sm group-hover/skill:text-green-300 transition-colors">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Verification Info */}
                      <div className="mt-6 pt-6 border-t border-green-500/20">
                        <div className="flex items-center justify-between text-green-400/60 text-xs md:text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-500 animate-pulse">●</span>
                            <span className="font-mono">Status: VERIFIED</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono">Issuer: TECHWAR</span>
                            <ExternalLink className="w-3 h-3 group-hover:text-green-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <div className="mb-8">
              <div className="text-green-400/60 text-xs md:text-sm mb-2">$ curl -X GET /contact</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
                ╔══════════════════════════╗<br />
                ║&nbsp;&nbsp;CONTACT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║<br />
                ╚══════════════════════════╝
              </h2>
            </div>

            <div className="border-2 border-green-500/30 p-6 md:p-8 bg-gray-900/20">
              <p className="text-green-400/90 mb-6 text-sm md:text-base leading-relaxed">
                <span className="text-green-500">&gt;&gt;</span> I'm open to opportunities and collaborations.
                Let's build something amazing together!
              </p>

              <div className="space-y-4 text-sm md:text-base">
                <a
                  href="https://github.com/forampaneliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-400/80 hover:text-green-400 transition-colors group"
                >
                  <Github className="w-5 h-5" />
                  <span className="group-hover:translate-x-2 transition-transform">github.com/forampaneliya</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/foram-paneliya-114267305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-400/80 hover:text-green-400 transition-colors group">
                  <Linkedin className="w-5 h-5" />
                  <span className="group-hover:translate-x-2 transition-transform">LinkedIn Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/foram-paneliya-114267305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-400/80 hover:text-green-400 transition-colors group">
                  <Instagram className="w-5 h-5" />
                  <span className="group-hover:translate-x-2 transition-transform">programming_by_foram</span>
                </a>
                <a
                  href="mailto:forampaneliya1204@gmail.com"
                  className="flex items-center space-x-3 text-green-400/80 hover:text-green-400 transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="group-hover:translate-x-2 transition-transform">forampaneliya1204@gmail.com</span>
                </a>
              </div>
            </div>
          </section>



          {/* Footer */}
          <div className="text-center py-8 border-t-2 border-green-500/20 text-green-400/50 text-xs md:text-sm">
            <div>$ echo "Built with React & Tailwind CSS"</div>
            <div className="mt-2">© 2025 Foram Paneliya | All rights reserved</div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-900/80 border-t-2 border-green-500/30 px-4 py-2 flex justify-between items-center text-xs text-green-400/70">
          <div className="flex items-center space-x-4">
            <span>~ {activeSection}.sh</span>
            <span className="hidden md:inline">UTF-8</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">bash</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .holi-cursor-core {
          position: fixed;
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: transform 0.05s ease;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8),
                      0 0 20px rgba(34, 197, 94, 0.5);
        }

        .holi-cursor-glow {
          position: fixed;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(34, 197, 94, 0.5),
            rgba(16, 185, 129, 0.3),
            rgba(5, 150, 105, 0.2),
            transparent 70%
          );
          filter: blur(10px);
          animation: holiHue 8s linear infinite;
          transition: transform 0.1s ease;
        }

        .holi-cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        @keyframes holiHue {
          0% { filter: hue-rotate(0deg) blur(10px); }
          50% { filter: hue-rotate(180deg) blur(10px); }@keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fade-in 0.5s ease-out;
    }

    * {
      cursor: none !important;
    }

    .scrollbar-thin::-webkit-scrollbar {
      width: 10px;
    }

    .scrollbar-track-gray-950::-webkit-scrollbar-track {
      background: #030712;
    }

    .scrollbar-thumb-green-500\/50::-webkit-scrollbar-thumb {
      background: rgba(34, 197, 94, 0.5);
      border-radius: 5px;
    }

    .scrollbar-thumb-green-500\/50::-webkit-scrollbar-thumb:hover {
      background: rgba(34, 197, 94, 0.7);
    }

    @media (max-width: 768px) {
      .holi-cursor-core,
      .holi-cursor-glow,
      .holi-cursor-trail {
        display: none;
      }
      * {
        cursor: auto !important;
      }
    }
      @keyframes pulse-delayed {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-pulse-delayed {
  animation: pulse-delayed 4s ease-in-out infinite;
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
  `}</style>
    </div>
  );
}