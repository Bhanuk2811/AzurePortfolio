"use client"
import { TechIcons } from "@/components/tech-icons";
import { Mouse, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogPage from "./blog/page"

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
  return (
    <div className="relative container mx-auto px-4 py-12">
      <section className="max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl font-bold mb-8">About</h1>
        <div className="space-y-6 text-lg">
          <p>
            I’m Bhanu Kaushal, a fourth-year Bachelor of Computer Information Systems student at the University of the Fraser Valley, with a strong interest in data analytics, DevOps, and cloud computing. I’m driven to create scalable, user-friendly solutions and continuously expand my technical expertise.
          </p>
          <p>
            My projects demonstrate skills in app development, usability testing, and system design, including a student information management system and a community-focused non-profit website. With a keen focus on cloud technologies, I’m eager to explore new methods of optimizing data and application management.
          </p>
       
        </div>
        
      </section>
        {/* Scroll Down Indicator */}
  
        <ScrollDownIndicator />
      <section id="blog" className="max-w-2xl mx-auto mb-16 mt-15">
      <BlogPage/>
      </section>

      <section className="max-w-2xl mx-auto mb-16">
        <TechIcons />
      </section>
      
    
      {/* Scroll Up Button */}
      <ScrollToTop />
    </div>
  );
}
