"use client";

import { Badge, Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export default function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue("white", "gray.800")}
      shadow="md"
    >
      <Box p={5}>
        <Heading size="md" mb={4}>
          {title}
        </Heading>
        <Wrap gap={2}>
          {skills.map((skill) => (
            <WrapItem key={skill}>
              <Badge size="md" colorScheme="blue" variant="subtle">
                {skill}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}
