import { Mail, Phone, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gaurav27206@gmail.com',
      href: 'mailto:gaurav27206@gmail.com',
      color: 'teal'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9422935350',
      href: 'tel:+919422935350',
      color: 'cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gauravpatil27',
      href: 'https://linkedin.com/in/gauravpatil27',
      color: 'teal'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-8"></div>

          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Looking for talented developers for AI and Data Science roles? Let's connect and discuss how I can contribute to your organization's success.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border-2 border-${method.color}-400/30 hover:border-${method.color}-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${method.color}-500/20`}
                >
                  <Icon className={`w-10 h-10 text-${method.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                  <p className={`text-${method.color}-400 text-sm break-all group-hover:text-${method.color}-300 transition-colors`}>
                    {method.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-[2px] rounded-2xl">
            <div className="bg-slate-900 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/50">
                    <Send className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Ready to Start?</h3>
                    <p className="text-gray-400">Let's build something amazing together</p>
                  </div>
                </div>

                <a
                  href="mailto:gaurav27206@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
