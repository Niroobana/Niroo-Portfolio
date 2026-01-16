import { motion } from 'motion/react';
import { Check, Code2, Heart } from 'lucide-react';

export function Skills() {
  const technicalSkills = [
    {
      category: 'Core Technologies',
      skills: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js','php','python'],
    },
    {
      category: 'Frameworks & Tools',
      skills: ['Next.js', 'Tailwind CSS', 'Git & GitHub', 'REST APIs', 'GraphQL', 'Redux','Laravel'],
    },
    {
      category: 'Specialized Skills',
      skills: ['Responsive Design', 'API Development', 'Database Design', 'UI/UX Principles', 'Testing (Jest)'],
    },
  ];

  const softSkills = [
    {
      category: 'Teaching & Communication',
      skills: ['Curriculum Design', 'Student Mentoring', 'Workshop Facilitation', 'Technical Writing', 'Public Speaking'],
    },
    {
      category: 'Leadership & Collaboration',
      skills: ['Team Leadership', 'Code Review', 'Project Management', 'Problem Solving', 'Adaptability'],
    },
    {
      category: 'Professional Skills',
      skills: ['Time Management', 'Active Listening', 'Empathy', 'Continuous Learning'],
    },
  ];

  // const additionalTech = [
  //   'Webpack', 'Docker', 'Figma', 'VS Code', 
  //   'Prisma', 'PostgreSQL', 'Socket.io', 'Motion/Framer Motion'
  // ];

  return (
    <section
      id="skills"
      className="min-h-screen py-12 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-emerald-950 to-emerald-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code2 size={32} className="text-emerald-400" />
            <h3 className="text-3xl font-semibold text-white">Technical Skills</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-emerald-300 mb-4">
                  {category.category}
                </h4>
                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center gap-2.5 text-white group"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 group-hover:border-emerald-500 transition-all duration-300">
                        <Check size={12} className="text-emerald-400" />
                      </div>
                      <span className="text-sm group-hover:text-emerald-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart size={32} className="text-emerald-400" />
            <h3 className="text-3xl font-semibold text-white">Soft Skills</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-teal-300 mb-4">
                  {category.category}
                </h4>
                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center gap-2.5 text-white group"
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/30 group-hover:border-teal-500 transition-all duration-300">
                        <Check size={12} className="text-teal-400" />
                      </div>
                      <span className="text-sm group-hover:text-teal-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Tech Tags */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-white/60 mb-6 text-lg">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
