"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaMicrochip } from "react-icons/fa";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Container maxW="container.xl">
      <VStack align="flex-start" gap={8}>
        <HStack gap={2}>
          <Box as={FaMicrochip} color="blue.500" />
          <Heading as="h2" size="xl">
            スキル
          </Heading>
        </HStack>
        <Text fontSize="lg" color="gray.500">
          プロジェクトに使用している技術とツールの一部です
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
          <SkillCard
            title="フロントエンド"
            skills={["React", "Next.js", "TypeScript", "Chakra UI", "HTML/CSS"]}
          />
          <SkillCard
            title="バックエンド"
            skills={["Node.js", "REST APIs", "Python", "TiDB", "AWS"]}
          />
          <SkillCard
            title="ツールなど"
            skills={["GitHub", "VS Code", "Visual Studio", "Docker"]}
          />
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
