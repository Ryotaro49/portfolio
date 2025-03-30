"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLine,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <Container maxW="container.xl">
      <VStack align="flex-start" gap={8}>
        <HStack gap={2}>
          <Box as={FaEnvelope} color="brand.500" />
          <Heading as="h2" size="xl">
            お問い合わせ
          </Heading>
        </HStack>
        <Text fontSize="lg" color="brand.800">
          開発者をお探しの方、質問のある方、ただ挨拶するのみでも、お気軽にご連絡ください。
        </Text>
        <HStack gap={4} flexWrap={{ base: "wrap", sm: "nowrap" }}>
          <Button asChild bgColor={"brand.500"}>
            <a href="mailto:m.ryotaro049@gmail.com">
              <FaEnvelope /> メールを送る
            </a>
          </Button>
          <Button asChild bgColor={"brand.500"}>
            <a href="https://github.com/Ryotaro49">
              <FaGithub /> GitHub
            </a>
          </Button>
          <Button asChild bgColor={"brand.500"}>
            <a href="https://www.linkedin.com/in/凌太郎-巻田-80a781325">
              <FaLinkedin /> LinkedIn
            </a>
          </Button>
          <Button asChild bgColor={"brand.500"}>
            <a href="https://line.me/ti/p/PYl4erX5EG">
              <FaLine /> LINE
            </a>
          </Button>
          <Button asChild bgColor={"brand.500"}>
            <a href="https://www.instagram.com/ryotaro_49?igsh=MWZubDU5eWpwYTZkbw%3D%3D&utm_source=qr">
              <FaInstagram /> Instagram
            </a>
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}
