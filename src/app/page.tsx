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
      link: 'https://drive.google.com/file/d/1ePwNvMm6jjAcWexa1N7CgnsFl4c2M3a9/view?usp=sharing'
    },
    {
      title: '500 kV PV-Integrated Lightning Surge Study',
      description: 'Performed high-voltage transient analysis on transmission grid with WECC_PVP_1 inverter. Reduced peak overvoltage from 6 MV to <800 kV, improving insulation margin by 20%.',
      tags: ['EMTP', 'ATPDraw', 'Protection', 'High Voltage'],
      period: 'Aug 2024 – Dec 2024',
      link: 'https://drive.google.com/file/d/19GxGJfXoWSjJ3bEpLPo9bAPM3IuqZ6WU/view?usp=sharing'
    },
    {
      title: 'Multi-Converter System Analysis',
      description: 'Analyzed four-converter DC-bus system using Conversion Function Theory (CFT). Reduced computation time by >85% while maintaining identical transient response and voltage ripple ≈1%.',
      tags: ['MATLAB', 'Control Systems', 'CFT', 'Simulink'],
      period: 'Jan 2024 – May 2024',
      link: 'https://drive.google.com/file/d/1SMuhlAnqAHMSfKUvbyEyL3dUnnMuIn_6/view?usp=sharing'
    },
    {
      title: 'UPS: PFC Rectifier + Bidirectional DC–DC Converter',
      description: 'Designed front-end converter for uninterruptible power supply with PFC rectifier and bidirectional buck/boost converter. Verified efficiency and voltage regulation.',
      tags: ['LTspice', 'Power Electronics', 'MATLAB'],
      period: 'Aug 2023 – Dec 2023',
      link: 'https://drive.google.com/file/d/1K_pz5XUOLMyvaLfxoYUCfI3CtMHZN4Hi/view?usp=sharing'
    },
    {
      title: 'Solar Twin – AI Digital Twin Model',
      description: 'Built ML-based forecasting and anomaly-detection models for solar plants using TensorFlow and XGBoost. Implemented predictive analytics for performance optimization.',
      tags: ['Python', 'TensorFlow', 'XGBoost', 'ML'],
      period: '2023',
      link: 'https://drive.google.com/file/d/1qAYZIOJh4SXRzgU32zsMbN7oaaw2SIWA/view?usp=sharing'
    },
    {
      title: 'Solar-Based Floor Cleaning Machine',
      description: 'Designed semi-automatic solar-powered cleaning robot with Bluetooth wireless control, ultrasonic obstacle detection, and multi-motor drive system.',
      tags: ['Arduino', 'ATmega328', 'IoT', 'Robotics'],
      period: '2022',
      link: 'https://drive.google.com/file/d/17VJkauPeLaSkXAN4ORlHGKX6kzMYkcts/view?usp=sharing'
    },
    {
      title: 'Closed Loop Control for Brushed and Brushless DC Motor using TI Delfino F28379D',
      description: 'Analysed open-loop and closed-loop transfer functions of a DC motor and plotted step responses. Executed and troubleshooted closed-loop speed control on an 8-pole BLDC motor using a PI controller and Hall sensors.',
      tags: ['Code Composer Studio', 'C/C++', 'Delfino C2000', 'TMS320F28379D'],
      period: 'Oct 2024 – Dec 2024',
      link: 'https://drive.google.com/drive/folders/1Ic2mqRDxfGAHXJ-Iox7s6XuZWUch40e1?usp=sharing'
    },
    {
      title: 'Underground Cable Fault Detection using Arduino',
      description: 'Designed and implemented a microcontroller-based system to identify and locate open- and short-circuit faults in underground cables using Ohm\'s law principles. Built test setup with Arduino UNO, 16×2 LCD, and resistor network (0.01 Ω/m) to detect fault distance up to 2m. Achieved fault-location accuracy within ±5cm with integrated buzzer alarm and on-screen distance display.',
      tags: ['Arduino IDE', 'ATmega328', 'LCD', 'Embedded Systems'],
      period: 'Sept 2022 – Dec 2022',
      link: 'https://drive.google.com/file/d/1Y8ooTt7QaQtcaBZewQaN2_TuIRRxgp5-/view?usp=sharing'
    },
    {
      title: 'Human-Following Robot',
      description: 'Developed IR and ultrasonic sensor-based autonomous motion control system using Arduino. Implemented real-time object tracking and following algorithms.',
      tags: ['Arduino', 'Sensors', 'Robotics', 'Embedded'],
      period: '2021',
      link: 'https://drive.google.com/file/d/1pPANnVEQp04vGc1LApGOMTI-qL8ttYQe/view?usp=sharing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="mb-24 pt-12">
          <h1 className="text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Christen George
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            <p className="text-3xl font-semibold text-gray-700">
              Electrical Engineer
            </p>
            <div className="flex flex-wrap gap-3 text-lg text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                M.S. Electrical Engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Texas A&M University
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Expected May 2026
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-10">
            Specializing in Power Systems, Renewable Energy, and Power Electronics.
            Passionate about developing innovative and sustainable energy solutions through
            advanced modeling, simulation, and control systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/christen-george"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:christengeorge@tamu.edu"
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-medium hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              Email
            </a>
            <a
              href="tel:+19795758579"
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-medium hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              +1 (979) 575-8579
            </a>
          </div>
        </header>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-24"></div>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Education
          </h2>
          <div className="space-y-10">
            {/* Masters */}
            <div className="border-l-4 border-gray-900 pl-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Science in Electrical Engineering</h3>
                  <p className="text-xl text-gray-700 mb-1">Texas A&M University</p>
                  <p className="text-gray-600">College Station, TX</p>
                </div>
                <div className="text-left lg:text-right">
                  <p className="text-lg font-semibold text-gray-900">Expected: May 2026</p>
                  <p className="text-gray-700">GPA: 3.5/4.0</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Power System Transients', 'Power Electronic Systems', 'Rectifier & Inverter Circuits', 'Electric Power System Analysis', 'Sustainable Energy Systems', 'DSP-Based Motion Control', 'Machine Learning', 'Pattern Recognition'].map((course) => (
                    <span key={course} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bachelors */}
            <div className="border-l-4 border-gray-300 pl-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                  <p className="text-xl text-gray-700 mb-1">Karunya Institute of Technology and Sciences</p>
                  <p className="text-gray-600">Coimbatore, India</p>
                </div>
                <div className="text-left lg:text-right">
                  <p className="text-lg font-semibold text-gray-900">Graduated: May 2023</p>
                  <p className="text-gray-700">CGPA: 6.2/10</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Electrical Machines', 'Power Systems', 'Power Electronics', 'Control Systems', 'Switchgear & Protection', 'Renewable Energy Systems', 'Smart Grid Technology', 'Electric Vehicle Technology'].map((course) => (
                    <span key={course} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-24"></div>

        {/* Technical Skills Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-24"></div>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-900 transition-all duration-300 hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">{project.period}</span>
                  <span className="text-gray-400 group-hover:text-gray-900 transition-colors">→</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-900 text-white rounded-md text-xs font-medium"
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
        <div className="h-px bg-gray-200 mb-24"></div>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Experience
          </h2>
          <div className="space-y-10">
            <a
              href="https://drive.google.com/file/d/1YXr2pfkK6zgzQJihle4pbP5fv4UL1T96/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-l-4 border-gray-900 pl-8 hover:bg-gray-50 transition-all py-4 -ml-1 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:underline">Engineering Intern</h3>
                  <p className="text-xl text-gray-700 mb-1">Youngminds Technology Solutions</p>
                  <p className="text-sm text-gray-500 mb-4">Dec 2022 – Jan 2023 • India</p>
                  <p className="text-gray-600 leading-relaxed">
                    Developed wind turbine emulator model using DC motors and MATLAB/Simulink. Implemented control systems for generator performance analysis under variable wind conditions. Configured DC drive and load control hardware for accurate real-time turbine emulation.
                  </p>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors">→</span>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1sO2boOdIR0GQOETfImNEZu5GTF_KXCcg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-l-4 border-gray-300 pl-8 hover:bg-gray-50 transition-all py-4 -ml-1 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:underline">Electrical Engineering Intern</h3>
                  <p className="text-xl text-gray-700 mb-1">J.R. Electricals</p>
                  <p className="text-sm text-gray-500 mb-4">May 2021 – Jul 2021 • India</p>
                  <p className="text-gray-600 leading-relaxed">
                    Gained hands-on experience with 400/220 kV GIS substations, protection schemes, and SCADA systems. Studied IEC standards for grounding and lightning protection. Assisted in equipment inspection and documentation of HT/LT installation processes.
                  </p>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors">→</span>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">© 2025 Christen George. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
