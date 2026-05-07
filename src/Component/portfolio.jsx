import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Github, Linkedin, Mail, ExternalLink,
  Terminal, X, Minimize2, Maximize2, Folder, FileText
} from 'lucide-react';
import { Instagram } from 'react-feather';

export default function Portfolio() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [commandHistory, setCommandHistory] = useState([]);
  const contentRef = useRef(null);

  /* ─── Boot messages ─────────────────────────────────────────── */
  useEffect(() => {
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

  /* ─── Custom cursor (desktop only) ─────────────────────────── */
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const ring  = document.getElementById('cursor-ring');
    const dot   = document.getElementById('cursor-dot');
    const cross = document.getElementById('cursor-cross');
    if (!ring || !dot || !cross) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left   = mouseX + 'px';
      dot.style.top    = mouseY + 'px';
      cross.style.left = mouseX + 'px';
      cross.style.top  = mouseY + 'px';
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.width       = '48px';
      ring.style.height      = '48px';
      ring.style.borderColor = 'rgba(134,239,172,1)';
      ring.style.background  = 'rgba(34,197,94,0.08)';
      dot.style.transform    = 'translate(-50%,-50%) scale(2)';
    };

    const onLeave = () => {
      ring.style.width       = '28px';
      ring.style.height      = '28px';
      ring.style.borderColor = 'rgba(34,197,94,0.75)';
      ring.style.background  = 'transparent';
      dot.style.transform    = 'translate(-50%,-50%) scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    animate();

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  /* ─── Active section tracker ────────────────────────────────── */
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && container.scrollTop >= el.offsetTop - container.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─── Scroll to section ─────────────────────────────────────── */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && contentRef.current) {
      const container = contentRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({ top: elementTop - 60, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  /* ─── Data ───────────────────────────────────────────────────── */
  const projects = [
    {
      title: 'Pathsy Logistics Solutions',
      description:
        'A modern, responsive web interface designed for a logistics and supply chain management company. Built with React.js and Tailwind CSS.',
      tech: ['React.js', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/vidhisavaliya-1710/PATHSY-LOGISTICS-SOLUTIONS.git',
      demo: 'https://pathsy-logistics-solutions.vercel.app/',
    },
    {
      title: 'The Black Turn',
      description:
        'A full-stack music platform built with the MERN stack providing a sleek and interactive experience for music enthusiasts.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      github: 'https://github.com/mitulbhimani07/TheBlack_Turn.git',
      demo: 'http://theblackturn.in/',
    },
    {
      title: 'Escrow — Technology Platform',
      description:
        'A modern fintech/escrow technology platform featuring a clean single-page React architecture with seamless hash routing, fully responsive layouts, and a polished professional UI.',
      tech: ['React.js', 'Tailwind CSS', 'React Router', 'SPA', 'Fintech'],
      github: null,
      demo: 'https://escrow-ind.com/#/technology',
    },
  ];

  const experiences = [
    {
      title: 'Backend Developer',
      command: '$ backend --experience',
      description: 'Designing and maintaining APIs, managing databases, and implementing server-side logic',
      skills: ['Node.js', 'MongoDB', 'REST APIs', 'Authentication'],
      side: 'right',
    },
    {
      title: 'Frontend Developer',
      command: '$ frontend --experience',
      description: 'Building responsive and interactive web interfaces with modern frameworks',
      skills: ['React.js', 'Tailwind CSS', 'State Management', 'UI/UX'],
      side: 'left',
    },
  ];

  /* ─── JSX ────────────────────────────────────────────────────── */
  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor-ring"  className="cursor-ring"  />
      <div id="cursor-dot"   className="cursor-dot"   />
      <div id="cursor-cross" className="cursor-cross" />

      <div className="h-screen w-screen bg-black flex items-center justify-center p-1 xs:p-2 md:p-4 lg:p-6">
        <div
          className={`bg-gray-950 border-2 border-green-500/50 rounded-lg shadow-2xl shadow-green-500/20
                      flex flex-col transition-all duration-300
                      ${isMaximized ? 'w-full h-full rounded-none' : 'w-full h-full md:w-[97%] md:h-[97%]'}`}
        >

          {/* ── Terminal Header ──────────────────────────────────── */}
          <div className="bg-gray-900/80 border-b-2 border-green-500/30 px-3 py-2 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                {/* Red – close */}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('closeTerminal'))}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-all flex items-center justify-center group relative"
                  title="Close Terminal"
                >
                  <X className="w-2 h-2 opacity-0 group-hover:opacity-100 text-black" />
                  <span className="tooltip -top-7">Close</span>
                </button>

                {/* Yellow – maximize */}
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all flex items-center justify-center group relative"
                  title={isMaximized ? 'Restore' : 'Maximize'}
                >
                  {isMaximized
                    ? <Minimize2 className="w-2 h-2 opacity-0 group-hover:opacity-100 text-black" />
                    : <Maximize2 className="w-2 h-2 opacity-0 group-hover:opacity-100 text-black" />}
                  <span className="tooltip -top-7">{isMaximized ? 'Restore' : 'Maximize'}</span>
                </button>

                {/* Green – active */}
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-all group relative">
                  <span className="tooltip -top-7">Active</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-2">
                <Terminal className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-green-400 font-mono font-bold text-xs truncate max-w-[160px] sm:max-w-none">
                  foram@portfolio ~ % bash
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-400/60 text-xs">
              <span className="hidden md:inline font-mono">80×24</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* ── Navigation Tabs ───────────────────────────────────── */}
          <div className="bg-gray-900/50 border-b border-green-500/20 px-2 py-1.5 overflow-x-auto flex-shrink-0 scrollbar-none">
            <div className="flex gap-1 min-w-max">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-2.5 sm:px-3 md:px-4 py-1.5 font-mono text-[11px] sm:text-xs md:text-sm
                              transition-all duration-200 rounded-t whitespace-nowrap
                              ${activeSection === section
                      ? 'bg-gray-950 text-green-400 border-t-2 border-x-2 border-green-500/50'
                      : 'text-green-400/50 hover:text-green-400 hover:bg-gray-900/50'}`}
                >
                  {section}.sh
                </button>
              ))}
            </div>
          </div>

          {/* ── Terminal Body ─────────────────────────────────────── */}
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4 sm:px-5 sm:py-5 md:px-8 md:py-7
                       font-mono text-green-400 bg-gradient-to-b from-gray-950 to-black
                       scrollbar-thin scrollbar-track-gray-950 scrollbar-thumb-green-500/40"
          >

            {/* Boot messages */}
            <div className="mb-6 text-[11px] sm:text-xs text-green-400/60 space-y-0.5">
              {commandHistory.map((cmd, i) => (
                <div key={i} className="animate-fade-in">{cmd.text}</div>
              ))}
            </div>

            {/* ════════════════════════════════════ HOME ══ */}
            <section id="home" className="min-h-[85vh] flex items-center justify-center mb-16 sm:mb-24">
              <div className="text-center w-full px-2">

                <div className="mb-5 sm:mb-7">
                  <div className="cmd-label">$ whoami</div>
                  <h1 className="text-[clamp(1.4rem,7vw,5rem)] font-bold text-green-400 tracking-widest leading-tight break-words">
                    FORAM_PANELIYA
                  </h1>
                </div>

                <div className="mb-4 sm:mb-5">
                  <div className="cmd-label">$ cat role.txt</div>
                  <div className="text-[clamp(0.9rem,3.5vw,2.2rem)] text-green-400/90 tracking-wide">
                    &gt; Full-Stack Developer
                    <span className="inline-block animate-blink ml-0.5">_</span>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-green-500/40
                                  bg-green-500/5 text-green-400/90 text-xs sm:text-sm font-mono rounded-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    1+ Year Experience
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {[
                    { icon: Github,   url: 'https://github.com/forampaneliya',                          label: 'github'   },
                    { icon: Linkedin, url: 'https://www.linkedin.com/in/foram-paneliya-114267305/',      label: 'linkedin' },
                    { icon: Mail,     url: 'mailto:forampaneliya1204@gmail.com',                         label: 'email'    },
                  ].map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 border-2 border-green-500/50 hover:border-green-400
                                 hover:bg-green-400/10 transition-all duration-300"
                      title={label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0
                                      group-hover:opacity-100 transition-opacity text-[10px] whitespace-nowrap">
                        {label}
                      </div>
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-green-500/50
                             hover:border-green-400 hover:bg-green-400/10 transition-all duration-300
                             text-xs sm:text-sm group"
                >
                  <span>$ ./explore.sh</span>
                  <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </section>

            {/* ════════════════════════════════════ ABOUT ══ */}
            <section id="about" className="mb-16 sm:mb-24 md:mb-32">
              <div className="mb-6 sm:mb-8">
                <div className="cmd-label">$ cat about.txt</div>
                <h2 className="section-title">
                  ╔══════════════════════════╗{'\n'}
                  ║{'  '}ABOUT_ME{'               '}║{'\n'}
                  ╚══════════════════════════╝
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base">
                <div className="border-l-4 border-green-500/50 pl-4 sm:pl-6 py-2">
                  <p className="text-green-400/90 leading-relaxed">
                    <span className="text-green-500">&gt;&gt;</span>{' '}
                    I'm a passionate{' '}
                    <span className="text-green-300 font-semibold">Full-Stack Developer</span>{' '}
                    with 1+ year of hands-on experience in modern web technologies. I specialize in
                    creating scalable applications using React, Node.js, and cloud technologies.
                  </p>
                </div>

                <div className="border-l-4 border-green-500/50 pl-4 sm:pl-6 py-2">
                  <p className="text-green-400/90 leading-relaxed">
                    <span className="text-green-500">&gt;&gt;</span>{' '}
                    My development journey spans frontend frameworks, backend APIs, database design,
                    and DevOps practices. I'm committed to writing clean, efficient code and staying
                    updated with the latest industry trends.
                  </p>
                </div>

                <div className="mt-6 p-4 sm:p-6 border-2 border-green-500/30 bg-gray-900/30">
                  <div className="cmd-label mb-3">$ education --list</div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-green-500 mt-0.5">►</span>
                    <div>
                      <div className="text-green-400 font-semibold">Bachelor of Computer Applications</div>
                      <div className="text-green-400/70 text-xs sm:text-sm mt-0.5">
                        BHAKTA KAVI NARSINH MEHTA UNIVERSITY | 2022 – 2024
                      </div>
                      <div className="text-green-400/55 text-xs mt-1">First Class Honors</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ════════════════════════════════════ SKILLS ══ */}
            <section id="skills" className="mb-16 sm:mb-24 md:mb-32">
              <div className="mb-6 sm:mb-8">
                <div className="cmd-label">$ ls -la skills/</div>
                <h2 className="section-title">
                  ╔══════════════════════════╗{'\n'}
                  ║{'  '}TECH_STACK{'            '}║{'\n'}
                  ╚══════════════════════════╝
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {[
                  {
                    label: './frontend/',
                    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
                  },
                  {
                    label: './backend/',
                    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
                  },
                ].map(({ label, items }) => (
                  <div
                    key={label}
                    className="border-2 border-green-500/30 p-4 sm:p-5 md:p-6 bg-gray-900/20
                               hover:border-green-500/55 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-green-400">{label}</h3>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base">
                      {items.map((skill, i) => (
                        <div key={skill} className="flex items-center gap-2 text-green-400/80">
                          <span className="text-green-500 text-xs">
                            {i === items.length - 1 ? '└──' : '├──'}
                          </span>
                          <FileText className="w-3 h-3 flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════════ PROJECTS ══ */}
            <section id="projects" className="mb-16 sm:mb-24 md:mb-32">
              <div className="mb-6 sm:mb-8">
                <div className="cmd-label">$ git log --oneline</div>
                <h2 className="section-title">
                  ╔══════════════════════════╗{'\n'}
                  ║{'  '}PROJECTS{'              '}║{'\n'}
                  ╚══════════════════════════╝
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-2 border-green-500/30 p-4 sm:p-5 md:p-6 bg-gray-900/20
                               hover:border-green-500/55 hover:bg-gray-900/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-green-400/50 text-[10px] sm:text-xs mb-1 font-mono">
                          commit {Math.random().toString(36).substring(7)}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-400
                                       group-hover:text-green-300 transition-colors pr-4 leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-green-500/50 text-xs flex-shrink-0">#{index + 1}</span>
                    </div>

                    <p className="text-green-400/80 mb-4 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:py-1 border border-green-500/40 text-green-400/80
                                     text-[10px] sm:text-xs hover:bg-green-500/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Code</span>
                        </a>
                      )}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ════════════════════════════════════ RESUME ══ */}
            <section id="resume" className="mb-16 sm:mb-24 md:mb-32 relative">
              <div className="mb-6 sm:mb-8">
                <div className="cmd-label">$ ls -la professional-journey/</div>
                <h2 className="section-title">
                  ╔══════════════════════════╗{'\n'}
                  ║{'  '}RESUME{'                '}║{'\n'}
                  ╚══════════════════════════╝
                </h2>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line – desktop only */}
                <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-green-500 via-green-400/60 to-green-500 h-full hidden md:block" />

                {/* Education */}
                <div className="flex flex-col md:flex-row items-start md:items-center mb-10 sm:mb-16 md:mb-24 gap-4 md:gap-0">
                  <div className="w-full md:w-5/12 md:pr-10 lg:pr-14">
                    <div className="terminal-card">
                      <div className="traffic-lights" />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-green-400 mb-2 font-mono">
                        $ education --current
                      </h3>
                      <div className="text-green-400/90 font-mono text-left">
                        <p className="text-sm sm:text-base font-semibold mb-1">
                          Bachelor of Computer Applications
                        </p>
                        <p className="text-green-400/65 text-xs sm:text-sm mb-3">
                          BHAKTA KAVI NARSINH MEHTA UNIVERSITY | 2022 – 2024
                        </p>
                        <ul className="text-xs sm:text-sm space-y-1.5 text-green-400/75">
                          {[
                            'Focused on web development & database management',
                            'Completed with First Class Honors',
                            'Specialized in modern web technologies',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-1.5">
                              <span className="text-green-500 flex-shrink-0">►</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-gray-950 animate-pulse" />
                    <div className="absolute w-10 h-10 border border-green-500/30 rounded-full animate-ping" />
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </div>

                {/* Experience entries */}
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-start md:items-center mb-10 sm:mb-16 md:mb-24 gap-4 md:gap-0
                                ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="w-full md:w-5/12 md:px-10 lg:px-14">
                      <div className="terminal-card group">
                        <div className="traffic-lights" />
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-green-400 mb-2 font-mono
                                       group-hover:text-green-300 transition-colors">
                          {exp.command}
                        </h3>
                        <div className="text-green-400/90 font-mono text-left">
                          <p className="text-sm sm:text-base font-semibold mb-1">{exp.title}</p>
                          <p className="text-green-400/65 text-xs sm:text-sm mb-3">Full-Stack Development</p>
                          <p className="text-xs sm:text-sm mb-4 text-green-400/75">{exp.description}</p>
                          <p className="text-green-500 text-[10px] sm:text-xs font-semibold mb-2">
                            SKILLS UTILIZED:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 bg-green-500/10 border border-green-500/30
                                           text-green-400 text-[10px] sm:text-xs rounded
                                           hover:bg-green-500/20 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-gray-950 animate-pulse" />
                      <div className="absolute w-10 h-10 border border-green-500/30 rounded-full animate-ping" />
                    </div>

                    <div className="hidden md:block md:w-5/12" />
                  </div>
                ))}
              </div>

              {/* Certificate */}
              <div className="mt-10 sm:mt-16 md:mt-24">
                <div className="mb-6 sm:mb-8">
                  <div className="cmd-label">$ ls -la certifications/</div>
                  <h2 className="section-title">
                    ╔══════════════════════════╗{'\n'}
                    ║{'  '}CERTIFICATE{'           '}║{'\n'}
                    ╚══════════════════════════╝
                  </h2>
                </div>

                <a
                  href="https://www.linkedin.com/posts/foram-paneliya-114267305_certificate-activity-7298290568831401991-nBud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group max-w-3xl"
                >
                  <div className="bg-gray-900 border-2 border-green-500/30 rounded-xl overflow-hidden
                                  hover:border-green-400 hover:shadow-xl hover:shadow-green-500/20
                                  transition-all duration-500 hover:-translate-y-0.5">
                    <div className="bg-gray-800/50 border-b border-green-500/20 px-4 sm:px-6 py-3 sm:py-4
                                    flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="traffic-lights" />
                        <span className="text-green-400 font-mono text-xs sm:text-sm">$ certificate --verify</span>
                      </div>
                      <span className="text-green-400/45 text-[10px] sm:text-xs font-mono">[CLICK TO VERIFY]</span>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                        <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-4
                                        text-center w-full sm:w-auto sm:min-w-[110px] flex-shrink-0">
                          <div className="text-3xl mb-1.5">🏆</div>
                          <div className="text-green-400 text-xs font-semibold">CERTIFIED</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2 font-mono
                                         group-hover:text-green-300 transition-colors">
                            TECHWAR Certification
                          </h3>
                          <p className="text-green-400/75 text-xs sm:text-sm leading-relaxed">
                            Designing with HTML &amp; CSS — Demonstrated expertise in creating responsive
                            and visually appealing web layouts using HTML5 and CSS3. Gained experience in
                            mobile-first design, CSS grid &amp; flexbox, and styling best practices.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <p className="text-green-500 text-xs font-semibold font-mono">$ skills_acquired --list</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                          {['Responsive Design', 'CSS Grid', 'Flexbox', 'Mobile First'].map((skill) => (
                            <div
                              key={skill}
                              className="text-center px-2 sm:px-3 py-2 bg-green-500/5 border border-green-500/20
                                         rounded hover:bg-green-500/10 transition-colors"
                            >
                              <span className="text-green-400 text-[10px] sm:text-xs">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-5 border-t border-green-500/20 flex items-center justify-between
                                      text-green-400/55 text-[10px] sm:text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="text-green-500 animate-pulse">●</span>
                          <span className="font-mono">Status: VERIFIED</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono">Issuer: TECHWAR</span>
                          <ExternalLink className="w-3 h-3 group-hover:text-green-400 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            {/* ════════════════════════════════════ CONTACT ══ */}
            <section id="contact" className="mb-16 sm:mb-20">
              <div className="mb-6 sm:mb-8">
                <div className="cmd-label">$ curl -X GET /contact</div>
                <h2 className="section-title">
                  ╔══════════════════════════╗{'\n'}
                  ║{'  '}CONTACT{'               '}║{'\n'}
                  ╚══════════════════════════╝
                </h2>
              </div>

              <div className="border-2 border-green-500/30 p-4 sm:p-6 md:p-8 bg-gray-900/20">
                <p className="text-green-400/90 mb-5 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                  <span className="text-green-500">&gt;&gt;</span>{' '}
                  I'm open to opportunities and collaborations.
                  Let's build something amazing together!
                </p>

                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base">
                  {[
                    {
                      icon: Github,
                      href: 'https://github.com/forampaneliya',
                      label: 'github.com/forampaneliya',
                    },
                    {
                      icon: Linkedin,
                      href: 'https://www.linkedin.com/in/foram-paneliya-114267305/',
                      label: 'LinkedIn Profile',
                    },
                    {
                      icon: Instagram,
                      href: 'https://instagram.com/programming_by_foram',
                      label: 'programming_by_foram',
                    },
                    {
                      icon: Mail,
                      href: 'mailto:forampaneliya1204@gmail.com',
                      label: 'forampaneliya1204@gmail.com',
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 sm:gap-3 text-green-400/80
                                 hover:text-green-400 transition-all duration-200 group"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="group-hover:translate-x-1.5 transition-transform truncate">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center py-6 sm:py-8 border-t-2 border-green-500/20 text-green-400/40 text-[10px] sm:text-xs">
              <div>$ echo "Built with React &amp; Tailwind CSS"</div>
              <div className="mt-1.5">© 2025 Foram Paneliya | All rights reserved</div>
            </div>

          </div>
          {/* ── End Terminal Body ─── */}

          {/* ── Status Bar ───────────────────────────────────────── */}
          <div className="bg-gray-900/80 border-t-2 border-green-500/30 px-3 sm:px-4 py-1.5 sm:py-2
                          flex justify-between items-center text-[10px] sm:text-xs text-green-400/60 flex-shrink-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <span>~ {activeSection}.sh</span>
              <span className="hidden sm:inline">UTF-8</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hidden sm:inline">bash</span>
              <span>Ln 1, Col 1</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Global Styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Scrollbar ────────────────── */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; }

        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-track-gray-950::-webkit-scrollbar-track { background: #030712; }
        .scrollbar-thumb-green-500\\/40::-webkit-scrollbar-thumb {
          background: rgba(34,197,94,0.4);
          border-radius: 3px;
        }
        .scrollbar-thumb-green-500\\/40::-webkit-scrollbar-thumb:hover {
          background: rgba(34,197,94,0.6);
        }

        /* ── Animations ───────────────── */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .animate-fade-in { animation: fade-in 0.45s ease-out; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }

        /* ── Utility classes ──────────── */
        .cmd-label {
          color: rgba(74,222,128,0.5);
          font-size: 11px;
          margin-bottom: 6px;
          font-family: 'Courier New', monospace;
        }
        @media (min-width: 640px) { .cmd-label { font-size: 12px; } }

        .section-title {
          font-size: clamp(13px, 2.5vw, 22px);
          font-weight: 700;
          color: #4ade80;
          margin-bottom: 0;
          white-space: pre-line;
          line-height: 1.55;
          font-family: 'Courier New', monospace;
        }

        .terminal-card {
          background: rgb(17 24 39);
          border: 2px solid rgba(34,197,94,0.28);
          border-radius: 8px;
          padding: 16px;
          transition: border-color 0.3s;
        }
        .terminal-card:hover { border-color: rgba(74,222,128,0.7); }
        @media (min-width: 640px) { .terminal-card { padding: 20px; } }
        @media (min-width: 768px) { .terminal-card { padding: 24px; } }

        .traffic-lights {
          display: flex;
          gap: 6px;
          margin-bottom: 14px;
        }
        .traffic-lights::before,
        .traffic-lights::after,
        .traffic-lights span {
          content: '';
          display: block;
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .traffic-lights::before { background: rgb(239 68 68 / 0.8); }
        .traffic-lights::after  { background: rgb(234 179 8 / 0.8); }

        /* third dot via box-shadow trick */
        .traffic-lights {
          position: relative;
        }
        .traffic-lights::after {
          box-shadow: 17px 0 0 rgba(34,197,94,0.8);
          margin-right: 17px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: 2px solid rgba(34,197,94,0.5);
          color: #4ade80;
          text-decoration: none;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          transition: all 0.2s;
        }
        @media (min-width: 640px) { .project-link { font-size: 12px; padding: 7px 16px; } }
        .project-link:hover {
          border-color: #4ade80;
          background: rgba(74,222,128,0.08);
        }

        .tooltip {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: rgb(17 24 39);
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 3px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s;
        }
        .group:hover .tooltip { opacity: 1; }

        /* ── Custom cursor ─────────────── */
        /* Only shown on desktop */
        .cursor-ring {
          position: fixed;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(34,197,94,0.75);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.18s ease, height 0.18s ease,
                      border-color 0.18s ease, background 0.18s ease;
          display: none;
        }
        .cursor-dot {
          position: fixed;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          pointer-events: none;
          z-index: 10001;
          transform: translate(-50%, -50%);
          transition: transform 0.06s ease;
          display: none;
        }
        /* Crosshair lines – unique touch */
        .cursor-cross {
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          display: none;
        }
        .cursor-cross::before,
        .cursor-cross::after {
          content: '';
          position: absolute;
          background: rgba(74,222,128,0.35);
        }
        .cursor-cross::before {
          width: 1px;
          height: 16px;
          left: 0; top: -8px;
        }
        .cursor-cross::after {
          width: 16px;
          height: 1px;
          top: 0; left: -8px;
        }

        @media (min-width: 769px) {
          * { cursor: none !important; }
          .cursor-ring,
          .cursor-dot,
          .cursor-cross { display: block; }
        }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }

        /* xs breakpoint helper (360–479px) */
        @media (min-width: 360px) {
          .xs\\:p-2 { padding: 0.5rem; }
        }
      `}</style>
    </>
  );
}