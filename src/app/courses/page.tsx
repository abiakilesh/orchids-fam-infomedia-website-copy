"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  Star,
  Target
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Digital Marketing Fundamentals",
    level: "Beginner",
    duration: "4 Weeks",
    students: "500+",
    description: "Start your marketing journey with our foundational course. Learn the essential strategies of digital marketing including SEO basics, social media fundamentals, and content strategy.",
    modules: ["Introduction to Digital Marketing", "SEO Fundamentals", "Social Media Basics", "Content Marketing 101", "Analytics Introduction"],
    price: "₹5,000"
  },
  {
    title: "SEO Excellence Program",
    level: "Intermediate",
    duration: "6 Weeks",
    students: "300+",
    description: "Drive organic traffic and improve your search rankings. Master on-page optimization, link building strategies, and technical SEO to outperform your competitors.",
    modules: ["Advanced On-Page SEO", "Technical SEO Deep Dive", "Link Building Strategies", "Local SEO Domination", "SEO Audit & Reporting"],
    price: "₹15,000"
  },
  {
    title: "Social Media Strategy",
    level: "Intermediate",
    duration: "5 Weeks",
    students: "400+",
    description: "Build a strong community and engage with your audience effectively. Learn platform-specific strategies, content creation, and community management that builds lasting loyalty.",
    modules: ["Platform Strategy Deep Dive", "Content Creation Mastery", "Community Building", "Influencer Marketing", "Social Media Advertising"],
    price: "₹12,000"
  },
  {
    title: "PPC & Paid Advertising",
    level: "Advanced",
    duration: "6 Weeks",
    students: "200+",
    description: "Master the art of paid acquisition. From Google Ads to Meta advertising, learn to generate qualified leads and conversions with precision targeting.",
    modules: ["Google Ads Mastery", "Meta Ads Expert", "Display & Video Campaigns", "Remarketing Strategies", "Campaign Optimization"],
    price: "₹20,000"
  },
  {
    title: "Content Marketing Mastery",
    level: "Intermediate",
    duration: "5 Weeks",
    students: "250+",
    description: "Craft content that captivates and converts. Learn storytelling, copywriting, and content strategy to establish a powerful brand presence.",
    modules: ["Content Strategy Framework", "Copywriting That Converts", "Visual Content Creation", "Content Distribution", "Performance Analytics"],
    price: "₹10,000"
  },
  {
    title: "Complete Digital Marketing Program",
    level: "Expert",
    duration: "12 Weeks",
    students: "150+",
    description: "Our most comprehensive program covering every aspect of digital marketing. Emerge as a complete digital marketing professional ready for any industry.",
    modules: ["All Foundation Modules", "Advanced SEO & PPC", "Social Media Mastery", "Analytics & Reporting", "Strategy & Planning", "Real Client Projects"],
    price: "₹50,000"
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "text-[#1a3d2e] bg-[#1a3d2e]/20";
    case "Intermediate": return "text-[#9b1c1c] bg-[#9b1c1c]/20";
    case "Advanced": return "text-[#2d1f3d] bg-[#2d1f3d]/50";
    case "Expert": return "text-[#ffd700] bg-[#ffd700]/20";
    default: return "text-[#888888] bg-[#888888]/20";
  }
};

export default function CoursesPage() {
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
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm font-medium">Professional Education</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              Our <span className="text-gradient-primary">Courses</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto leading-relaxed">
              Transform into a skilled digital marketing professional. Our courses are crafted by 
              industry experts with years of experience serving hundreds of successful clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-standard rounded-2xl overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-[#9b1c1c]">{course.price}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#e8e8e8] mb-3 group-hover:text-[#9b1c1c] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-[#888888] text-sm mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-[#888888]">
                      <Clock size={16} className="text-[#9b1c1c]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[#888888]">
                      <Users size={16} className="text-[#9b1c1c]" />
                      {course.students} enrolled
                    </div>
                  </div>

                  <div className="border-t border-[#2a2a2a] pt-6">
                    <h4 className="text-[#e8e8e8] text-sm font-semibold mb-3">Key Modules:</h4>
                    <ul className="space-y-2">
                      {course.modules.slice(0, 4).map((module) => (
                        <li key={module} className="flex items-center gap-2 text-[#888888] text-sm">
                          <CheckCircle size={14} className="text-[#1a3d2e]" />
                          {module}
                        </li>
                      ))}
                      {course.modules.length > 4 && (
                        <li className="text-[#9b1c1c] text-sm font-medium">+{course.modules.length - 4} more modules</li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Link
                      href="/pricing"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/20"
                    >
                      Enroll Now
                      <ArrowRight size={16} />
                    </Link>
                    <a
                      href="https://wa.me/919655519922"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 bg-[#1a3d2e] hover:bg-[#245a42] text-white rounded-lg transition-all duration-300"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="card-standard rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,28,28,0.1)_0%,_transparent_70%)]"></div>
              <div className="relative z-10">
                <BookOpen className="w-12 h-12 text-[#9b1c1c] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-[#e8e8e8] mb-4">
                  Find the Right Path for You
                </h2>
                <p className="text-[#888888] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our counselors are here to help you find the perfect course based on your career goals. 
                  Get personalized guidance today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/speak-us-now"
                    className="px-8 py-4 bg-[#9b1c1c] hover:bg-[#b91c1c] text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/20"
                  >
                    Free Consultation
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-[#2d1f3d] hover:bg-[#3d2f4d] text-white rounded-lg text-lg font-semibold transition-all duration-300"
                  >
                    View All Plans
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
