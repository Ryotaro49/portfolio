"use client";

import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useColorModeValue } from "@/components/ui/color-mode";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { useEffect, useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Portfolio() {
  const bgColor = useColorModeValue(
    "rgba(245, 243, 239, 0.7)",
    "rgba(26, 29, 41, 0.7)"
  );

  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      _before={{
        content: `""`,
        position: "fixed",
        top: 0,
        left: 0,
        w: "100vw",
        h: "100vh",
        bgImage: "url('/bg.jpg')",
        bgSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
        zIndex: -1,
      }}
    >
      {showLogo ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100vh"
          bg="transparent"
        >
          {/* ロゴ */}
          <motion.img
            src="/logo.png"
            alt="Logo"
            style={{ width: 200, height: "auto", marginBottom: 24 }}
          />

          {/* プログレスバー */}
          <Box
            w={{ base: "50%", md: "15%" }}
            h="4px"
            bg="gray.300"
            borderRadius="full"
            overflow="hidden"
          >
            <motion.div
              style={{ height: "100%", backgroundColor: "gray" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </Box>
        </Flex>
      ) : (
        <>
          <Header />

          {/* Heroセクション */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Box id="about" py="32">
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
            <Box pb="32">
              <About />
            </Box>
          </motion.div>

          {/* Projectsセクション */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Box id="skills" py="32" bg={bgColor}>
              <Projects />
            </Box>
          </motion.div>

          {/* Skillsセクション */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Box id="skills" py="32">
              <Skills />
            </Box>
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
        </>
      )}
    </Box>
  );
}
