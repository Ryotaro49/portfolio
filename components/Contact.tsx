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
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Container maxW="container.xl">
      <VStack align="flex-start" gap={8}>
        <HStack gap={2}>
          <Box as={FaEnvelope} color="teal.500" />
          <Heading as="h2" size="xl">
            お問い合わせ
          </Heading>
        </HStack>
        <Text fontSize="lg" color="gray.500">
          開発者をお探しの方、質問がある方、または単につながりたい方は、お気軽にご連絡ください。
        </Text>
        <HStack gap={4} flexWrap={{ base: "wrap", sm: "nowrap" }}>
          <Button asChild colorScheme="teal">
            <a href="mailto:your.email@example.com">
              <FaEnvelope /> メールを送る
            </a>
          </Button>
          <Button asChild colorScheme="teal">
            <a href="https://github.com/Ryotaro49">
              <FaGithub /> GitHub
            </a>
          </Button>
          <Button asChild colorScheme="teal">
            <a href="https://linkedin.com/in/yourusername">
              <FaLinkedin /> LinkedIn
            </a>
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}
