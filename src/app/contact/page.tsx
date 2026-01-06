"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Download,
  Clock,
  FileText,
  BookOpen,
  Presentation,
  Sparkles
} from "lucide-react";

const downloads = [
  { 
    name: "Company Brochure", 
    description: "Learn about our services and capabilities",
    icon: FileText,
    size: "2.5 MB",
    type: "PDF"
  },
  { 
    name: "Course Catalog 2024", 
    description: "Complete list of courses and curriculum",
    icon: BookOpen,
    size: "4.2 MB",
    type: "PDF"
  },
  { 
    name: "Case Studies", 
    description: "Success stories from our 300+ clients",
    icon: Presentation,
    size: "3.8 MB",
    type: "PDF"
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 96555 19922",
    link: "tel:+919655519922",
    color: "#9b1c1c"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@faminfomedia.com",
    link: "mailto:info@faminfomedia.com",
    color: "#9b1c1c"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Message us directly",
    link: "https://wa.me/919655519922",
    color: "#1a3d2e"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9AM - 6PM",
    link: null,
    color: "#2d1f3d"
  },
];

export default function ContactPage() {
  return (
    <div className="bg-main-gradient min-h-screen pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm">Get In Touch</span>
              <Sparkles className="w-8 h-8 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#e8e8e8] font-bold mb-6">
              Contact <span className="text-gradient-primary">Us</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto">
              Ready to unleash your digital potential? Our team of 30+ experts is standing by to help you 
              achieve your business goals. Reach out through any of our channels below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#e8e8e8] mb-8">Contact Information</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="card-standard rounded-xl p-6"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${info.color}10`, border: `1px solid ${info.color}20` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <h3 className="text-[#e8e8e8] font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#888888] hover:text-[#9b1c1c] transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-[#888888] text-sm">{info.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="card-standard rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#9b1c1c]/10 flex items-center justify-center flex-shrink-0 border border-[#9b1c1c]/20">
                    <MapPin className="w-6 h-6 text-[#9b1c1c]" />
                  </div>
                  <div>
                    <h3 className="text-[#e8e8e8] font-semibold mb-2">Our Location</h3>
                    <p className="text-[#888888] text-sm leading-relaxed">
                      1st Floor, Krishna Ceramix,<br />
                      Bus Stop, opposite Maha Lakshmi Nagar,<br />
                      Goundampalayam, Tamil Nadu 641664
                    </p>
                    <a
                      href="https://maps.google.com/?q=Krishna+Ceramix+Goundampalayam+Tamil+Nadu+641664"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-[#9b1c1c] hover:text-[#b91c1c] text-sm font-medium transition-colors"
                    >
                      Get Directions
                      <MapPin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#e8e8e8] mb-8">Find Us</h2>
              
              <div className="card-standard rounded-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0876839291847!2d76.95783731480294!3d11.041499892148374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8593f85c0c7c5%3A0x4eb68e9d7e60e88d!2sGoundampalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fam Infomedia Location"
                ></iframe>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] text-center mb-8">
              Download Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {downloads.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-standard rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#9b1c1c]/10 flex items-center justify-center flex-shrink-0 border border-[#9b1c1c]/20">
                      <item.icon className="w-6 h-6 text-[#9b1c1c]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#e8e8e8] font-semibold mb-1">{item.name}</h3>
                      <p className="text-[#888888] text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#666666] text-xs">{item.type} • {item.size}</span>
                        <button className="flex items-center gap-1 text-[#9b1c1c] hover:text-[#b91c1c] text-sm font-medium transition-colors">
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card-standard rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#e8e8e8] mb-4">
                  Prefer Instant Communication?
                </h2>
                <p className="text-[#888888] text-lg mb-8 max-w-2xl mx-auto">
                  Skip the wait and connect with us directly on WhatsApp. Our team typically responds 
                  within minutes during business hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/919655519922?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Fam%20Infomedia's%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-green-900/10"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message on WhatsApp
                  </a>
                  <a
                    href="tel:+919655519922"
                    className="flex items-center gap-2 px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/20"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
