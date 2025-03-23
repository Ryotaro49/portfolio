"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useColorModeValue } from "@/components/ui/color-mode";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Portfolio() {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box minH="100vh">
      <Header />
      <Box id="hero" py={"32"}>
        <Hero />
      </Box>
      <Box id="about" pb={"32"}>
        <About />
      </Box>
      <Box id="skills" py={"32"} bg={bgColor}>
        <Skills />
      </Box>
      <Projects />
      <Box id="contact" py={"32"} bg={bgColor}>
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
