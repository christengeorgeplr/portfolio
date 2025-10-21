export default function Home() {
  const skills = {
    'Power & Energy': ['Power System Transients', 'Grid Integration', 'Renewable Energy', 'Protection & Surge Analysis'],
    'Power Electronics': ['Rectifiers & Inverters', 'DC-DC Converters', 'PWM Control', 'DSP Motor Control'],
    'Simulation Tools': ['MATLAB/Simulink', 'EMTP', 'PSCAD', 'PowerWorld', 'LTspice'],
    'Programming': ['Python', 'C/C++', 'Machine Learning', 'Digital Twin Modeling'],
  };

  const projects = [
    {
      title: 'Hybrid Solar–Wind Energy System',
      description: 'Developed hybrid renewable energy model integrating 28.8 kW solar PV and 3.6 kW wind turbine for stable grid operation with MPPT control.',
      tags: ['MATLAB/Simulink', 'MPPT', 'Grid Integration'],
      period: 'Jan 2025 – May 2025'
    },
    {
      title: '500 kV Lightning Surge Study',
      description: 'Performed high-voltage transient analysis on PV-integrated transmission grid, optimizing surge arrester placement to improve insulation margin by 20%.',
      tags: ['EMTP', 'ATPDraw', 'Protection'],
      period: 'Aug 2024 – Dec 2024'
    },
    {
      title: 'Multi-Converter System Analysis',
      description: 'Analyzed four-converter DC-bus system using Conversion Function Theory, reducing computation time by 85% while maintaining accuracy.',
      tags: ['MATLAB', 'Control Systems', 'CFT'],
      period: 'Jan 2024 – May 2024'
    },
    {
      title: 'UPS: PFC Rectifier + DC–DC Converter',
      description: 'Designed front-end converter for uninterruptible power supply with bidirectional buck/boost converter and efficiency optimization.',
      tags: ['LTspice', 'Power Electronics'],
      period: 'Aug 2023 – Dec 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Animated background overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="text-center mb-24">
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Christen George
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition"></div>
            </div>
          </div>
          <p className="text-3xl text-blue-300 mb-4 font-semibold">
            Electrical Engineer
          </p>
          <p className="text-xl text-indigo-200 mb-6">
            M.S. in Electrical Engineering • Texas A&M University
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specializing in Power Systems, Renewable Energy, and Power Electronics.
            Passionate about developing innovative and sustainable energy solutions through advanced modeling,
            simulation, and control systems.
          </p>
          <div className="flex justify-center gap-4 mt-8 text-sm text-gray-400">
            <span>📍 College Station, TX</span>
            <span>•</span>
            <span>🎓 Expected Graduation: May 2026</span>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {/* Masters */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Master of Science in Electrical Engineering</h3>
                  <p className="text-xl text-blue-300 mb-2">Texas A&M University</p>
                  <p className="text-gray-400">College Station, TX</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="text-lg font-semibold text-purple-300">Expected: May 2026</p>
                  <p className="text-blue-200">GPA: 3.5/4.0</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-blue-300 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Power System Transients', 'Power Electronic Systems', 'Rectifier & Inverter Circuits', 'Electric Power System Analysis', 'Sustainable Energy Systems', 'DSP-Based Motion Control', 'Machine Learning', 'Pattern Recognition'].map((course) => (
                    <span key={course} className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bachelors */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                  <p className="text-xl text-blue-300 mb-2">Karunya Institute of Technology and Sciences</p>
                  <p className="text-gray-400">Coimbatore, India</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="text-lg font-semibold text-purple-300">Graduated: May 2023</p>
                  <p className="text-blue-200">CGPA: 6.2/10</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-blue-300 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Electrical Machines', 'Power Systems', 'Power Electronics', 'Control Systems', 'Switchgear & Protection', 'Renewable Energy Systems', 'Smart Grid Technology', 'Electric Vehicle Technology'].map((course) => (
                    <span key={course} className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold text-blue-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-3 py-1.5 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-sm text-blue-300 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Engineering Intern</h3>
              <p className="text-blue-300 mb-2">Youngminds Technology Solutions • India</p>
              <p className="text-sm text-gray-400 mb-4">Dec 2022 – Jan 2023</p>
              <p className="text-gray-300">
                Developed wind turbine emulator model using DC motors and MATLAB/Simulink.
                Implemented control systems for generator performance analysis under variable wind conditions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Electrical Engineering Intern</h3>
              <p className="text-blue-300 mb-2">J.R. Electricals • India</p>
              <p className="text-sm text-gray-400 mb-4">May 2021 – Jul 2021</p>
              <p className="text-gray-300">
                Gained hands-on experience with 400/220 kV GIS substations, protection schemes,
                and SCADA systems. Studied IEC standards for grounding and lightning protection.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/christen-george"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-blue-500/30"
            >
              LinkedIn
            </a>
            <a
              href="mailto:christengeorge@tamu.edu"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-purple-500/30"
            >
              Email Me
            </a>
            <a
              href="tel:+19795758579"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-indigo-500/30"
            >
              Call
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
