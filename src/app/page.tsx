"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Zap,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Star,
  Target
} from "lucide-react";
import { Marquee } from "@/components/Marquee";

const stats = [
  { value: "300+", label: "Clients Served", icon: Users },
  { value: "30+", label: "Expert Team", icon: Award },
  { value: "2+", label: "Years Excellence", icon: TrendingUp },
  { value: "50+", label: "Courses Offered", icon: BookOpen },
];

const services = [
  {
    icon: GraduationCap,
    title: "Digital Marketing Courses",
    description: "Master the latest strategies in SEO, social media, content marketing, and paid advertising with our industry-leading training programs."
  },
  {
    icon: Target,
    title: "SEO Excellence",
    description: "Boost your organic visibility and drive targeted traffic. Our experts implement data-driven techniques to help your brand rank higher."
  },
  {
    icon: Users,
    title: "Social Media Strategy",
    description: "Build a strong community and engage with your audience effectively. We create compelling content that drives real business results."
  },
  {
    icon: Briefcase,
    title: "Brand Strategy",
    description: "Develop a unique brand identity that resonates with your customers. We help you stand out in today's competitive digital landscape."
  },
];

const testimonials = [
  {
    quote: "Fam Infomedia transformed our digital presence. Their courses are incredibly practical and have helped us achieve measurable growth.",
    author: "Rajesh Kumar",
    role: "Business Owner"
  },
  {
    quote: "The team's expertise in digital marketing is exceptional. They provided us with the tools and knowledge to excel online.",
    author: "Priya Sharma",
    role: "Marketing Director"
  },
  {
    quote: "I highly recommend their courses. The training is comprehensive, and the support from the instructors is outstanding!",
    author: "Arun Venkatesan",
    role: "Course Graduate"
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(40,40,40,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for snappy feel
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#9b1c1c]" />
              <span className="text-[#e8e8e8] text-sm font-medium tracking-normal">Elevate Your Digital Presence</span>
              <Sparkles className="w-5 h-5 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-[#e8e8e8] font-bold mb-6 leading-tight tracking-tight">
              Unleash Your<br />
              <span className="text-[#e8e8e8]">Digital Potential</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#888888] max-w-3xl mx-auto mb-8 leading-relaxed">
              Master the art of digital marketing with Tamil Nadu&apos;s leading education provider. 
              Transform your skills and drive meaningful growth for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/courses"
                className="group flex items-center gap-2 px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg text-lg font-semibold transition-all duration-300 transform-gpu"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919655519922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg text-lg font-semibold transition-all duration-300 transform-gpu"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mb-16">
              <Marquee />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.1 + index * 0.05,
                    ease: "easeOut"
                  }}
                  className="bg-[#111111] border border-[#2a2a2a] p-6 rounded-xl will-change-transform"
                >
                  <stat.icon className="w-8 h-8 text-[#9b1c1c] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#e8e8e8]">{stat.value}</div>
                  <div className="text-[#888888] text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <Zap className="w-10 h-10 text-[#9b1c1c] mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#e8e8e8] mb-4">
              Premium Digital Services
            </h2>
            <p className="text-[#888888] max-w-2xl mx-auto text-lg">
              We provide comprehensive digital solutions tailored to your business goals. 
              Our 5-person marketing team and dedicated designer deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="bg-[#111111] border border-[#2a2a2a] p-8 rounded-xl group hover:border-[#9b1c1c] transition-all duration-300 transform-gpu will-change-transform"
              >
                <service.icon className="w-10 h-10 text-[#9b1c1c] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-[#e8e8e8] mb-3">{service.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#e8e8e8] mb-4">
              Success Stories
            </h2>
            <p className="text-[#888888] max-w-2xl mx-auto text-lg">
              Read testimonials from students and clients who have achieved success through our partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05 
                }}
                className="bg-[#111111] border border-[#2a2a2a] p-8 rounded-xl relative will-change-transform"
              >
                <div className="text-[#9b1c1c]/20 text-8xl absolute top-4 left-6">&quot;</div>
                <p className="text-[#e8e8e8] italic mb-6 relative z-10 pt-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-[#2a2a2a] pt-4">
                  <p className="text-[#9b1c1c] font-semibold">{testimonial.author}</p>
                  <p className="text-[#888888] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-12 text-center relative overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(40,40,40,0.1)_0%,_transparent_70%)]"></div>
            <div className="relative z-10">
              <Star className="w-12 h-12 text-[#9b1c1c] mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold text-[#e8e8e8] mb-4">
                Ready to Grow Your Brand?
              </h2>
              <p className="text-[#888888] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 300 successful clients and countless students who have elevated their digital presence. 
                Start your journey toward digital mastery today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/career"
                  className="flex items-center gap-2 px-8 py-4 bg-[#2d1f3d] hover:bg-[#3d2f4d] text-white rounded-lg text-lg font-semibold transition-all duration-300 transform-gpu"
                >
                  <Briefcase className="w-5 h-5" />
                  Join Our Team
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg text-lg font-semibold transition-all duration-300 transform-gpu"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
