'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Typing animation effect with loop
  useEffect(() => {
    const fullText = 'Hello there...';
    let currentIndex = 0;
    let isDeleting = false;

    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else if (!isDeleting && currentIndex > fullText.length) {
        // Wait at full text before starting to delete
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTypedText(fullText.slice(0, currentIndex));
      } else if (isDeleting && currentIndex === 0) {
        // Reset to start typing again
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100); // Faster when deleting

    return () => clearInterval(typingInterval);
  }, []);

  const skills = {
    'Power & Energy': {
      description: 'Understanding how electricity moves and behaves across systems — from grid integration to renewable setups and surge protection.',
      tags: ['Power System Transients', 'Grid Integration', 'Renewable Energy', 'Protection & Surge Analysis']
    },
    'Power Electronics': {
      description: 'Working with converters, inverters, and control methods that keep systems stable and efficient.',
      tags: ['Rectifiers & Inverters', 'DC-DC Converters', 'PWM Control', 'DSP Motor Control']
    },
    'Control & Automation': {
      description: 'Using microcontrollers and sensors to make systems respond in real time — from PWM control to closed-loop automation.',
      tags: ['Microcontrollers', 'Sensors', 'Real-time Control', 'Closed-loop Systems']
    },
    'Simulation & Modeling': {
      description: 'Bringing ideas to life first through tools like MATLAB, EMTP, PSCAD, and PowerWorld before building them in hardware.',
      tags: ['MATLAB/Simulink', 'EMTP', 'PSCAD', 'PowerWorld', 'LTspice']
    },
    'Programming & Data': {
      description: 'Using Python, C++, and machine learning to turn data into insight — from digital twins to automated models.',
      tags: ['Python', 'C/C++', 'Machine Learning', 'Digital Twin Modeling']
    },
    'Hardware & Testing': {
      description: 'Hands-on experience with oscilloscopes, motor drivers, and prototype setups that test how theory holds up in practice.',
      tags: ['Oscilloscopes', 'Motor Drivers', 'Prototyping', 'Testing & Validation']
    }
  };

  const projects = [
    {
      title: 'Hybrid Solar–Wind Energy System for Grid Optimization',
      description: 'I built a renewable energy model that joined a 28.8 kW solar array and a 3.6 kW wind turbine. The challenge was keeping the DC-bus stable under fast-changing conditions. After tuning the Perturb & Observe MPPT and control loops, the system held steady within ±3% — showing how hybrid energy sources can complement each other.',
      tags: ['MATLAB/Simulink', 'MPPT', 'Grid Integration', 'Simscape'],
      period: '2025',
      link: 'https://drive.google.com/file/d/1ePwNvMm6jjAcWexa1N7CgnsFl4c2M3a9/view?usp=sharing'
    },
    {
      title: '500 kV PV-Integrated Lightning Surge Study',
      description: 'I studied how lightning surges affect high-voltage lines when PV systems are tied to the grid. Using EMTP, I tested insulation behavior and reduced over-voltages from 6 MV to under 800 kV — improving safety margins by about 20%. It taught me how protection really keeps renewables reliable at scale.',
      tags: ['EMTP', 'ATPDraw', 'Protection', 'High Voltage'],
      period: '2025',
      link: 'https://drive.google.com/file/d/19GxGJfXoWSjJ3bEpLPo9bAPM3IuqZ6WU/view?usp=sharing'
    },
    {
      title: 'Multi-Converter System Analysis',
      description: 'This project started as a curiosity about converter interactions. I modeled a four-converter DC-bus and learned to simplify it using Conversion Function Theory. That change cut simulation time by 80% while keeping results accurate — a good reminder that smarter math can save real engineering time.',
      tags: ['MATLAB', 'Control Systems', 'CFT', 'Simulink'],
      period: '2024',
      link: 'https://drive.google.com/file/d/1SMuhlAnqAHMSfKUvbyEyL3dUnnMuIn_6/view?usp=sharing'
    },
    {
      title: 'UPS: PFC Rectifier + Bidirectional DC–DC Converter',
      description: 'I designed and simulated a UPS front-end with power-factor correction and bidirectional flow. Getting efficiency and voltage regulation right took plenty of trial-and-error, but it paid off — the converter responded fast and stayed stable even under load jumps.',
      tags: ['LTspice', 'Power Electronics', 'MATLAB'],
      period: '2024',
      link: 'https://drive.google.com/file/d/1K_pz5XUOLMyvaLfxoYUCfI3CtMHZN4Hi/view?usp=sharing'
    },
    {
      title: 'Solar Twin – AI Digital Twin Model',
      description: 'I wanted to predict solar-plant performance before it dropped. Using Python, TensorFlow, and XGBoost, I built a digital twin that learned from real production data and flagged losses early. It was my first mix of power systems and machine learning — and it worked.',
      tags: ['Python', 'TensorFlow', 'XGBoost', 'ML'],
      period: '2025',
      link: 'https://drive.google.com/file/d/1qAYZIOJh4SXRzgU32zsMbN7oaaw2SIWA/view?usp=sharing'
    },
    {
      title: 'Solar-Based Floor Cleaning Machine',
      description: 'A small idea: a cleaner powered by the sun. I designed a semi-automatic robot that used ultrasonic sensors and Bluetooth control. It wasn&apos;t perfect, but seeing it move under its own logic was one of those "this actually works" moments.',
      tags: ['Arduino', 'ATmega328', 'IoT', 'Robotics'],
      period: '2024',
      link: 'https://drive.google.com/file/d/17VJkauPeLaSkXAN4ORlHGKX6kzMYkcts/view?usp=sharing'
    },
    {
      title: 'Closed Loop Control for Brushed and Brushless DC Motors',
      description: 'Using a TI Delfino F28379D board, I compared open-loop and closed-loop control for DC motors. Writing and debugging the PI controller taught me more about motor behavior than any textbook — especially how theory breaks first, and then you fix it.',
      tags: ['Code Composer Studio', 'C/C++', 'Delfino C2000', 'TMS320F28379D'],
      period: '2024',
      link: 'https://drive.google.com/drive/folders/1Ic2mqRDxfGAHXJ-Iox7s6XuZWUch40e1?usp=sharing'
    },
    {
      title: 'Underground Cable Fault Detection using Arduino',
      description: 'I built a circuit that could find faults in underground cables with just an Arduino UNO and a bit of physics. After many tweaks, it could locate faults within 5 cm accuracy. A simple build that showed how precise low-cost systems can be.',
      tags: ['Arduino IDE', 'ATmega328', 'LCD', 'Embedded Systems'],
      period: '2019',
      link: 'https://drive.google.com/file/d/1Y8ooTt7QaQtcaBZewQaN2_TuIRRxgp5-/view?usp=sharing'
    },
    {
      title: 'Human-Following Robot',
      description: 'This was my first serious project — a robot that followed people using IR and ultrasonic sensors. It started as a weekend idea and ended as a working prototype that tracked movement smoothly. It&apos;s still my favorite example of how curiosity becomes engineering.',
      tags: ['Arduino', 'Sensors', 'Robotics', 'Embedded'],
      period: '2022',
      link: 'https://drive.google.com/file/d/1pPANnVEQp04vGc1LApGOMTI-qL8ttYQe/view?usp=sharing'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Navigation Bar */}
      <nav className={`md:border-b-2 transition-all duration-300 ${
        darkMode
          ? 'bg-black md:border-gray-700'
          : 'bg-white md:border-gray-900'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                darkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#education"
                className={`text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Education
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  darkMode ? 'bg-white' : 'bg-gray-900'
                }`}></span>
              </a>
              <a
                href="#skills"
                className={`text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Skills
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  darkMode ? 'bg-white' : 'bg-gray-900'
                }`}></span>
              </a>
              <a
                href="#projects"
                className={`text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Projects
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  darkMode ? 'bg-white' : 'bg-gray-900'
                }`}></span>
              </a>
              <a
                href="#experience"
                className={`text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Experience
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  darkMode ? 'bg-white' : 'bg-gray-900'
                }`}></span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#education"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Education
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Experience
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-20 right-6 z-50 p-3 rounded-lg border-2 transition-all duration-300 ${
          darkMode
            ? 'bg-black border-gray-700 text-yellow-400 hover:bg-gray-900'
            : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50'
        } shadow-[4px_4px_0px_0px_rgba(0,0,0,${darkMode ? '0.3' : '1'})] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,${darkMode ? '0.4' : '1'})] hover:-translate-y-1`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header id="home" className="mb-24 pt-8">
          {/* 3D Hi Section with Typing Animation */}
          <div className="mb-8">
            <h2 className={`text-5xl font-bold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {typedText}
              <span className={`inline-block w-1 h-12 ml-1 animate-pulse ${darkMode ? 'bg-gray-400' : 'bg-gray-600'}`}></span>
            </h2>
          </div>

          <h1 className={`text-7xl font-bold mb-6 tracking-tight ${
            darkMode
              ? 'text-white'
              : 'text-gray-900'
          }`}
          style={{
            textShadow: darkMode
              ? '4px 4px 0px rgba(255,255,255,0.1)'
              : '4px 4px 0px rgba(0,0,0,0.1)'
          }}>
            Christen George
          </h1>

          <p className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Electrical Engineer
          </p>

          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            M.S. Electrical Engineering • Texas A&M University • Expected May 2026
          </p>

          <p className={`text-xl max-w-4xl leading-relaxed mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I love building things that solve real problems. Whether it&apos;s optimizing a power system, automating a process, or turning an idea into a working prototype, I enjoy figuring out how things work—and how to make them better.
            Every project I&apos;ve worked on has started with a question, a bit of curiosity, and a challenge worth solving.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/mrchristengeorge/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-medium hover:-translate-y-2 transition-all ${
                darkMode
                  ? 'bg-white text-gray-900 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.5),0_0_25px_rgba(255,255,255,0.3)]'
                  : 'bg-gray-900 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1),0_0_25px_rgba(0,0,0,0.4)]'
              }`}
            >
              LinkedIn
            </a>
            <a
              href="mailto:christengeorge@tamu.edu"
              className={`px-8 py-3 border-2 rounded-lg font-medium hover:-translate-y-2 transition-all ${
                darkMode
                  ? 'bg-black text-white border-gray-600 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.4),0_0_25px_rgba(255,255,255,0.3)]'
                  : 'bg-white text-gray-900 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1),0_0_25px_rgba(0,0,0,0.4)]'
              }`}
            >
              Email
            </a>
            <a
              href="tel:+19795758579"
              className={`px-8 py-3 border-2 rounded-lg font-medium hover:-translate-y-2 transition-all ${
                darkMode
                  ? 'bg-black text-white border-gray-600 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.4),0_0_25px_rgba(255,255,255,0.3)]'
                  : 'bg-white text-gray-900 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1),0_0_25px_rgba(0,0,0,0.4)]'
              }`}
            >
              +1 (979) 575-8579
            </a>
          </div>
        </header>

        {/* Divider */}
        <div className={`h-px mb-24 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

        {/* Education Section */}
        <section id="education" className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <svg className={`w-10 h-10 ${darkMode ? 'text-white' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Education
            </h2>
          </div>
          <div className="space-y-10">
            {/* Masters */}
            <div className={`border-2 rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 ${
              darkMode
                ? 'bg-black border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]'
                : 'bg-white border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,0.3)]'
            }`}>
              <div className="mb-4">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Master of Science in Electrical Engineering</h3>
                <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Texas A&M University, College Station, TX</p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected: May 2026 • GPA: 3.5/4.0</p>

                <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Focused on Energy and Power Systems, exploring how renewable integration, power electronics, and advanced control systems can make the grid smarter and more resilient.
                  Projects in simulation, automation, and embedded control helped me turn classroom theory into practical engineering solutions.
                </p>
              </div>
              <div className="mt-4">
                <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Power System Transients', 'Power Electronic Systems', 'Rectifier & Inverter Circuits', 'Electric Power System Analysis', 'Sustainable Energy Systems', 'DSP-Based Motion Control', 'Machine Learning', 'Pattern Recognition'].map((course) => (
                    <span key={course} className={`px-3 py-1.5 rounded-md text-sm border ${darkMode ? 'bg-black text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bachelors */}
            <div className={`border-2 rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 ${
              darkMode
                ? 'bg-black border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]'
                : 'bg-white border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,0.3)]'
            }`}>
              <div className="mb-4">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bachelor of Technology in Electrical and Electronics Engineering</h3>
                <p className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Karunya Institute of Technology and Sciences, Coimbatore, India</p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Graduated: May 2023 • CGPA: 6.2/10</p>

                <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Built a strong foundation in power systems, electronics, and control theory, leading to several prototype projects on renewable energy and smart grid applications.
                  My undergraduate work sparked a lasting interest in solving energy efficiency and automation problems through technology.
                </p>
              </div>
              <div className="mt-4">
                <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Electrical Machines', 'Power Systems', 'Power Electronics', 'Control Systems', 'Switchgear & Protection', 'Renewable Energy Systems', 'Smart Grid Technology', 'Electric Vehicle Technology'].map((course) => (
                    <span key={course} className={`px-3 py-1.5 rounded-md text-sm border ${darkMode ? 'bg-black text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={`h-px mb-24 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

        {/* Technical Skills Section */}
        <section id="skills" className="mb-24">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Expertise
          </h2>
          <p className={`text-lg mb-12 max-w-4xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I like figuring things out — how systems behave, how to make them more efficient, and how small changes can lead to big improvements. These are the tools and areas I&apos;ve learned to use by building and troubleshooting real projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, {description, tags}]) => (
              <div key={category} className={`border-2 rounded-xl p-6 transition-all duration-300 hover:-translate-y-3 ${
                darkMode
                  ? 'bg-black border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]'
                  : 'bg-white border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,0.3)]'
              }`}>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={`h-px mb-24 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                  setHoveredProject(index);
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative rounded-xl p-8 transition-all duration-300 hover:-translate-y-4 block border overflow-hidden ${
                  darkMode
                    ? 'bg-black border-gray-700 hover:border-gray-500 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.25)]'
                    : 'bg-white border-gray-200 hover:border-gray-900 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3),0_0_40px_rgba(0,0,0,0.4)]'
                }`}
                style={{ cursor: 'none' }}
              >
                {/* Custom Cursor Follower */}
                {hoveredProject === index && (
                  <div
                    className={`absolute pointer-events-none z-10 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
                      darkMode ? 'bg-white text-gray-900 shadow-lg' : 'bg-gray-900 text-white shadow-lg'
                    }`}
                    style={{
                      left: `${cursorPos.x + 15}px`,
                      top: `${cursorPos.y + 15}px`,
                      transform: 'translate(0, 0)'
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                    Click to view
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-md ${darkMode ? 'text-gray-400 bg-gray-700' : 'text-gray-500 bg-gray-100'}`}>{project.period}</span>
                  <span className={`transition-colors ${darkMode ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`}>→</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 group-hover:underline ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className={`h-px mb-24 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
          <div className="space-y-10">
            <a
              href="https://drive.google.com/file/d/1YXr2pfkK6zgzQJihle4pbP5fv4UL1T96/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`block border-2 rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 group ${
                darkMode
                  ? 'bg-black border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]'
                  : 'bg-white border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 group-hover:underline ${darkMode ? 'text-white' : 'text-gray-900'}`}>Engineering Intern</h3>
                  <p className={`text-xl mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Youngminds Technology Solutions</p>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Dec 2022 – Jan 2023 • India</p>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    I worked on building a wind turbine emulator using DC motors and MATLAB/Simulink. The challenge was making the model react like a real turbine under changing wind speeds. After tuning the control loops and drive setup, it could simulate generator behavior smoothly — a good lesson in turning theory into working hardware.
                  </p>
                </div>
                <span className={`transition-colors ${darkMode ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`}>→</span>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1sO2boOdIR0GQOETfImNEZu5GTF_KXCcg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`block border-2 rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 group ${
                darkMode
                  ? 'bg-black border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.2)]'
                  : 'bg-white border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 group-hover:underline ${darkMode ? 'text-white' : 'text-gray-900'}`}>Electrical Engineering Intern</h3>
                  <p className={`text-xl mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>J.R. Electricals</p>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>May 2021 – Jul 2021 • India</p>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    I spent the summer on-site learning how power systems work in real life — from 400/220 kV substations to protection and SCADA systems. I helped inspect installations, review grounding layouts, and document HT/LT processes. Seeing how every small detail affects safety and reliability taught me what &ldquo;precision&rdquo; means in power engineering.
                  </p>
                </div>
                <span className={`transition-colors ${darkMode ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`}>→</span>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-12 pb-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>© 2025 Christen George. All rights reserved.</p>
          {/* <p className={`text-center text-xs mt-2 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Developed by Amal T Scaria - Contact @ <a href="mailto:amaltscaria22@gmail.com" className="hover:underline">amaltscaria22@gmail.com</a>
          </p> */}
        </footer>
      </div>
    </div>
  );
}
