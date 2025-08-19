import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const ExCom2024 = () => {
  const excomMembers = [
    {
        "name": "M.Rohini",
        "position": "President",
        "bio": "",
        "email": "",
        "linkedin": "",
        "image": "/Team/Rohini M.png"
      },
      
      {
        "name": "K.Adharsh",
        "position": "Secretary",
        "bio": "",
        "email": "",
        "linkedin": "",
        "image": "/Team/Adarsh.png"
      },
      
      {
        "name": "M.Rakesh",
        "position": "Project Lead",
        "bio": "",
        "email": "",
        "linkedin": "",
        "image": "/Team/Rakesh.png"
      },
      {
        "name": "J.Niharika",
        "position": "Documentation Lead",
        "bio": "",
        "email": "",
        "linkedin": "",
        "image": "/Team/Niharika.png"
      },
      {
        "name": "P.Shivani",
        "position": "Design Lead",
        "bio": "",
        "email": "",
        "linkedin": "",
        "image": "/Team/Shivani.png"
      }
    // },
    // {
    //   "name": "Samreen Begum",
    //   "position": "Technical Coordinator",
    //   "achievements": "Bug fixing",
    //   "image": ""
    // },
    // {
    //   "name": "Adharsh",
    //   "position": "Technical Coordinator",
    //   "achievements": "Tech assistance",
    //   "image": ""
    // },
    // {
    //   "name": "Sharanya",
    //   "position": "Technical Coordinator",
    //   "achievements": "System integration",
    //   "image": ""
    // },
    // {
    //   "name": "Viditha Reddy",
    //   "position": "Technical Coordinator",
    //   "achievements": "Module testing",
    //   "image": ""
    // },
    // {
    //   "name": "Bodhi Sathwa",
    //   "position": "Project Coordinator",
    //   "achievements": "Task scheduling",
    //   "image": ""
    // },
    // {
    //   "name": "Sameer Prabhas",
    //   "position": "Project Coordinator",
    //   "achievements": "Team support",
    //   "image": ""
    // },
    // {
    //   "name": "Puran Rathod",
    //   "position": "Project Coordinator",
    //   "achievements": "Milestone planning",
    //   "image": ""
    // },
    // {
    //   "name": "Parimala Nikita",
    //   "position": "Project Coordinator",
    //   "achievements": "Workflow design",
    //   "image": ""
    // },
    // {
    //   "name": "LaasyaAkshara",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Content curation",
    //   "image": ""
    // },
    // {
    //   "name": "Rohini",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Report drafting",
    //   "image": ""
    // },
    // {
    //   "name": "Dedeepya",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Manual creation",
    //   "image": ""
    // },
    // {
    //   "name": "Surya Kumar",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Data formatting",
    //   "image": ""
    // },
    // {
    //   "name": "Chitti Sujana",
    //   "position": "Designing Coordinator",
    //   "achievements": "UI layouts",
    //   "image": ""
    // },
    // {
    //   "name": "Isaac",
    //   "position": "Designing Coordinator",
    //   "achievements": "Logo design",
    //   "image": ""
    // },
    // {
    //   "name": "Praneeth",
    //   "position": "Designing Coordinator",
    //   "achievements": "Poster making",
    //   "image": ""
    // },
    // {
    //   "name": "Praveen",
    //   "position": "Designing Coordinator",
    //   "achievements": "Theme planning",
    //   "image": ""
    // },
    // {
    //   "name": "Revathi",
    //   "position": "Designing Coordinator",
    //   "achievements": "Visual assets",
    //   "image": ""
    // }
  ]
  ;

  const achievements = [
    'Conducted BI Nexus, a practical Power BI workshop empowering students with data visualization and analytics capabilities.',
    'Organized IGNIS XR-AI Hackathon, a high-impact event blending AI and extended reality technologies to challenge and inspire student innovation.',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-academic hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="h-12 w-12 text-secondary mr-4" />
              <h1 className="text-4xl lg:text-6xl font-bold">Ex-Com 2023-2024</h1>
            </div>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Celebrating the visionary leadership that propelled our club to new heights of excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Committee Members */}
      <section className="section-academic bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Executive Committee Members</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The exceptional leaders who drove innovation and growth during our most successful year yet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excomMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-academic text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-secondary/20 mb-6"
                />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.position}</p>
                <p className="text-muted-foreground leading-relaxed">{member.achievements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Achievements */}
      <section className="section-academic bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="h-10 w-10 text-secondary mr-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Year Achievements</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Remarkable accomplishments that set new standards for academic excellence and community impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 card-academic"
              >
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-foreground font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExCom2024;