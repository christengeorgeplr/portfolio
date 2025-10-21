export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-4">
            Christen George
          </h1>
          <p className="text-2xl text-purple-300 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate about building elegant solutions to complex problems.
            Specializing in modern web technologies and creating exceptional user experiences.
          </p>
        </header>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'Git', 'PostgreSQL'].map((skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white hover:bg-white/20 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Project One</h3>
              <p className="text-gray-300 mb-4">
                A modern web application built with Next.js and TypeScript.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">TypeScript</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Project Two</h3>
              <p className="text-gray-300 mb-4">
                Full-stack application with React and Node.js backend.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded">React</span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Node.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all"
            >
              Email Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
