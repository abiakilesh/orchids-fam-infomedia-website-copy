"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Heart,
  Zap,
  Shield,
  History,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in everything we do, setting high standards for our team and students alike."
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "Your success is our top priority. We design our courses and services to deliver maximum value."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of industry trends, bringing the latest digital marketing strategies to our community."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with full transparency and ethical practices, building trust with every partnership."
  },
];

const milestones = [
  { year: "2022", event: "Fam Infomedia was established in Goundampalayam" },
  { year: "2022", event: "Our first cohort of 50 students graduated successfully" },
  { year: "2023", event: "Team expanded to 20+ specialized marketing professionals" },
  { year: "2023", event: "Reached the milestone of serving 100+ satisfied clients" },
  { year: "2024", event: "Grown to a team of 30+ members serving 300+ clients" },
  { year: "2024", event: "Recognized as a leading digital education provider in Tamil Nadu" },
];

export default function AboutPage() {
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
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm font-medium">Our Story</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              About <span className="text-gradient-primary">Fam Infomedia</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#9b1c1c] mb-6">Our Journey</h2>
              <div className="space-y-4 text-[#b8b8b8] leading-relaxed text-lg">
                <p>
                  Established in Goundampalayam, Tamil Nadu, Fam Infomedia started over two years ago 
                  with a clear vision: to help businesses thrive in the digital age and empower 
                  individuals with industry-relevant marketing skills.
                </p>
                <p>
                  What began as a small group of digital enthusiasts has grown into a professional 
                  team of 30+ specialists, including a dedicated 5-person digital marketing core 
                  and a creative design specialist.
                </p>
                <p>
                  Today, we have successfully partnered with over 300 clients, helping them navigate 
                  the complexities of digital marketing with data-driven strategies. Our courses are 
                  meticulously designed to bridge the gap between theory and real-world application.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="card-standard rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(155,28,28,0.1)_0%,_transparent_60%)]"></div>
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-[#9b1c1c] mx-auto mb-3" />
                    <div className="text-4xl font-bold text-[#e8e8e8]">300+</div>
                    <div className="text-[#888888] text-sm">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-10 h-10 text-[#9b1c1c] mx-auto mb-3" />
                    <div className="text-4xl font-bold text-[#e8e8e8]">30+</div>
                    <div className="text-[#888888] text-sm">Team Members</div>
                  </div>
                  <div className="text-center">
                    <Target className="text-gradient-primary w-10 h-10 mx-auto mb-3" />
                    <div className="text-4xl font-bold text-[#e8e8e8]">5</div>
                    <div className="text-[#888888] text-sm">Marketing Specialists</div>
                  </div>
                  <div className="text-center">
                    <History className="w-10 h-10 text-[#9b1c1c] mx-auto mb-3" />
                    <div className="text-4xl font-bold text-[#e8e8e8]">2+</div>
                    <div className="text-[#888888] text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-24"
          >
            <div className="card-standard rounded-2xl p-8">
              <Target className="w-12 h-12 text-[#9b1c1c] mb-6" />
              <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">Our Mission</h3>
              <p className="text-[#888888] leading-relaxed">
                To empower businesses and individuals through world-class digital education and 
                strategic services, helping them achieve sustainable growth and establish a 
                powerful online presence in a competitive global market.
              </p>
            </div>
            <div className="card-standard rounded-2xl p-8">
              <Eye className="w-12 h-12 text-[#9b1c1c] mb-6" />
              <h3 className="text-2xl font-bold text-[#e8e8e8] mb-4">Our Vision</h3>
              <p className="text-[#888888] leading-relaxed">
                To be the most trusted and respected digital marketing education provider in 
                Tamil Nadu, cultivating a community of skilled professionals who drive innovation 
                and excellence in the digital marketing industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-[#e8e8e8] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-standard rounded-xl p-6 text-center"
                >
                  <value.icon className="w-10 h-10 text-[#9b1c1c] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#e8e8e8] mb-2">{value.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#e8e8e8] text-center mb-12">
              Our Milestone Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#9b1c1c] via-[#9b1c1c] to-transparent"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="card-standard inline-block rounded-lg p-6">
                        <span className="text-[#9b1c1c] font-bold text-xl">{milestone.year}</span>
                        <p className="text-[#e8e8e8] mt-2">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-[#9b1c1c] rounded-full flex-shrink-0 shadow-lg shadow-red-900/50"></div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="card-standard rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#e8e8e8] mb-4">
                  Partner with the Best
                </h2>
                <p className="text-[#888888] text-lg mb-8 max-w-2xl mx-auto">
                  Whether you are looking to advance your career or grow your business, we are here 
                  to help you succeed in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/team"
                    className="px-8 py-4 bg-[#2d1f3d] hover:bg-[#3d2f4d] text-white rounded-lg text-lg font-semibold transition-all duration-300"
                  >
                    Meet Our Team
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/20"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
