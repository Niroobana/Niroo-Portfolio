import { motion } from 'motion/react';
import { Briefcase, GraduationCap} from 'lucide-react';

export function Experience() {
  const experiences = [
  {
    icon: GraduationCap,
    title: 'Lecturer – Web Technologies',
    organization: 'Uki Coding School',
    period: 'Feb 2022 – Present',
    description: [
      'Teaching MERN stack, TypeScript, Next.js, and modern frontend development',
      'Designing industry-aligned curriculam and student project frameworks',
      'Mentoring students on real-world full-stack applications and internships',
      'Conducting assessments, code reviews, and technical presentations',
    ],
    color: 'emerald',
  },
  {
    icon: GraduationCap,
    title: 'Academic Tutor',
    organization: 'BIT External Degree – University of Colombo & University of Moratuwa',
    period: 'Jan 2020 – Apr 2024 (Part-Time)',
    description: [
      'Tutored undergraduate students in programming and mathematics foundations',
      'Supported exam preparation for BIT external degree students',
      'Clarified core concepts in logic and computing theory',
      'Provided academic guidance through structured revision sessions',
    ],
    color: 'teal',
  },
  {
    icon: Briefcase,
    title: 'Instructor – Web Fundamentals',
    organization: 'American Corner Jaffna',
    period: '2022 – 2025 (Contract)',
    description: [
      'Delivered web basics programs covering HTML, CSS, CSS Frameworks,Git and GitHub',
      'Introduced students to modern web development concepts',
      'Conducted 12 Hours Session for beginners and non-IT backgrounds',
      'Focused on accessibility, practical skills, and confidence building',
    ],
    color: 'emerald',
  },
];

const achievements = [
  { number: '300+', label: 'Students Mentored' },
  { number: '10+', label: 'Academic Workshops' },
  { number: '15+', label: 'Student Projects Guided' },
  { number: '5+', label: 'Years in Teaching' },
];


  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-white/70">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                    <exp.icon size={28} className="text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-300">{exp.organization}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-white/70 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connector Line */}
              {index < experiences.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-emerald-500/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}