import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'niroobanar@gmail.com',
      href: 'mailto:niroobanar@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0764652817',
      href: 'tel:+94764652817',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaffna, Srilanka ',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-emerald-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-emerald-500/20">
                <p className="text-white/60 text-sm mb-4">
                  Looking forward to connecting with students, educators, and fellow developers!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-emerald-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-emerald-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-emerald-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-emerald-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-300"
                >
                  {submitMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    ></motion.div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}