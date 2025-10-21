export default function Home() {
  const skills = {
    'Power & Energy': ['Power System Transients', 'Grid Integration', 'Renewable Energy', 'Protection & Surge Analysis'],
    'Power Electronics': ['Rectifiers & Inverters', 'DC-DC Converters', 'PWM Control', 'DSP Motor Control'],
    'Simulation Tools': ['MATLAB/Simulink', 'EMTP', 'PSCAD', 'PowerWorld', 'LTspice'],
    'Programming': ['Python', 'C/C++', 'Machine Learning', 'Digital Twin Modeling'],
  };

  const projects = [
    {
      title: 'Hybrid Solar–Wind Energy System for Grid Optimization',
      description: 'Developed hybrid renewable energy model integrating 28.8 kW solar PV array with Perturb & Observe MPPT and 3.6 kW PMSG wind turbine. Maintained DC-bus voltage at 700±20V with ±3% power accuracy.',
      tags: ['MATLAB/Simulink', 'MPPT', 'Grid Integration', 'Simscape'],
      period: 'Jan 2025 – May 2025',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '500 kV PV-Integrated Lightning Surge Study',
      description: 'Performed high-voltage transient analysis on transmission grid with WECC_PVP_1 inverter. Reduced peak overvoltage from 6 MV to <800 kV, improving insulation margin by 20%.',
      tags: ['EMTP', 'ATPDraw', 'Protection', 'High Voltage'],
      period: 'Aug 2024 – Dec 2024',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Converter System Analysis',
      description: 'Analyzed four-converter DC-bus system using Conversion Function Theory (CFT). Reduced computation time by >85% while maintaining identical transient response and voltage ripple ≈1%.',
      tags: ['MATLAB', 'Control Systems', 'CFT', 'Simulink'],
      period: 'Jan 2024 – May 2024',
      icon: '🔧',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'UPS: PFC Rectifier + Bidirectional DC–DC Converter',
      description: 'Designed front-end converter for uninterruptible power supply with PFC rectifier and bidirectional buck/boost converter. Verified efficiency and voltage regulation.',
      tags: ['LTspice', 'Power Electronics', 'MATLAB'],
      period: 'Aug 2023 – Dec 2023',
      icon: '🔋',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Solar Twin – AI Digital Twin Model',
      description: 'Built ML-based forecasting and anomaly-detection models for solar plants using TensorFlow and XGBoost. Implemented predictive analytics for performance optimization.',
      tags: ['Python', 'TensorFlow', 'XGBoost', 'ML'],
      period: '2023',
      icon: '🤖',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Solar-Based Floor Cleaning Machine',
      description: 'Designed semi-automatic solar-powered cleaning robot with Bluetooth wireless control, ultrasonic obstacle detection, and multi-motor drive system.',
      tags: ['Arduino', 'ATmega328', 'IoT', 'Robotics'],
      period: '2022',
      icon: '🤖',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Closed-Loop Control for BLDC Motors',
      description: 'Implemented PWM generation, ADC sampling, and PI speed control using TI Delfino DSP (F28379D) in Code Composer Studio for brushed and BLDC motors.',
      tags: ['DSP', 'Code Composer', 'Motor Control'],
      period: '2022',
      icon: '⚙️',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Human-Following Robot',
      description: 'Developed IR and ultrasonic sensor-based autonomous motion control system using Arduino. Implemented real-time object tracking and following algorithms.',
      tags: ['Arduino', 'Sensors', 'Robotics'],
      period: '2021',
      icon: '🤖',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-900/20 via-fuchsia-900/20 to-orange-900/20 animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]"></div>

      {/* Floating shapes */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-32 pt-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-8xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent mb-6 tracking-tight animate-in">
              Christen George
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Electrical Engineer
            </p>
            <div className="flex items-center gap-3 text-xl text-violet-300">
              <span className="px-4 py-2 bg-violet-500/20 rounded-full border border-violet-500/30">
                🎓 M.S. Electrical Engineering
              </span>
              <span className="px-4 py-2 bg-fuchsia-500/20 rounded-full border border-fuchsia-500/30">
                📍 Texas A&M University
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Specializing in <span className="text-orange-400 font-semibold">Power Systems</span>,
            <span className="text-violet-400 font-semibold"> Renewable Energy</span>, and
            <span className="text-fuchsia-400 font-semibold"> Power Electronics</span>.
            Passionate about developing innovative and sustainable energy solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/christen-george"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-white shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all duration-300 hover:scale-110"
            >
              <span className="relative z-10">LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition"></div>
            </a>
            <a
              href="mailto:christengeorge@tamu.edu"
              className="group relative px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-orange-600 rounded-2xl font-bold text-white shadow-2xl shadow-fuchsia-500/50 hover:shadow-fuchsia-500/70 transition-all duration-300 hover:scale-110"
            >
              <span className="relative z-10">Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-orange-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition"></div>
            </a>
            <a
              href="tel:+19795758579"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl font-bold text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-110"
            >
              <span className="relative z-10">Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition"></div>
            </a>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-32">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid gap-8">
            {/* Masters */}
            <div className="group relative bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-3xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition"></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Master of Science in Electrical Engineering</h3>
                    <p className="text-2xl text-violet-300 mb-2">Texas A&M University</p>
                    <p className="text-gray-400 text-lg">College Station, TX</p>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-xl font-bold text-orange-400 mb-1">Expected: May 2026</p>
                    <p className="text-lg text-violet-300">GPA: 3.5/4.0</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-violet-300 mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Power System Transients', 'Power Electronic Systems', 'Rectifier & Inverter Circuits', 'Electric Power System Analysis', 'Sustainable Energy Systems', 'DSP-Based Motion Control', 'Machine Learning', 'Pattern Recognition'].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-violet-500/20 text-violet-200 rounded-full text-sm border border-violet-400/30 hover:bg-violet-500/30 transition">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelors */}
            <div className="group relative bg-gradient-to-br from-fuchsia-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 to-orange-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition"></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                    <p className="text-2xl text-fuchsia-300 mb-2">Karunya Institute of Technology and Sciences</p>
                    <p className="text-gray-400 text-lg">Coimbatore, India</p>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-xl font-bold text-orange-400 mb-1">Graduated: May 2023</p>
                    <p className="text-lg text-fuchsia-300">CGPA: 6.2/10</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fuchsia-300 mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Electrical Machines', 'Power Systems', 'Power Electronics', 'Control Systems', 'Switchgear & Protection', 'Renewable Energy Systems', 'Smart Grid Technology', 'Electric Vehicle Technology'].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-fuchsia-500/20 text-fuchsia-200 rounded-full text-sm border border-fuchsia-400/30 hover:bg-fuchsia-500/30 transition">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-32">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => {
              const gradients = [
                'from-violet-500/10 to-purple-500/10 border-violet-500/20 hover:border-violet-400/40',
                'from-fuchsia-500/10 to-pink-500/10 border-fuchsia-500/20 hover:border-fuchsia-400/40',
                'from-orange-500/10 to-amber-500/10 border-orange-500/20 hover:border-orange-400/40',
                'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/40'
              ];
              const textColors = ['text-violet-300', 'text-fuchsia-300', 'text-orange-300', 'text-cyan-300'];
              const bgColors = [
                'bg-violet-500/20 border-violet-400/30 hover:bg-violet-500/30',
                'bg-fuchsia-500/20 border-fuchsia-400/30 hover:bg-fuchsia-500/30',
                'bg-orange-500/20 border-orange-400/30 hover:bg-orange-500/30',
                'bg-cyan-500/20 border-cyan-400/30 hover:bg-cyan-500/30'
              ];
              return (
                <div
                  key={category}
                  className={`group relative bg-gradient-to-br ${gradients[idx]} backdrop-blur-xl rounded-3xl p-6 border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <h3 className={`text-2xl font-bold ${textColors[idx]} mb-4`}>{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 ${bgColors[idx]} rounded-full text-sm border transition text-gray-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition`}></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-6xl bg-gradient-to-br ${project.color} bg-clip-text`}>{project.icon}</div>
                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full text-xs font-semibold text-white border border-white/20`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="group relative bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-3xl p-8 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Engineering Intern</h3>
                <p className="text-xl text-violet-300 mb-2">Youngminds Technology Solutions</p>
                <p className="text-sm text-gray-400 mb-4">Dec 2022 – Jan 2023 • India</p>
                <p className="text-gray-300 leading-relaxed">
                  Developed wind turbine emulator model using DC motors and MATLAB/Simulink. Implemented control systems for generator performance analysis under variable wind conditions. Configured DC drive and load control hardware for accurate real-time turbine emulation.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-fuchsia-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 to-orange-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Electrical Engineering Intern</h3>
                <p className="text-xl text-fuchsia-300 mb-2">J.R. Electricals</p>
                <p className="text-sm text-gray-400 mb-4">May 2021 – Jul 2021 • India</p>
                <p className="text-gray-300 leading-relaxed">
                  Gained hands-on experience with 400/220 kV GIS substations, protection schemes, and SCADA systems. Studied IEC standards for grounding and lightning protection. Assisted in equipment inspection and documentation of HT/LT installation processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12">
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 text-sm">© 2025 Christen George. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
