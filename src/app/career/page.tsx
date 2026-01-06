"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  Coffee,
  Rocket,
  MessageCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const jobOpenings = [
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Goundampalayam, Tamil Nadu",
    description: "Join our 5-person digital marketing team to plan, execute, and optimize digital marketing campaigns across multiple channels. You'll work closely with clients to drive measurable results.",
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Manage social media accounts and content calendars",
      "Analyze campaign performance and prepare reports",
      "Collaborate with the design team on creative assets",
      "Stay updated on industry trends and best practices"
    ],
    requirements: [
      "1-2 years experience in digital marketing",
      "Proficiency in Google Analytics and social media tools",
      "Strong communication and analytical skills",
      "Bachelor's degree in Marketing or related field",
      "Passion for learning and growth"
    ]
  },
  {
    title: "SEO Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Goundampalayam, Tamil Nadu",
    description: "We're looking for an SEO specialist to help our clients dominate search engine rankings. You'll conduct audits, implement strategies, and track organic growth.",
    responsibilities: [
      "Conduct comprehensive SEO audits",
      "Develop and implement SEO strategies",
      "Perform keyword research and competitor analysis",
      "Monitor rankings and organic traffic metrics",
      "Optimize on-page and technical SEO elements"
    ],
    requirements: [
      "2+ years of hands-on SEO experience",
      "Experience with SEO tools (Ahrefs, SEMrush, etc.)",
      "Understanding of technical SEO concepts",
      "Proven track record of ranking improvements",
      "Strong analytical and problem-solving skills"
    ]
  },
  {
    title: "Full Stack Web Developer",
    department: "Technology",
    type: "Full-time",
    location: "Goundampalayam, Tamil Nadu",
    description: "Join our tech team to build and maintain web applications, landing pages, and client projects. You'll work with modern frameworks and technologies.",
    responsibilities: [
      "Develop responsive web applications and websites",
      "Build and maintain client project infrastructure",
      "Collaborate with designers on UI/UX implementation",
      "Optimize website performance and SEO",
      "Maintain code quality and documentation"
    ],
    requirements: [
      "2+ years experience in web development",
      "Proficiency in React, Next.js, and Node.js",
      "Experience with databases (MySQL, MongoDB)",
      "Understanding of SEO best practices",
      "Strong problem-solving abilities"
    ]
  },
  {
    title: "Graphic Designer",
    department: "Design",
    type: "Full-time",
    location: "Goundampalayam, Tamil Nadu",
    description: "We need a creative designer to craft stunning visuals for social media, advertisements, and branding projects. You'll be part of our design team working on diverse projects.",
    responsibilities: [
      "Create graphics for social media and digital ads",
      "Design brand identities and marketing materials",
      "Develop visual content for client campaigns",
      "Collaborate with the marketing team on creative direction",
      "Maintain brand consistency across all deliverables"
    ],
    requirements: [
      "2+ years of graphic design experience",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio showcasing diverse work",
      "Understanding of digital marketing principles",
      "Excellent attention to detail and creativity"
    ]
  },
  {
    title: "Content Writer",
    department: "Content",
    type: "Full-time",
    location: "Goundampalayam, Tamil Nadu",
    description: "Join our content team to create engaging copy for blogs, social media, websites, and marketing campaigns. Strong research and writing skills are essential.",
    responsibilities: [
      "Write SEO-optimized blog posts and articles",
      "Create engaging social media content",
      "Develop website copy and landing pages",
      "Research industry topics and trends",
      "Edit and proofread content for quality"
    ],
    requirements: [
      "1+ years of content writing experience",
      "Excellent English writing and grammar skills",
      "Understanding of SEO content principles",
      "Ability to write for diverse industries",
      "Strong research and organizational skills"
    ]
  },
  {
    title: "Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Goundampalayam, Tamil Nadu",
    description: "Perfect for fresh graduates looking to start their digital marketing career. Learn from our expert team and gain hands-on experience with real client projects.",
    responsibilities: [
      "Assist in social media management",
      "Support campaign execution and reporting",
      "Conduct research and competitor analysis",
      "Help with content creation and scheduling",
      "Learn various digital marketing tools and techniques"
    ],
    requirements: [
      "Recent graduate or final year student",
      "Basic understanding of digital marketing",
      "Strong interest in learning and growth",
      "Good communication skills",
      "Proficiency in English and Tamil"
    ]
  },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage for you and your family" },
  { icon: Coffee, title: "Work-Life Balance", description: "Flexible schedules and casual work environment" },
  { icon: Rocket, title: "Growth Opportunities", description: "Clear career paths and continuous learning" },
  { icon: Users, title: "Team Culture", description: "Collaborative, inclusive, and supportive team" },
];

export default function CareerPage() {
  const handleApply = (jobTitle: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in applying for the "${jobTitle}" position at Fam Infomedia. Please share the application process.`);
    window.open(`https://wa.me/919655519922?text=${message}`, '_blank');
  };

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
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm">Join Our Expert Team</span>
              <Sparkles className="w-8 h-8 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#e8e8e8] font-bold mb-6">
              <span className="text-gradient-primary">Career</span> Opportunities
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto mb-8">
              Join our team of 30+ digital marketing professionals and help businesses conquer the digital realm. 
              We&apos;re always looking for passionate individuals who want to make an impact.
            </p>

            <div className="flex items-center justify-center gap-8">
              <div className="card-standard px-6 py-3 rounded-lg">
                <span className="text-[#9b1c1c] font-bold text-2xl">30+</span>
                <span className="text-[#888888] text-sm ml-2">Team Members</span>
              </div>
              <div className="card-standard px-6 py-3 rounded-lg">
                <span className="text-[#9b1c1c] font-bold text-2xl">6</span>
                <span className="text-[#888888] text-sm ml-2">Open Positions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] text-center mb-12">
              Why Work With Us?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-standard rounded-xl p-6 text-center"
                >
                  <benefit.icon className="w-10 h-10 text-[#9b1c1c] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#e8e8e8] mb-2">{benefit.title}</h3>
                  <p className="text-[#888888] text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#e8e8e8] text-center mb-12">
              Current Openings
            </h2>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-standard rounded-2xl overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Briefcase className="w-6 h-6 text-[#9b1c1c]" />
                          <h3 className="text-2xl font-bold text-[#e8e8e8]">{job.title}</h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                          <span className="flex items-center gap-1 text-[#888888]">
                            <Users size={14} className="text-[#9b1c1c]" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-[#888888]">
                            <Clock size={14} className="text-[#9b1c1c]" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 text-[#888888]">
                            <MapPin size={14} className="text-[#9b1c1c]" />
                            {job.location}
                          </span>
                        </div>

                        <p className="text-[#888888] mb-6">{job.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-[#e8e8e8] font-semibold mb-3">Responsibilities:</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-[#888888] text-sm">
                                  <ArrowRight size={14} className="text-[#9b1c1c] mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[#e8e8e8] font-semibold mb-3">Requirements:</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-[#888888] text-sm">
                                  <ArrowRight size={14} className="text-[#1a3d2e] mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="lg:ml-8">
                        <button
                          onClick={() => handleApply(job.title)}
                          className="flex items-center gap-2 px-6 py-3 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
                        >
                          <MessageCircle size={18} />
                          Apply Now
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
            className="mt-24 text-center"
          >
            <div className="card-standard rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#e8e8e8] mb-4">
                  Don&apos;t See Your Role?
                </h2>
                <p className="text-[#888888] text-lg mb-8 max-w-2xl mx-auto">
                  We&apos;re always on the lookout for talented individuals. Send us your resume and tell us 
                  how you can contribute to our team&apos;s success.
                </p>
                <a
                  href="mailto:info@faminfomedia.com?subject=Career%20Inquiry"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d1f3d] hover:bg-[#3d2f4d] text-white rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
