import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImg from '../assets/img.jpg';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-300 text-lg"
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Niroobana<br />Sinthurjan
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-emerald-200"
            >
              Lecturer & Mentor in Web Technologies
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 max-w-xl"
            >
              Passionate about teaching and mentoring aspiring developers. Specializing in MERN stack, 
              Next.js, TypeScript, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
              >
                Get in Touch
              </button>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border-2 border-emerald-500 text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/Niroobana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-emerald-500/20 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/niroobana-rajagobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-emerald-500/20 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:niroobanar@gmail.com"
                className="p-3 bg-white/10 hover:bg-emerald-500/20 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-2xl opacity-20"
              ></motion.div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl">
                <ImageWithFallback
                  src={profileImg}
                  alt="Niroobana Sinthurjan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-emerald-300" />
      </motion.div>
    </section>
  );
}