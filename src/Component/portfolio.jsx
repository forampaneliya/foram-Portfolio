import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, User, Briefcase, MessageCircle, ArrowUp, Monitor, Server } from 'lucide-react';
import photo from "../assets/img/photo.jpg"
import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import project3 from "../assets/img/project3.png"

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };


    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Pathsy Logistics Solutions",
      description: "A modern, responsive web interface designed for a logistics and supply chain management company. Built entirely with React.js and Tailwind CSS, the platform focuses on delivering a clean and professional user experience.",
      image: project1,
      tech: ["React js", "Tailwind css"],
      github: "https://github.com/vidhisavaliya-1710/PATHSY-LOGISTICS-SOLUTIONS.git",
      demo: "https://pathsy-logistics-solutions.vercel.app/"
    },
    {
      title: "The Black Turn",
      description: "A full-stack music platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled using Tailwind CSS. The platform provides a sleek and interactive experience for music enthusiasts, with both a public-facing website and an admin dashboard for content and user management.",
      image: project2,
      tech: ["React js", "tailwind css", "Node js", "MongoDB", "Express"],
      github: "https://github.com/mitulbhimani07/TheBlack_Turn.git",
      demo: "http://theblackturn.in/"
    },
    {
      title: "Novuscroe Drones",
      description: "A modern and dynamic website built for showcasing Kisaan Drone solutions in agriculture. Developed using React.js, Tailwind CSS, and SCSS, the platform delivers a clean, futuristic look with smooth theme customization, allowing users to switch between color themes seamlessly.",
      image: project3,
      tech: ["React js", "SCSS", "Tailwind css", "MongoDB,", "Node js"],
      github: "https://github.com/mitulbhimani07/Novuscore-Drone.git",
      demo: "https://novuscore.co.in/"
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        <div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            right: (window.innerWidth - mousePosition.x) * 0.015 + 'px',
            bottom: (window.innerHeight - mousePosition.y) * 0.015 + 'px',
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>


      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-floating-particle"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 animate-slide-right">
              Foram Paneliya
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 lg:space-x-10">
              {["hero", "about", "skills", "resume", "projects", "contact"].map(
                (section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-blue-400 relative group animate-slide-left ${activeSection === section
                      ? "text-blue-400"
                      : "text-slate-300"
                      }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {section === "hero" ? "Home" : section}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[90vh] sm:min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto text-center z-10">
          <div className="animate-fade-in-up">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-slate-100 animate-text-reveal flex flex-wrap justify-center">
              {/* Animated Letters */}
              {"Foram Paneliya".split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block animate-bounce-in ${char === " "
                    ? "mx-2 sm:mx-4"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                    }`}
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <div className="animate-typing-container mb-6 sm:mb-8 px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-400 max-w-full sm:max-w-[900px] mx-auto leading-relaxed text-center animate-typing">
                Full-Stack Developer crafting scalable, high-performance applications
                that deliver real impact.
              </p>
            </div>




            {/* Social Links */}
            <div
              className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="https://github.com/forampaneliya"
                className="p-3 sm:p-4 bg-slate-800/50 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 hover:text-emerald-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/foram-paneliya-114267305/"
                className="p-3 sm:p-4 bg-slate-800/50 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 hover:text-emerald-400" />
              </a>
              <a
                href="mailto:forampaneliya1204@gmail.com"
                className="p-3 sm:p-4 bg-slate-800/50 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 hover:text-emerald-400" />
              </a>
            </div>

            {/* Discover Button */}
            <button
              onClick={() => scrollToSection("about")}
              className="group flex items-center justify-center mx-auto text-blue-400 hover:text-blue-300 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="mr-2 text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Discover My Work
              </span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce group-hover:translate-y-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/20 backdrop-blur-sm relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-100 animate-slide-up">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className="space-y-8 animate-slide-right">
                <div className="space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with expertise in modern web technologies. I specialize in creating scalable applications using React, Node.js, and cloud technologies, transforming complex challenges into elegant, user-centric solutions.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    My development journey spans frontend frameworks, backend APIs, database design, and DevOps practices. I'm committed to writing clean, efficient code and staying updated with the latest industry trends and best practices.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/20 rounded-xl p-4 border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">3+</div>
                    <div className="text-sm text-slate-400">Years Experience</div>
                  </div>
                  <div className="bg-slate-800/20 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-400/50 transition-all duration-300 group">
                    <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform">25+</div>
                    <div className="text-sm text-slate-400">Projects Completed</div>
                  </div>
                </div>

                {/* Info Items */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center group-hover:bg-blue-400/20 transition-all duration-300 border border-blue-400/20">
                      <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                    <div>
                      <div className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">Location</div>
                      <div className="text-slate-400 text-sm">India</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300 border border-emerald-400/20">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                    <div>
                      <div className="text-slate-200 font-medium group-hover:text-emerald-400 transition-colors">Status</div>
                      <div className="text-slate-400 text-sm">Available for opportunities</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center group-hover:bg-amber-400/20 transition-all duration-300 border border-amber-400/20">
                      <div className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                    <div>
                      <div className="text-slate-200 font-medium group-hover:text-amber-400 transition-colors">Specialization</div>
                      <div className="text-slate-400 text-sm">MERN Stack & Modern Web Technologies</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 group"
                  >
                    <span>Let's Connect</span>
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative animate-slide-left">
                <div className="relative max-w-md mx-auto">
                  {/* Main Image Container */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl animate-pulse-slow"></div>
                    <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-2 border border-slate-700/30">
                      <img
                        src={photo}
                        alt="Profile"
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                  </div>
                  {/* Decorative Lines */}
                  <div className="absolute -z-10 top-1/4 -left-12 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
                  <div className="absolute -z-10 bottom-1/4 -right-12 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse"></div>

                  {/* Background Geometric Shapes */}
                  <div className="absolute -z-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="w-32 h-32 border border-slate-700/30 rounded-full animate-spin-slow"></div>
                  </div>
                  <div className="absolute -z-20 bottom-0 right-0 transform translate-x-8 translate-y-8">
                    <div className="w-24 h-24 border border-slate-700/30 rotate-45 animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-100 animate-slide-up">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skills</span>
            </h2>

            {/* Frontend + Backend Cards */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {/* Frontend Card */}
              <div className="relative group bg-gradient-to-br from-slate-800/30 to-slate-900/30 
                  backdrop-blur-lg rounded-2xl p-10 border border-slate-700/40 
                  hover:border-purple-400/60 transition-all duration-500 hover:shadow-lg 
                  hover:shadow-purple-500/20 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                    <Monitor className="w-14 h-14 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-purple-400/10 rounded-full blur-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-slate-100 group-hover:text-purple-400 transition-colors">
                  Frontend Development
                </h3>

                {/* Description */}
                <p className="text-slate-400 max-w-lg mx-auto mb-6">
                  Crafting elegant, responsive, and user-focused interfaces with attention to detail and performance.
                </p>

                {/* Highlights */}
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Responsive & Modern UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Interactive & Accessible Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Performance Optimized
                  </li>
                </ul>
              </div>

              {/* Backend Card */}
              <div className="relative group bg-gradient-to-br from-slate-800/30 to-slate-900/30 
                  backdrop-blur-lg rounded-2xl p-10 border border-slate-700/40 
                  hover:border-green-400/60 transition-all duration-500 hover:shadow-lg 
                  hover:shadow-green-500/20 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                    <Server className="w-14 h-14 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-green-400/10 rounded-full blur-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-slate-100 group-hover:text-green-400 transition-colors">
                  Backend Development
                </h3>

                {/* Description */}
                <p className="text-slate-400 max-w-lg mx-auto mb-6">
                  Building robust server-side architectures and APIs that scale with efficiency and reliability.
                </p>

                {/* Highlights */}
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Scalable Server Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Secure & Optimized APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Database Management
                  </li>
                </ul>
              </div>
            </div>


            {/* Skills Grid (Optional - if you still want it) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "ExpressJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-6 bg-slate-800/20 rounded-xl 
                       border border-slate-700/30 hover:border-blue-400/50 transition-all duration-500 
                       hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={tech.logo} alt={tech.name} className="w-14 h-14 mb-3 group-hover:animate-bounce" />
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
    .animate-bounce {
      animation: bounce 1s infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `}</style>
      </section>


      {/* Resume Section */}
        <section id="resume" className="py-24 bg-gradient-to-b from-slate-900/90 to-slate-900/70 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-100 tracking-wide animate-slide-up">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Resume</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Highlighting my professional journey, skills, and certification in a modern timeline format.
              </p>
            </div>

            {/* Timeline Section */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full opacity-20"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Education */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-5/12 order-2 md:order-1 text-right md:pr-10">
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">Bachelor of Technology in Computer Science</h3>
                    <p className="text-slate-400 text-sm">XYZ University, India | 2016 - 2020</p>
                    <p className="text-slate-300 mt-2">Focused on full-stack development, data structures, and cloud computing. Graduated with First Class Honors.</p>
                  </div>

                </div>

                {/* Backend Developer */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center justify-center  rounded-full">
                    <span className="text-slate-900 font-bold"></span>
                  </div>
                  <div className="md:w-5/12 md:pl-10 mt-4 md:mt-0">
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">Backend Developer</h3>
                    <p className="text-slate-400 text-sm">Tech Solutions Pvt Ltd | 2022 - Present</p>
                    <p className="text-slate-300 mt-2">Designing and maintaining APIs, managing databases, and implementing server-side logic using Node.js and MongoDB.</p>
                  </div>
                </div>

                {/* Frontend Developer */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-5/12 order-2 md:order-1 text-right md:pr-10 mt-4 md:mt-0">
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">Frontend Developer</h3>
                    <p className="text-slate-400 text-sm">Tech Solutions Pvt Ltd | 2022 - Present</p>
                    <p className="text-slate-300 mt-2">Building responsive and interactive web interfaces using React, Tailwind CSS, and integrating with backend APIs.</p>
                  </div>

                </div>

                {/* Experience Intern */}

              </div>
            </div>

            {/* Certification */}
            <div className="mt-24 text-center animate-fade-in-up ">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">Certification</h3>
              <div className="group/link space-x-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all w-4xl mx-auto">
                <h4 className="text-xl font-bold text-blue-300 mb-4 mt-2">Certified AWS Developer</h4>
                <p className="text-slate-200 mb-2">Expertise in designing, developing, and deploying cloud applications on AWS.</p>
              </div>
            </div>
          </div>
        </section>

      {/* Projects Section */}
      <section id="projects" className="py-32  relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-100 animate-slide-up">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Explore my latest work showcasing cutting-edge technology and innovative solutions
              </p>
            </div>

            {/* Projects Container */}
            <div className="space-y-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative animate-slide-up mb-15`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Project Row */}
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                    {/* Project Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        {/* Main image container */}
                        <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30 group-hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-80 object-cover rounded-xl  transition-transform duration-700"
                          />

                          {/* Image overlay */}
                          <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          {/* Floating action buttons */}
                          <div className="absolute top-8 right-8 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <a
                              href={project.github}
                              className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 group/btn"
                            >
                              <Github className="w-5 h-5 text-slate-300 group-hover/btn:text-blue-400 transition-colors" />
                            </a>
                            <a
                              href={project.demo}
                              className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300 group/btn"
                            >
                              <ExternalLink className="w-5 h-5 text-slate-300 group-hover/btn:text-emerald-400 transition-colors" />
                            </a>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute -z-10 ${index % 2 === 0 ? '-bottom-6 -left-6' : '-top-6 -right-6'} w-32 h-32 border border-slate-700/20 rounded-full animate-spin-slow`}></div>
                        <div className={`absolute -z-10 ${index % 2 === 0 ? '-top-4 -right-4' : '-bottom-4 -left-4'} w-20 h-20 border border-slate-700/20 rotate-45 animate-float`}></div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      {/* Project number */}
                      <div className="flex items-center space-x-4">
                        <div className="text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                          0{index + 1}
                        </div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/50 to-emerald-400/50 rounded-full"></div>
                      </div>

                      {/* Project title */}
                      <h3 className="text-4xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-500">
                        {project.title}
                      </h3>

                      {/* Project description */}
                      <div className="space-y-4">
                        <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {project.description}
                        </p>

                        {/* Additional features list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                          {['Responsive Design', 'Modern Architecture', 'Performance Optimized', 'Scalable Solution'].map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm text-slate-300 rounded-lg text-sm border border-slate-600/30 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in"
                              style={{ animationDelay: `${techIndex * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>

                  {/* Project separator line */}
                  {index < projects.length - 1 && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-slate-600/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-slate-100 animate-slide-up">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400  ">With Me</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I’m open to opportunities and collaborations. Reach out via GitHub, LinkedIn, or Email, and let's build something great together.
          </p>

          <div className="flex justify-center gap-8 mb-12 ">
            {[
              { icon: "github", title: "GitHub", url: "https://github.com/forampaneliya", color: "gray-400" },
              { icon: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/foram-paneliya-114267305/", color: "blue-500" },
              { icon: "mail", title: "Email", url: "mailto:forampaneliya1204@gmail.com", color: "red-500" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col w-2xl hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up items-center p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-${item.color}/50`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-${item.color}/20 mb-4`}>
                  {item.icon === "github" && <svg className="w-7 h-7 text-slate-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.654 1.65.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.104.814 2.225 0 1.606-.014 2.903-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" /></svg>}
                  {item.icon === "linkedin" && <svg className="w-7 h-7 text-slate-100" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .774 0 1.732v20.535C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.733V1.732C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.06c-1.14 0-2.062-.926-2.062-2.062 0-1.136.924-2.062 2.062-2.062s2.062.926 2.062 2.062c0 1.136-.924 2.062-2.062 2.062zM20.452 20.452h-3.555v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667h-3.555V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.267 2.369 4.267 5.455v6.286z" /></svg>}
                  {item.icon === "mail" && <svg className="w-7 h-7 text-slate-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l11.985-9.713H.015L12 12.713zm0 2.574l-12-9.713V21h24V5.574l-12 9.713z" /></svg>}
                </div>
                <h3 className="text-lg font-semibold text-blue-300 mb-1">{item.title}</h3>
              </a>
            ))}
          </div>

          <a
            href="mailto:hello@johndoe.dev"
            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </a>
        </div>
      </section>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8  bg-gradient-to-r from-blue-400 to-emerald-500 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce-in"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(-1deg); }
          66% { transform: translateY(-25px) rotate(1deg); }
        }
        @keyframes floatingParticle {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-100px); opacity: 0.8; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3) translateY(-20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(0); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes skillBar {
          from { width: 0%; }
          to { width: var(--skill-width, 0%); }
        }
        @keyframes pulseButton {
          0%, 100% { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(59, 130, 246, 0.6); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 8s ease-in-out infinite; }
        .animate-floating-particle { animation: floatingParticle linear infinite; }
        .animate-spin-slow { animation: spinSlow 10s linear infinite; }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-right { animation: slideRight 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-left { animation: slideLeft 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; opacity: 0; }
        .animate-bounce-in { animation: bounceIn 0.6s ease-out forwards; opacity: 0; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-skill-bar { animation: skillBar 1.5s ease-out forwards; }
        .animate-pulse-button { animation: pulseButton 2s ease-in-out infinite; }
        .animate-expand-line { animation: expandLine 1s ease-out forwards; animation-delay: 0.5s; width: 0; }
        .animate-bounce-slow { animation: bounceSlow 3s ease-in-out infinite; }
        .animate-typing { 
          overflow: hidden;
          border-right: 3px solid #60a5fa;
          white-space: nowrap;
          animation: typing 3s steps(60, end) forwards;
          animation-delay: 0.5s;
          width: 0;
        }
        .animate-typing-container::after {
          content: '';
          border-right: 3px solid #60a5fa;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #60a5fa; }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;