import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  ExternalLink,
  Code,
  Zap,
  ArrowRight,
  Download,
  MapPin,
  Calendar,
  User,
  Briefcase,
  MessageCircle,
  Star,
  ChevronRight,
} from "react-feather";
import { FolderOpen, GraduationCap, Github, Palette } from "lucide-react";

const Loader = ({ isVisible, theme = "light" }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-5xl font-extrabold tracking-widest select-none ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          FP
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TransitionWrapper = ({ children, isTransitioning }) => {
  const variants = {
    initial: { scale: 1, opacity: 1 },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isTransitioning ? (
        <motion.div
          key="content"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [destinationSection, setDestinationSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // All sections, make sure these match your section ids exactly
  const sections = ["home", "about", "Resume", "projects", "blog", "contact"];

  // Assign themes for sections (change as you prefer)
  const sectionThemes = {
    home: "light",
    about: "light",
    Resume: "dark",
    projects: "light",
    blog: "dark",
    contact: "light",
  };

  // Hide loader after initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Update active section based on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  // Scroll smoothly between sections with zoom transition and theme-aware loader
  const scrollToSection = (id) => {
    if (isTransitioning) return; // prevent multiple triggers
    setDestinationSection(id);
    setIsTransitioning(true);
    setIsMenuOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (el.tabIndex === -1) el.focus(); // accessibility
        setActiveSection(id);
      }
    }, 600);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1300);
  };

  // Pass current theme to loader (destination page on transition, else current page)
  const loaderTheme = isTransitioning
    ? sectionThemes[destinationSection] || "light"
    : sectionThemes[activeSection] || "light";

  // ===== Sample data (unchanged from your original for brevity) =====
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern React-based shopping platform with real-time inventory management and secure payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application",
      year: "2024",
      featured: true,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive business intelligence dashboard with interactive charts and real-time data visualization",
      tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      category: "Data Visualization",
      year: "2024",
      featured: false,
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and seamless user experience",
      tech: ["React Native", "Firebase", "Plaid API"],
      category: "Mobile App",
      year: "2023",
      featured: true,
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"],
      level: 95,
    },
    {
      name: "Backend Development",
      icon: Zap,
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"],
      level: 90,
    },
    {
      name: "Design & Tools",
      icon: Palette,
      items: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Git", "Docker"],
      level: 85,
    },
  ];

  const experience = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of enterprise web applications serving 10k+ users",
      achievements: [
        "Increased application performance by 40% through code optimization",
        "Led a team of 5 developers on critical projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      company: "Digital Agency Co.",
      role: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Created responsive websites and web applications for diverse clients",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Improved client satisfaction ratings by 35%",
        "Mentored 3 junior developers",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      duration: "2017 - 2019",
      description: "Specialized in Software Engineering and Human-Computer Interaction",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      duration: "2013 - 2017",
      description: "Graduated Magna Cum Laude, Focus on Web Technologies",
    },
  ];

  const blogs = [
    {
      title: "Improving React Performance with Hooks",
      date: "July 15, 2025",
      summary:
        "Explore various techniques and best practices to optimize your React applications using Hooks effectively.",
      link: "#",
    },
    {
      title: "Building Accessible Web Components",
      date: "June 30, 2025",
      summary:
        "A comprehensive guide on creating accessible and reusable web components to enhance user experience.",
      link: "#",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      date: "May 10, 2025",
      summary:
        "Understand the strengths of CSS Grid and Flexbox, and learn to choose the best tool for your layout needs.",
      link: "#",
    },
  ];

  const disableInteraction = isLoading || isTransitioning;

  return (
    <>
      {/* Theme-aware loader: on initial load and navigation */}
      <Loader isVisible={isLoading || isTransitioning} theme={loaderTheme} />

      <div
        className={`font-sans bg-white text-black min-h-screen ${
          disableInteraction ? "pointer-events-none select-none" : ""
        }`}
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => scrollToSection("home")}
              className="cursor-pointer select-none"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && scrollToSection("home")}
              aria-label="Scroll to Home"
            >
              <span className="font-extrabold text-2xl tracking-widest border-2 border-black rounded-md px-3 py-1 ">
                FP
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4 text-sm font-semibold tracking-wider uppercase">
              {sections.map((section) => {
                const id = section;
                const label = id.charAt(0).toUpperCase() + id.slice(1);
                return (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-md transition-colors border-2 border-transparent ${
                      activeSection === id
                        ? "bg-black text-white border-black"
                        : "text-black hover:bg-black hover:text-white"
                    }`}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    {label}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md border-2 border-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-2.5" : "top-1"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-black rounded-sm top-3 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-2.5" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-black/10 bg-white shadow-lg"
              >
                <div className="flex flex-col py-4 space-y-1 text-center font-semibold tracking-wide uppercase text-sm">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`py-3 transition-colors rounded-md ${
                        activeSection === section
                          ? "bg-black text-white"
                          : "text-black hover:bg-black hover:text-white"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content with zoom transition */}
        <TransitionWrapper isTransitioning={isTransitioning}>
          <main className="pt-20 max-w-6xl mx-auto px-6">
            {/* Home Section */}
            <section
              id="home"
              tabIndex={-1}
              className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
              aria-label="Home"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-radial from-black to-transparent pointer-events-none"
              />
              <div className="z-10 max-w-3xl">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="text-6xl font-extrabold tracking-tight text-black mb-6"
                >
                 Foram Paneliya
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl font-semibold text-gray-800 mb-12"
                >
                  Full-Stack Developer {" "}
                  
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-2 font-semibold px-8 py-4 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
                  >
                    View My Work <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md border-2 border-black text-black hover:bg-gray-100 transition"
                  >
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section
              id="about"
              tabIndex={-1}
              className="min-h-screen py-20"
              aria-label="About Me"
            >
              <h2 className="text-4xl font-extrabold text-center mb-8">
                About Me
              </h2>
              <p className="max-w-3xl mx-auto text-center text-gray-900 font-medium mb-8">
                Passionate full-stack developer with over 5 years of experience
                building performant, scalable web apps and beautiful UIs.
              </p>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 text-gray-900 leading-relaxed font-light text-lg">
                  <p>
                    Specialized in creating products that solve real-world
                    problems through modern web technologies and thoughtful
                    design.
                  </p>
                  <p>
                    Comfortable working on frontend and backend leveraging React
                    ecosystem, Node.js, and cloud ecosystems.
                  </p>
                  <div className="flex items-center space-x-3 pt-4 font-semibold">
                    <MapPin size={24} /> <span>San Francisco, California</span>
                  </div>
                </div>
                <div className="aspect-square rounded-xl border border-black/10 bg-gray-100 shadow-md flex items-center justify-center text-7xl font-black text-black select-none">
                 FP
                </div>
              </div>

              {/* Skills */}
              <div className="mt-20">
                <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-wide">
                  Skills & Expertise
                </h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6 }}
                      className="bg-white border border-black/10 rounded-xl p-8 shadow-sm"
                    >
                      <div className="flex justify-center mb-6">
                        <skill.icon size={28} className="text-black" />
                      </div>
                      <h4 className="text-xl font-bold text-center mb-4">
                        {skill.name}
                      </h4>
                      <div className="relative w-full h-3 bg-black/10 rounded-full mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5 }}
                          className="absolute h-3 bg-black rounded-full"
                          aria-label={`${skill.level}% proficiency in ${skill.name}`}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center text-gray-700 font-semibold text-sm">
                        {skill.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="border border-black/10 rounded-md py-2"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resume Section */}
            <section
              id="Resume"
              tabIndex={-1}
              className="min-h-screen py-20 bg-black text-white"
              aria-label="Work Experience and Education"
            >
              <h2 className="text-4xl font-extrabold text-center mb-8">
                My Resume
              </h2>
              <p className="max-w-3xl mx-auto text-center mb-16 font-light">
                Professional Journey and Qualifications.
              </p>

              {/* Experience */}
              <div className="max-w-4xl mx-auto space-y-12 mb-20">
                {experience.map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 rounded-xl p-8 border border-white/20"
                  >
                    <div className="flex justify-between items-start flex-col md:flex-row md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-sm opacity-70">{job.company}</p>
                      </div>
                      <div className="text-sm font-mono opacity-60">
                        {job.duration}
                      </div>
                    </div>
                    <p className="mb-4 opacity-80">{job.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm opacity-70">
                      {job.achievements.map((ach, index) => (
                        <li key={index}>{ach}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <div className="max-w-4xl mx-auto space-y-8">
                <h3 className="text-3xl font-bold mb-8 uppercase tracking-widest">
                  Education
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 rounded-xl p-6 border border-white/20"
                    >
                      <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                      <p className="opacity-80 mb-1">{edu.school}</p>
                      <p className="text-sm font-mono opacity-60 mb-4">
                        {edu.duration}
                      </p>
                      <p className="text-sm opacity-70">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button className="border-2 border-white px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-white hover:text-black transition">
                    <Download size={18} className="inline mr-2" /> Download Full
                    Resume
                  </button>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              tabIndex={-1}
              className="min-h-screen py-20"
              aria-label="Projects Portfolio"
            >
              <h2 className="text-4xl font-extrabold text-center mb-8">
                Projects
              </h2>
              <p className="max-w-3xl mx-auto text-center mb-12 font-light text-gray-900">
                Showcase of selected work and creative solutions.
              </p>

              <div className="grid gap-12 max-w-5xl mx-auto lg:grid-cols-2">
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -6 }}
                    className={`bg-white rounded-xl shadow-md border border-black/10 overflow-hidden ${
                      proj.featured ? "lg:col-span-2" : ""
                    }`}
                  >
                    <div className="relative flex flex-col lg:flex-row">
                      <div
                        className={`bg-gray-200 flex items-center justify-center overflow-hidden ${
                          proj.featured ? "lg:w-1/2 h-64" : "h-48"
                        }`}
                      >
                        {/* Placeholder for project screenshot */}
                        <div className="text-black opacity-30 font-extrabold select-none text-xl">
                          Screenshot
                        </div>
                      </div>
                      <div className={`p-8 ${proj.featured ? "lg:w-1/2" : ""}`}>
                        <div className="mb-2 flex flex-wrap gap-2 text-xs font-mono text-black/70 uppercase tracking-wider font-bold">
                          <span className="bg-black/10 px-3 py-1 rounded">
                            {proj.category}
                          </span>
                          <span>{proj.year}</span>
                          {proj.featured && (
                            <span className="bg-black text-white px-3 py-1 rounded ml-auto font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                        <p className="text-gray-900 mb-4">{proj.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs rounded-full border border-black/10 px-3 py-1 bg-black/5 text-black"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-16">
                <button className="border-2 border-black rounded-md px-10 py-3 font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition">
                  View All Projects
                </button>
              </div>
            </section>

            {/* Blog Section */}
            <section
              id="blog"
              tabIndex={-1}
              className="min-h-screen py-20 bg-black text-white"
              aria-label="Blog"
            >
              <h2 className="text-4xl font-extrabold text-center mb-12">
                Latest Articles
              </h2>
              <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
                {blogs.map(({ title, date, summary, link }, i) => (
                  <motion.article
                    key={i}
                    whileHover={{ scale: 1.04, y: -6 }}
                    className="bg-white/10 p-6 rounded-xl flex flex-col justify-between cursor-pointer border border-white/20"
                    onClick={() => window.open(link, "_blank")}
                    role="article"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") window.open(link, "_blank");
                    }}
                  >
                    <header>
                      <p className="text-xs uppercase tracking-wide font-mono opacity-70 mb-2">
                        {date}
                      </p>
                      <h3 className="text-lg font-bold">{title}</h3>
                    </header>
                    <p className="mt-4 text-gray-200 flex-grow">{summary}</p>
                    <footer className="mt-6 text-sm font-semibold uppercase opacity-80 flex items-center gap-1">
                      Read More <ExternalLink size={16} />
                    </footer>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              tabIndex={-1}
              className="min-h-screen py-20 flex flex-col items-center justify-center text-center bg-white text-black"
              aria-label="Contact"
            >
              <h2 className="text-4xl font-extrabold mb-6">Let's Work Together</h2>
              <p className="max-w-3xl mb-12 font-light text-gray-900">
                Have a project in mind or just want to say hi? Reach out; I'd love
                to connect.
              </p>
              <div className="max-w-4xl w-full grid sm:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "john@example.com",
                    href: "mailto:john@example.com",
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    value: "@johndoe",
                    href: "https://github.com",
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    value: "@johndoe",
                    href: "https://linkedin.com",
                  },
                ].map(({ icon: Icon, title, value, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    className="bg-black/10 border border-black/20 rounded-xl p-6 flex flex-col items-center text-black font-semibold transition hover:bg-black hover:text-white"
                    aria-label={`${title}: ${value}`}
                  >
                    <div className="bg-white p-3 rounded-full mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg mb-2">{title}</h3>
                    <p className="text-sm">{value}</p>
                  </motion.a>
                ))}
              </div>
              <button className="border-2 border-black text-black font-semibold uppercase tracking-wide px-12 py-4 rounded-md hover:bg-black hover:text-white transition">
                Start a Conversation
              </button>
              <p className="mt-6 text-sm text-gray-600 opacity-70">
                Usually responds within 24 hours
              </p>
            </section>
          </main>
        </TransitionWrapper>

        {/* Footer */}
        <footer className="bg-black text-white py-12 mt-20 border-t border-black/20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="font-extrabold text-2xl mb-1">Foram Paneliya</h3>
            <p className="font-light max-w-2xl mx-auto mb-6">
              Full-Stack Developer & Designer creating impactful digital experiences.
            </p>
            <div className="flex justify-center gap-8 mb-6 text-white/70">
              <a
                href="https://github.com"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:john@example.com"
                aria-label="Email"
                className="hover:text-white transition"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm opacity-50 select-none">
              © {new Date().getFullYear()} Foram Paneliya. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
