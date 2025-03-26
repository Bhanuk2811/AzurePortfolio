"use client"
import { TechIcons } from "@/components/tech-icons";
import { Mouse, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HyperText } from "../components/magicui/hyper-text";
import ResumePage from "./blog/page"
import ProjectsPage from "./projects/page";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-10 right-10 bg-black text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-gray-800"
      onClick={scrollToTop}
    >
      <ArrowUp size={24} />
    </motion.div>
  );
};

const ScrollDownIndicator = () => {
  return (
    <div className="absolute bottom-90 left-1/2 transform -translate-x-1/2">
      <Mouse className="text-gray-600 animate-bounce" size={32} />
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Variants for section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative container mx-auto px-4 py-20">
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold mb-10"><HyperText children={"About"}/></h1>
        <div className="space-y-6 text-lg">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I'm Bhanu Kaushal, a fourth-year Bachelor of Computer Information Systems student at the University of the Fraser Valley, with a strong interest in data analytics, DevOps, and cloud computing. I'm driven to create scalable, user-friendly solutions and continuously expand my technical expertise.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            My projects demonstrate skills in app development, usability testing, and system design, including a student information management system and a community-focused non-profit website. With a keen focus on cloud technologies, I'm eager to explore new methods of optimizing data and application management.
          </motion.p>
        </div>
      </motion.section>

      {/* Scroll Down Indicator */}
      <ScrollDownIndicator />

      <motion.section 
        id="blog"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto mb-16"
      >
        <ResumePage/>
      </motion.section>

      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto mb-16"
      >
        <ProjectsPage/>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-2xl mx-auto mb-16"
      >
        <TechIcons />
      </motion.section>

      {/* Scroll Up Button */}
      <ScrollToTop />

      {/* Progress Bar */}
      <motion.div 
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: 'left center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'black',
          zIndex: 100
        }} 
      />
    </div>
  );
}