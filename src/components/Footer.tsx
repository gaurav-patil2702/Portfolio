import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-teal-400/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-teal-400 fill-teal-400 animate-pulse" />
            <span>by Gaurav Patil</span>
          </div>

          <div className="text-gray-400 text-sm">
            {new Date().getFullYear()} All rights reserved
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:gaurav27206@gmail.com"
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
            >
              Email
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://linkedin.com/in/gauravpatil27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
