import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  BookOpen, 
  TrendingUp,
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import clubLogo from '@/assets/club-logo.png';
import heroBg from '@/assets/hero-bg.jpg';
import event1 from '@/assets/club-event-1.jpg';
import event2 from '@/assets/club-event-2.jpg';
import event3 from '@/assets/club-event-3.jpg';

const Home = () => {
  const values = [
    {
      icon: Users,
      title: 'Leadership',
      description: 'Developing strong leaders who inspire and guide their peers.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Fostering creative thinking and innovative problem-solving.'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Promoting highest standards of academic achievement.'
    }
  ];

  const clubImages = [
    { src: event1, alt: 'Academic Conference' },
    { src: event2, alt: 'Networking Event' },
    { src: event3, alt: 'Workshop Session' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.img
            src={clubLogo}
            alt="Academic Excellence Club Logo"
            className="h-24 w-24 lg:h-32 lg:w-32 mx-auto mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where Innovation Meets Community
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Join a vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
          </motion.div>
        </motion.div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      {/* Club Overview Section */}
      <section className="section-academic bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              About Our Club
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Datavedhi.club, the official Data Science club of VBIT, is dedicated to fostering a strong foundation in data-driven technologies. Established under the guidance of Dr. Y. Raju (HoD, Data Science) with faculty coordinator K. Kamal sir, the club provides a platform for students to explore Machine Learning, Artificial Intelligence, Data Analytics, and Big Data. By organizing hands-on workshops, hackathons, and industry collaborations, Datavedhi.club empowers aspiring data scientists to solve real-world problems with data-driven insights. The club encourages innovation, collaboration, and continuous learning to shape future leaders in the field of Data Science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-academic text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Life in Images Section */}
      <section className="section-academic bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Club Life in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the vibrant community and enriching activities that define our club culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clubImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="card-academic overflow-hidden p-0"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {image.alt}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Engaging in meaningful activities that promote growth and excellence
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/gallery" className="btn-academic">
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;