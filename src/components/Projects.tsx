import { motion } from "motion/react";
import { Users, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "MERN Stack Final Project Framework",
      audience: "Beginner to Intermediate Students",
      role: "Instructor & Code Reviewer",
      outcome:
        "Students built full-stack applications with authentication, role-based access control, and REST APIs.",
      image:
        "https://images.unsplash.com/photo-1637937459053-c788742455be?auto=format&fit=crop&w=1080&q=80",
      focus: ["MERN", "JWT Auth", "RBAC", "MVC Architecture"],
    },
    {
      title: "JavaScript Logic & Problem-Solving Program",
      audience: "Beginner to Intermediate Students",
      role: "Instructor & Assessment Designer",
      outcome:
        "Improved logical thinking through structured exercises covering loops, conditions, arrays, and DOM events.",
      image:
        "https://images.unsplash.com/photo-1762448884906-e27b998e340a?auto=format&fit=crop&w=1080&q=80",
      focus: ["JavaScript", "Logic Building", "Assessments"],
    },
    {
      title: "React to Next.js Transition Project",
      audience: "Beginner to Intermediate Students",
      role: "Instructor & Code Reviewer",
      outcome:
        "Students learned SSR, routing, and project structuring using Next.js with TypeScript.",
      image:
        "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80",
      focus: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Student Startup Capstone Guidance",
      audience: "Beginner to Intermediate Students",
      role: "Instructor & Code Reviewer",
      outcome:
        "Guided students through ideation, validation, MVP development, and interview preparation.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&w=1080&q=80",
      focus: ["Startup Ideation", "MVP", "Presentation Skills"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Academic & Teaching Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-white/60 mt-6 max-w-3xl mx-auto">
            Structured projects designed to bridge academic learning and
            real-world software development through mentorship and hands-on
            practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 border border-emerald-500/20 rounded-xl overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="text-white/70 text-sm flex items-center gap-2">
                  <Users size={16} /> {project.audience}
                </div>

                <div className="text-white/70 text-sm flex items-center gap-2">
                  <GraduationCap size={16} /> {project.role}
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.outcome}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.focus.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
