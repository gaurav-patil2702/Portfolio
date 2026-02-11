import { Users, Award, Zap } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Participated in team meetings, providing valuable input on features and project progress',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Collaborated with senior developers to learn coding standards and software development excellence',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maintained and updated existing code, improving application performance and documentation',
      gradient: 'from-teal-400 to-emerald-500'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-teal-400/30">
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                Proven track record of contributing to team success, embracing industry best practices, and continuously improving code quality and application performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
