import { Briefcase, Code, Palette, TestTube, Calendar } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    {
      icon: Code,
      title: 'Application Development',
      description: 'Assisted in developing applications using Java and JavaScript, contributing to key project features'
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Designed user-friendly interfaces for web applications ensuring intuitive navigation'
    },
    {
      icon: TestTube,
      title: 'Quality Assurance',
      description: 'Conducted testing to identify bugs and ensure software functionality'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-16"></div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-teal-400/30 shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/50">
                  <Briefcase className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <span className="inline-block px-4 py-1 bg-teal-400/20 text-teal-400 rounded-full text-sm font-semibold mb-2">
                    INTERNSHIP
                  </span>
                  <h3 className="text-3xl font-bold text-white">Python Programming Intern</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">June 2023 - August 2023</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-teal-400 mb-2">Geo-tech Technology, Aurangabad</h4>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {responsibilities.map((resp, index) => {
                const Icon = resp.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-10 h-10 text-teal-400 mb-4" />
                    <h5 className="text-lg font-semibold text-white mb-3">{resp.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{resp.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
