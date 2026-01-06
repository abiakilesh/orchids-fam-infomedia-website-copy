"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, Users, Sparkles, Star } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

interface Team {
  name: string;
  description: string;
  groupPhoto: string;
  members: TeamMember[];
}

const teams: Team[] = [
  {
    name: "Digital Strategists",
    description: "The architects behind our digital marketing strategies. They analyze market trends and execute results-driven campaigns.",
    groupPhoto: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    members: [
      { name: "Arun Prakash", role: "Lead Strategist", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Priya Lakshmi", role: "SEO Specialist", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Karthik Raja", role: "Analytics Expert", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Deepa Sundaram", role: "Content Strategist", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Vijay Kumar", role: "PPC Specialist", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    ]
  },
  {
    name: "Creative Designers",
    description: "Our creative team that brings brands to life with stunning visuals and professional design solutions.",
    groupPhoto: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    members: [
      { name: "Meera Krishnan", role: "Lead Designer", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Ravi Shankar", role: "Visual Designer", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Anitha Rajan", role: "Motion Designer", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Suresh Babu", role: "UI/UX Designer", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Kavitha Devi", role: "Brand Designer", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    ]
  },
  {
    name: "Social Media Experts",
    description: "Specialists who manage online presence and build engaging communities across all major platforms.",
    groupPhoto: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    members: [
      { name: "Ganesh Kumar", role: "Social Media Lead", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Lakshmi Priya", role: "Community Manager", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Muthu Krishnan", role: "Content Creator", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Revathi Nair", role: "Influencer Specialist", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Senthil Murugan", role: "Engagement Analyst", photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    ]
  },
  {
    name: "Content Creators",
    description: "Professional writers and storytellers who craft compelling narratives that resonate with target audiences.",
    groupPhoto: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
    members: [
      { name: "Balaji Venkat", role: "Content Lead", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Sowmya Ravi", role: "Copywriter", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      // { name: "Praveen Kumar", role: "Blog Writer", photo: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      // { name: "Nithya Srinivasan", role: "Script Writer", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      // { name: "Harish Chandran", role: "Technical Writer", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    ]
  },
  {
    name: "SALES LEGENDS ",
    description: "Our tech team that builds and maintains the digital infrastructure powering our client projects.",
    groupPhoto: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
    members: [
      { name: "Subhiksha S", role: "Tech Lead", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop", linkedin: "https://www.linkedin.com/feed/", twitter: "https://x.com/home", instagram: "https://www.instagram.com/fam_info_media__04/?hl=en" },
      { name: "Santhiya K", role: "Digital Executive", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop", linkedin: "https://www.linkedin.com/in/santhiya-kumarasamy-8761a03a3/", twitter: "https://x.com/santhiya72629", instagram: "https://www.instagram.com/santhiyafam/" },
    //   { name: "Manoj Kumar", role: "Frontend Developer", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    //   { name: "Shalini Devi", role: "Backend Developer", photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    //   { name: "Ramesh Babu", role: "DevOps Engineer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
     ]
  },
  {
    name: "Training & Support",
    description: "Expert educators and support staff who ensure every student receives exceptional guidance.",
    groupPhoto: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    members: [
      { name: "Venkatesh Iyer", role: "Training Head", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Padmini Rao", role: "Senior Trainer", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Sathish Kumar", role: "Course Coordinator", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Geetha Lakshmi", role: "Student Support", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
      { name: "Rajesh Pillai", role: "Client Success Manager", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
       { name: "Shalini Devi", role: "Backend Developer", photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
       { name: "Ramesh Babu", role: "DevOps Engineer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", linkedin: "#", twitter: "#", instagram: "#" },
    ]
  },
];

export default function TeamPage() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleTeamClick = (teamName: string) => {
    setSelectedTeam(selectedTeam === teamName ? null : teamName);
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
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
              <span className="text-[#888888] uppercase tracking-[0.3em] text-sm font-medium">Expert Professionals</span>
              <Sparkles className="w-6 h-6 text-[#9b1c1c]" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8e8e8] mb-6">
              Meet Our <span className="text-gradient-primary">Team</span>
            </h1>
            
            <p className="text-[#888888] text-lg max-w-3xl mx-auto leading-relaxed">
              30+ skilled professionals organized into specialized teams, each bringing unique expertise 
              to our digital solutions. Click on any team to see our members.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
              <div className="card-standard px-6 py-3 rounded-lg flex items-center gap-3">
                <Users className="w-6 h-6 text-[#9b1c1c]" />
                <span className="text-[#e8e8e8] font-bold text-xl">5</span>
                <span className="text-[#888888] text-sm">Marketing Specialists</span>
              </div>
              <div className="card-standard px-6 py-3 rounded-lg flex items-center gap-3">
                <Star className="w-6 h-6 text-[#9b1c1c]" />
                <span className="text-[#e8e8e8] font-bold text-xl">1</span>
                <span className="text-[#888888] text-sm">Lead Designer</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {teams.map((team, teamIndex) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: teamIndex * 0.1 }}
                className="card-standard rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={team.groupPhoto}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button
                      onClick={() => handleTeamClick(team.name)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-[#e8e8e8] group-hover:text-[#9b1c1c] transition-colors">
                            {team.name}
                          </h2>
                          <p className="text-[#888888] mt-2 max-w-2xl text-sm">{team.description}</p>
                        </div>
                        <div className="flex items-center gap-3 text-[#e8e8e8]">
                          <Users className="w-5 h-5 text-[#9b1c1c]" />
                          <span className="text-sm">{team.members.length} Members</span>
                          <motion.span
                            animate={{ rotate: selectedTeam === team.name ? 180 : 0 }}
                            className="ml-2 text-[#9b1c1c]"
                          >
                            ▼
                          </motion.span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedTeam === team.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden bg-[#0d0d0d]"
                    >
                      <div className="p-8 border-t border-[#2a2a2a]">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                          {team.members.map((member, memberIndex) => (
                            <motion.div
                              key={member.name}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: memberIndex * 0.1 }}
                            >
                              <div className="card-standard rounded-xl p-4 text-center group">
                                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#2a2a2a] group-hover:border-[#9b1c1c] transition-colors">
                                  <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <h3 className="text-[#e8e8e8] font-semibold text-sm">{member.name}</h3>
                                <p className="text-[#9b1c1c] text-xs mt-1">{member.role}</p>
                                <div className="flex items-center justify-center gap-3 mt-4">
                                  {member.linkedin && (
                                    <a href={member.linkedin} className="text-[#888888] hover:text-[#0077b5] transition-colors">
                                      <Linkedin size={16} />
                                    </a>
                                  )}
                                  {member.twitter && (
                                    <a href={member.twitter} className="text-[#888888] hover:text-[#1da1f2] transition-colors">
                                      <Twitter size={16} />
                                    </a>
                                  )}
                                  {member.instagram && (
                                    <a href={member.instagram} className="text-[#888888] hover:text-[#e4405f] transition-colors">
                                      <Instagram size={16} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
