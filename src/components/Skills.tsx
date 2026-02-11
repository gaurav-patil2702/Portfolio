import { Code, Layers, Wrench, TrendingUp, Database, Shield } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'C++', 'HTML', 'CSS', 'PHP'],
      color: 'teal'
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: ['React', 'Express', 'Django'],
      color: 'cyan'
    },
    {
      icon: Database,
      title: 'Development Tools',
      skills: ['Git', 'RESTful API', 'Containerization', 'Microservices'],
      color: 'teal'
    }
  ];

  const competencies = [
    {
      icon: TrendingUp,
      title: 'Agile Methodologies',
      description: 'Experienced in iterative development and sprint planning'
    },
    {
      icon: Shield,
      title: 'SDLC',
      description: 'Full software development lifecycle expertise'
    },
    {
      icon: Database,
      title: 'RESTful API',
      description: 'Design and implementation of web services'
    },
    {
      icon: Wrench,
      title: 'Debugging',
      description: 'Systematic problem identification and resolution'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${category.color}-400 to-${category.color}-500 flex items-center justify-center mb-6 shadow-lg shadow-${category.color}-500/50`}>
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 bg-slate-800 text-${category.color}-400 rounded-full text-sm border border-${category.color}-400/30 hover:border-${category.color}-400 transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Competencies</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-10 h-10 text-teal-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">{comp.title}</h4>
                  <p className="text-gray-400 text-sm">{comp.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-teal-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Soft Skills</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-teal-400 mb-1">Analytical</h4>
                <p className="text-gray-400 text-sm">Strong problem-solving abilities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 border-2 border-cyan-400 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-1">Collaborator</h4>
                <p className="text-gray-400 text-sm">Effective team player</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👑</span>
                </div>
                <h4 className="text-lg font-semibold text-teal-400 mb-1">Leader</h4>
                <p className="text-gray-400 text-sm">Initiative-driven</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 border-2 border-cyan-400 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-1">Adaptable</h4>
                <p className="text-gray-400 text-sm">Quick learner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
