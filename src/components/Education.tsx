import { GraduationCap, CheckCircle, Clock } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'CSMSS College of Polytechnic',
      location: 'Chh.Sambhajinagar',
      status: 'Completed',
      icon: CheckCircle,
      year: '2023'
    },
    {
      degree: 'Bachelor of Technology (B.E)',
      institution: 'Pune University',
      location: 'Artificial Intelligence and Data Science',
      status: 'Pursuing',
      icon: Clock,
      year: 'Present'
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-16"></div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-400"></div>

            {education.map((edu, index) => {
              const StatusIcon = edu.icon;
              return (
                <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className="flex-1">
                      <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${edu.status === 'Completed' ? 'border-teal-400/50' : 'border-cyan-400/50'} hover:scale-105 transition-all duration-300 shadow-xl ${edu.status === 'Completed' ? 'hover:shadow-teal-500/20' : 'hover:shadow-cyan-500/20'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <GraduationCap className={`w-10 h-10 ${edu.status === 'Completed' ? 'text-teal-400' : 'text-cyan-400'}`} />
                          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 ${edu.status === 'Completed' ? 'bg-teal-400/20 text-teal-400' : 'bg-cyan-400/20 text-cyan-400'}`}>
                            <StatusIcon className="w-4 h-4" />
                            {edu.status}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                        <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                        <p className={`${edu.status === 'Completed' ? 'text-teal-400' : 'text-cyan-400'} font-medium`}>{edu.location}</p>
                      </div>
                    </div>

                    <div className={`w-16 h-16 rounded-full ${edu.status === 'Completed' ? 'bg-teal-400' : 'bg-cyan-400'} flex items-center justify-center text-slate-900 font-bold text-lg shadow-2xl ${edu.status === 'Completed' ? 'shadow-teal-500/50' : 'shadow-cyan-500/50'} z-10 flex-shrink-0`}>
                      {index + 1}
                    </div>

                    <div className="flex-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
