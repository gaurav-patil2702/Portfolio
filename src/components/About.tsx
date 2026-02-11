import { Code2, Brain, Rocket, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Completed <span className="text-teal-400 font-semibold">Diploma in Computer Engineering</span> with expertise in software development and application building. Proficient in Java, JavaScript, Python, C++, HTML, CSS, and PHP.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Strong foundation in <span className="text-teal-400 font-semibold">artificial intelligence and machine learning</span> with proven ability to build AI-based projects. Skilled in coding, algorithms, and creating efficient, scalable software systems for complex problem-solving.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-slate-800 border border-teal-400/30 rounded-full text-teal-400 text-sm">
                  English
                </span>
                <span className="px-4 py-2 bg-slate-800 border border-teal-400/30 rounded-full text-teal-400 text-sm">
                  Hindi
                </span>
                <span className="px-4 py-2 bg-slate-800 border border-teal-400/30 rounded-full text-teal-400 text-sm">
                  Marathi
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
                <Code2 className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Software Development</h3>
                <p className="text-gray-400 text-sm">Full-stack expertise</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI & ML</h3>
                <p className="text-gray-400 text-sm">Cutting-edge solutions</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
                <Rocket className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Systems</h3>
                <p className="text-gray-400 text-sm">Efficient architecture</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Multilingual</h3>
                <p className="text-gray-400 text-sm">Global communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
