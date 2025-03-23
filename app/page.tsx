"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useColorModeValue } from "@/components/ui/color-mode";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box minH="100vh">
      <Header />
      <Hero />
      <Box id="skills" py={20} bg={bgColor}>
        <Skills />
      </Box>
      <Projects />
      <Box id="contact" py={20} bg={bgColor}>
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
