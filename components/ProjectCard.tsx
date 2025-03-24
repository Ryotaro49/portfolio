"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export default function ProjectCard({
  title,
  description,
  skills,
  image,
  url,
}: {
  title: string;
  description: string;
  skills: string[];
  image: string;
  url: string;
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue("white", "gray.800")}
      shadow="md"
    >
      <Box position="relative" overflow="hidden">
        <a href={url}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            w="full"
            h="auto"
            aspectRatio={16 / 9}
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </a>
      </Box>
      <Box p={5}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.500" mb={4}>
          {description}
        </Text>
        <Wrap gap={2} mb={4}>
          {skills.map((skill) => (
            <WrapItem key={skill}>
              <Badge size="md" variant="subtle">
                {skill}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}
