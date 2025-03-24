"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useColorModeValue } from "@/components/ui/color-mode";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box minH="100vh">
      <Header />

      {/* Heroセクション */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Box id="hero" py="32">
          <Hero />
        </Box>
      </motion.div>

      {/* Aboutセクション */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Box id="about" pb="32">
          <About />
        </Box>
      </motion.div>

      {/* Skillsセクション */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Box id="skills" py="32" bg={bgColor}>
          <Skills />
        </Box>
      </motion.div>

      {/* Projectsセクション */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Projects />
      </motion.div>

      {/* Contactセクション */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Box id="contact" py="32" bg={bgColor}>
          <Contact />
        </Box>
      </motion.div>

      <Footer />
    </Box>
  );
}
