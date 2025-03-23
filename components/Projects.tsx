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
import { FaBriefcase } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Box id="projects" py={20}>
      <Container maxW="container.xl">
        <VStack align="flex-start" gap={8}>
          <HStack gap={2}>
            <Box as={FaBriefcase} color="blue.500" />
            <Heading as="h2" size="xl">
              プロジェクト
            </Heading>
          </HStack>
          <Text fontSize="lg" color="gray.500">
            最近のプロジェクトをご覧ください：
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            <ProjectCard
              title="Eコマースウェブサイト"
              description="Next.jsで構築され、ヘッドレスCMSと統合された機能満載のオンラインストア。"
              skills={["Next.js", "TypeScript", "Chakra UI"]}
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="タスク管理アプリ"
              description="ドラッグアンドドロップ機能とリアルタイム更新を備えた生産性アプリケーション。"
              skills={["React", "Firebase", "Chakra UI"]}
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="ポートフォリオウェブサイト"
              description="私の作品とスキルを紹介するレスポンシブなポートフォリオウェブサイト（このウェブサイト）。"
              skills={["Next.js", "Chakra UI", "React Icons"]}
              image="/placeholder.svg?height=200&width=300"
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
