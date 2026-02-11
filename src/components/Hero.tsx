import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-5xl font-bold text-slate-900 shadow-2xl shadow-teal-500/50 mb-6">
                GP
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Gaurav Patil
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8 text-teal-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Lohgaon, Pune, Maharashtra</span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer & AI Specialist targeting roles in artificial intelligence and data science with organizations offering growth opportunities and cutting-edge technology challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="mailto:gaurav27206@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>

            <a
              href="https://linkedin.com/in/gauravpatil27"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-full font-semibold hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-teal-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
