import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const ExCom2022 = () => {
  const excomMembers = [
    {
      "name": "Sathwika",
      "position": "Founder",
      "achievements": "Visionary leadership",
      "image": ""
    },
    {
      "name": "Sravanth",
      "position": "Co-Founder",
      "achievements": "Community building",
      "image": ""
    },
    {
      "name": "Akhila",
      "position": "Technical Lead",
      "achievements": "System design",
      "image": ""
    },
    {
      "name": "Shashank",
      "position": "Technical Co-Lead",
      "achievements": "Backend support",
      "image": ""
    },
    {
      "name": "Nishitha",
      "position": "Documentation Lead",
      "achievements": "Content writing",
      "image": ""
    },
    {
      "name": "Shaileender",
      "position": "Design Lead & Website Co-Lead",
      "achievements": "UI/UX design",
      "image": ""
    },
    {
      "name": "Venkat Sai",
      "position": "Website Lead & Design Co-Lead",
      "achievements": "Web interface",
      "image": ""
    }
    // },
    // {
    //   "name": "Yugendhar",
    //   "position": "Technical Coordinator",
    //   "achievements": "API integration",
    //   "image": ""
    // },
    // {
    //   "name": "Vineesha",
    //   "position": "Technical Coordinator",
    //   "achievements": "Logic development",
    //   "image": ""
    // },
    // {
    //   "name": "R.V.K. Sravya",
    //   "position": "Technical Coordinator",
    //   "achievements": "Debugging expert",
    //   "image": ""
    // },
    // {
    //   "name": "Dinesh",
    //   "position": "Technical Coordinator",
    //   "achievements": "Server support",
    //   "image": ""
    // },
    // {
    //   "name": "Harshith",
    //   "position": "Technical Coordinator",
    //   "achievements": "App builder",
    //   "image": ""
    // },
    // {
    //   "name": "Vinay",
    //   "position": "Technical Coordinator",
    //   "achievements": "Tool integration",
    //   "image": ""
    // },
    // {
    //   "name": "Varshini",
    //   "position": "Technical Coordinator",
    //   "achievements": "Module creation",
    //   "image": ""
    // },
    // {
    //   "name": "E. Shamitha",
    //   "position": "Documentation Coordinator",
    //   "achievements": "User guides",
    //   "image": ""
    // },
    // {
    //   "name": "P. Rithika",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Content editing",
    //   "image": ""
    // },
    // {
    //   "name": "P. Vineesha",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Document audits",
    //   "image": ""
    // },
    // {
    //   "name": "S. Sumanjali",
    //   "position": "Documentation Coordinator",
    //   "achievements": "Policy drafting",
    //   "image": ""
    // },
    // {
    //   "name": "Aravind",
    //   "position": "Designing Coordinator",
    //   "achievements": "Theme concepts",
    //   "image": ""
    // },
    // {
    //   "name": "K. Akash",
    //   "position": "Designing Coordinator",
    //   "achievements": "Poster designs",
    //   "image": ""
    // },
    // {
    //   "name": "P. Yeshwanth",
    //   "position": "Designing Coordinator",
    //   "achievements": "UI templates",
    //   "image": ""
    // },
    // {
    //   "name": "Pranay",
    //   "position": "Designing Coordinator",
    //   "achievements": "Creative strategy",
    //   "image": ""
    // },
    // {
    //   "name": "Sai Charan",
    //   "position": "Designing Coordinator",
    //   "achievements": "Visual branding",
    //   "image": ""
    // },
    // {
    //   "name": "Pradeep",
    //   "position": "Designing Coordinator",
    //   "achievements": "Graphic layouts",
    //   "image": ""
    // },
    // {
    //   "name": "Gnana Karthikeya",
    //   "position": "Designing Coordinator",
    //   "achievements": "Illustration work",
    //   "image": ""
    // },
    // {
    //   "name": "P. Praneeth",
    //   "position": "Website Coordinator",
    //   "achievements": "Frontend builder",
    //   "image": ""
    // },
    // {
    //   "name": "Chandana",
    //   "position": "Website Coordinator",
    //   "achievements": "Web hosting",
    //   "image": ""
    // },
    // {
    //   "name": "Pranay",
    //   "position": "Website Coordinator",
    //   "achievements": "Deployment expert",
    //   "image": ""
    // }
  ]
  ;

  const achievements = [
    'Successfully transitioned to hybrid learning model',
    'Launched mentorship program with 100+ participants',
    'Established partnerships with 5 academic departments',
    'Increased membership by 150%',
    'Organized 12 virtual workshops and seminars',
    'Received "Outstanding Student Organization" award'
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
              <h1 className="text-4xl lg:text-6xl font-bold">Ex-Com 2022-2023</h1>
            </div>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/90">
              Recognizing the outstanding leadership that guided our club through a transformative year
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
              Meet the dedicated leaders who served our community with distinction during the 2022-2023 academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excomMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-academic text-center"
              >
                {/* <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-secondary/20 mb-6"
                /> */}
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
              Notable accomplishments and milestones achieved during the 2022-2023 academic year
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

export default ExCom2022;