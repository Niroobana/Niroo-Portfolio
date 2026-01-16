import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-emerald-950 border-t border-emerald-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/60">
            <span>Made with</span>
            <Heart size={16} className="text-emerald-400 fill-emerald-400" />
            <span>by Niroobana Rajagobal</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Niroobana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-emerald-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/niroobana-rajagobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/60 hover:text-emerald-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:niroobanar@gmail.com"
              className="p-2 text-white/60 hover:text-emerald-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-white/60 text-sm">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
