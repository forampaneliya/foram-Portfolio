import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, User, Briefcase, MessageCircle, ArrowUp, Monitor, Server, Menu, X } from 'lucide-react';
import photo from "../assets/img/photo.jpg"
import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import project3 from "../assets/img/project3.png"
import { motion } from "framer-motion";

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["hero", "about", "skills", "resume", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 transition-all duration-300 ${activeSection === section
                      ? "text-blue-400"
                      : "text-slate-300"
                      }`}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[90vh] sm:min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="container mx-auto text-center z-10">
          <div className="animate-fade-in-up">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-slate-100 animate-text-reveal flex flex-wrap justify-center">
              {/* Animated Letters */}
              {"Foram Paneliya".split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block animate-bounce-in ${char === " "
                    ? "mx-1 sm:mx-2 lg:mx-3"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                    }`}
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
           <div className="animate-typing-container mb-6 sm:mb-8 px-2 sm:px-4">
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 w-full max-w-fit mx-auto leading-relaxed text-center animate-typing">
    Full-Stack Developer
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
      <section id="about" className="py-16 md:py-20 bg-slate-800/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-100 animate-slide-up">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Me
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Content Side */}
              <div className="space-y-6 md:space-y-8 animate-slide-right">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with expertise in modern web technologies. I specialize in creating scalable applications using React, Node.js, and cloud technologies, transforming complex challenges into elegant, user-centric solutions.
                  </p>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    My development journey spans frontend frameworks, backend APIs, database design, and DevOps practices. I'm committed to writing clean, efficient code and staying updated with the latest industry trends and best practices.
                  </p>
                </div>



                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <span>Let's Connect</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative animate-slide-left mt-8 lg:mt-0">
                <div className="relative max-w-md mx-auto">
                  {/* Main Image Container */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl animate-pulse-slow"></div>
                    <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-2 border border-slate-700/30">
                      <img
                        src={photo}
                        alt="Profile"
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                  </div>
                  {/* Decorative Lines */}
                  <div className="absolute -z-10 top-1/4 -left-8 sm:-left-12 w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
                  <div className="absolute -z-10 bottom-1/4 -right-8 sm:-right-12 w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>

                  {/* Background Geometric Shapes */}
                  <div className="absolute -z-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-700/30 rounded-full animate-spin-slow"></div>
                  </div>
                  <div className="absolute -z-20 bottom-0 right-0 transform translate-x-4 sm:translate-x-8 translate-y-4 sm:translate-y-8">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 border border-slate-700/30 rotate-45 animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-slate-100 animate-slide-up">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skills</span>
            </h2>

            {/* Frontend + Backend Cards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
              {/* Frontend Card */}
              <div className="relative group bg-gradient-to-br from-slate-800/30 to-slate-900/30 
                  backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700/40 
                  hover:border-purple-400/60 transition-all duration-500 hover:shadow-lg 
                  hover:shadow-purple-500/20 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                    <Monitor className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-purple-400/10 rounded-full blur-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-100 group-hover:text-purple-400 transition-colors">
                  Frontend Development
                </h3>

                {/* Description */}
                <p className="text-slate-400 max-w-lg mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
                  Crafting elegant, responsive, and user-focused interfaces with attention to detail and performance.
                </p>

                {/* Highlights */}
                <ul className="text-slate-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></span>
                    Responsive & Modern UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></span>
                    Interactive & Accessible Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></span>
                    Performance Optimized
                  </li>
                </ul>
              </div>

              {/* Backend Card */}
              <div className="relative group bg-gradient-to-br from-slate-800/30 to-slate-900/30 
                  backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700/40 
                  hover:border-green-400/60 transition-all duration-500 hover:shadow-lg 
                  hover:shadow-green-500/20 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                    <Server className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-green-400/10 rounded-full blur-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-100 group-hover:text-green-400 transition-colors">
                  Backend Development
                </h3>

                {/* Description */}
                <p className="text-slate-400 max-w-lg mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
                  Building robust server-side architectures and APIs that scale with efficiency and reliability.
                </p>

                {/* Highlights */}
                <ul className="text-slate-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                    Scalable Server Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                    Secure & Optimized APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                    Database Management
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
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
                  className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-800/20 rounded-xl 
                       border border-slate-700/30 hover:border-blue-400/50 transition-all duration-500 
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={tech.logo} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 group-hover:animate-bounce" />
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium text-xs sm:text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="py-16 md:py-24 bg-gradient-to-b from-slate-900/90 to-slate-900/70 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-100 tracking-wide">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Resume
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A professional journey of learning, building, and growing as a developer.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-emerald-400 to-blue-400 h-full hidden md:block"></div>

            <div className="space-y-12 md:space-y-20 relative">
              {/* Education (Left Side) */}
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                {/* Marker */}
                <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                </div>

                {/* Content */}
                <div className="md:w-5/12 text-center md:text-right md:pr-6 lg:pr-10 ">
                  <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/40 rounded-2xl backdrop-blur-sm  hover:shadow-lg hover:shadow-blue-400/30 transition">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-2">
                      Bachelor of Computer Applications                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      BHAKTA KAVI NARSINH MEHTA UNIVERSITY, India | 2022 - 2024
                    </p>
                    <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-base">
                      Focused on web development, database management, and web technologies. Completed the program with First Class Honors.                    </p>
                  </div>
                </div>

                {/* Empty Right Spacer */}
                <div className="md:w-5/12"></div>
              </div>

              {/* Backend Developer (Right Side) */}
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                {/* Empty Left Spacer */}
                <div className="md:w-5/12"></div>

                {/* Marker */}
                <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
                </div>

                {/* Content */}
                <div className="md:w-5/12 text-center md:text-left md:pl-6 lg:pl-10 mt-4 md:mt-0">
                  <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/40 rounded-2xl backdrop-blur-sm  hover:shadow-lg hover:shadow-blue-400/30 transition">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-2">
                      Backend Developer
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">

                    </p>
                    <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-base">
                      Designing and maintaining APIs, managing databases, and
                      implementing server-side logic using Node.js and MongoDB.
                    </p>
                  </div>
                </div>
              </div>

              {/* Frontend Developer (Left Side) */}
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                {/* Marker */}
                <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                </div>

                {/* Content */}
                <div className="md:w-5/12 text-center md:text-right md:pr-6 lg:pr-10 mt-4 md:mt-0">
                  <div className="p-4 sm:p-6 bg-slate-800/40 border border-slate-700/40 rounded-2xl backdrop-blur-sm  hover:shadow-lg hover:shadow-blue-400/30 transition">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                    </p>
                    <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-base">
                      Building responsive and interactive web interfaces using React,
                      Tailwind CSS, and integrating with backend APIs.
                    </p>
                  </div>
                </div>

                {/* Empty Right Spacer */}
                <div className="md:w-5/12"></div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div  className="mt-16 md:mt-32 text-center">
            <h3 className="text-2xl  sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 md:mb-8">
              Certification
            </h3>
            <a href="https://www.linkedin.com/posts/foram-paneliya-114267305_certificate-activity-7298290568831401991-nBud?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3QfeABA-PSHpWU8_CNjnM2pT4wtT-QZ3s">
            <div className="p-6 sm:p-8 bg-slate-800/40 border border-slate-700/40 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/30 transition max-w-2xl mx-auto">
              <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4">
                Certified TECHWAR
              </h4>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                Designing with HTML & CSS — TechWar
                Demonstrated skills in creating responsive and visually appealing web layouts using HTML5 and CSS3. Gained experience in mobile-first design, CSS grid & flexbox, and styling best practices.              </p>
            </div>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-24 h-0.5 sm:w-32 sm:h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-24 h-0.5 sm:w-32 sm:h-0.5 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-100 animate-slide-up">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Explore my latest work showcasing cutting-edge technology and innovative solutions
              </p>
            </div>

            {/* Projects Container */}
            <div className="space-y-20 md:space-y-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative animate-slide-up mb-8 md:mb-15`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Project Row */}
                  <div className={`grid lg:grid-cols-2 gap-12 md:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                    {/* Project Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                        {/* Main image container */}
                        <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-slate-700/30 group-hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl transition-transform duration-700"
                          />

                          {/* Image overlay */}
                          <div className="absolute inset-2 md:inset-4 rounded-xl bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          {/* Floating action buttons */}
                          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <a
                              href={project.github}
                              className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 group/btn"
                            >
                              <Github className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover/btn:text-blue-400 transition-colors" />
                            </a>
                            <a
                              href={project.demo}
                              className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-600/50 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300 group/btn"
                            >
                              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover/btn:text-emerald-400 transition-colors" />
                            </a>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute -z-10 ${index % 2 === 0 ? '-bottom-4 -left-4 md:-bottom-6 md:-left-6' : '-top-4 -right-4 md:-top-6 md:-right-6'} w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-slate-700/20 rounded-full animate-spin-slow`}></div>
                        <div className={`absolute -z-10 ${index % 2 === 0 ? '-top-2 -right-2 md:-top-4 md:-right-4' : '-bottom-2 -left-2 md:-bottom-4 md:-left-4'} w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-slate-700/20 rotate-45 animate-float`}></div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      {/* Project number */}
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                          0{index + 1}
                        </div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400/50 to-emerald-400/50 rounded-full"></div>
                      </div>

                      {/* Project title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-500">
                        {project.title}
                      </h3>

                      {/* Project description */}
                      <div className="space-y-3 md:space-y-4">
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {project.description}
                        </p>

                        {/* Additional features list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
                          {['Responsive Design', 'Modern Architecture', 'Performance Optimized', 'Scalable Solution'].map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-xs md:text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3 md:space-y-4">
                        <h4 className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm text-slate-300 rounded-lg text-xs md:text-sm border border-slate-600/30 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in"
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
                    <div className="absolute -bottom-10 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-px h-10 md:h-16 bg-gradient-to-b from-slate-600/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 relative bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-100 animate-slide-up">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">With Me</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I’m open to opportunities and collaborations. Reach out via GitHub, LinkedIn, or Email, and let's build something great together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 mb-8 md:mb-12">
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
                className={`flex flex-col items-center p-4 md:p-10 md:px-[60px] backdrop-blur-sm hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/30  rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-${item.color}/20 mb-3 md:mb-4`}>
                  {item.icon === "github" && <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-100" />}
                  {item.icon === "linkedin" && <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-slate-100" />}
                  {item.icon === "mail" && <Mail className="w-5 h-5 md:w-6 md:h-6 text-slate-100" />}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-blue-300 mb-1">{item.title}</h3>
              </a>
            ))}
          </div>

          <a
            href="mailto:forampaneliya1204@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-blue-400 to-emerald-500 hover:from-blue-500 hover:to-emerald-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce-in"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
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
          border-right: 2px solid #60a5fa;
          white-space: nowrap;
          animation: typing 3s steps(60, end) forwards;
          animation-delay: 0.5s;
          width: 0;
        }
        .animate-typing-container::after {
          content: '';
          border-right: 2px solid #60a5fa;
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