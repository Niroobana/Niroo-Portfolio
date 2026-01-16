import { motion } from 'motion/react';
import { BookOpen, Users} from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Educator',
      description: 'Teaching web technologies to aspiring developers',
    },
    {
      icon: Users,
      title: 'Mentor',
      description: 'Guiding students through their coding journey',
    },
    // {
    //   icon: Lightbulb,
    //   title: 'Innovator',
    //   description: 'Creating engaging learning experiences',
    // },
    // {
    //   icon: Heart,
    //   title: 'Passionate',
    //   description: 'Dedicated to empowering future tech leaders',
    // },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              As a dedicated lecturer and mentor in web technologies, I'm passionate about 
              empowering the next generation of developers through hands-on learning and 
              engaging educational experiences.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              I specialize in the MERN stack, Next.js, TypeScript and Tailwind CSS,
              bridging the gap between academic learning and real-world application.
            </p>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <item.icon size={32} className="text-emerald-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}