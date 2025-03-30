"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* Container の maxW を狭めて中央寄せ */}
      <Container maxW="container.lg" px={{ base: 4, md: 200 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={12}
          justifyContent="center"
          alignItems="center"
        >
          {/* テキストエリア */}
          <GridItem>
            <HStack gap={2} mb={4}>
              <Box as={FaUser} color="blue.500" boxSize={6} />
              <Heading as="h2" size="xl">
                自己紹介
              </Heading>
            </HStack>
            <VStack align="flex-start" gap={4}>
              <Text fontSize="lg" color="gray.500">
                Web アプリケーション開発者です。
                他にもホームページやECサイトなどの制作も可能です。
                趣味程度ですが、CapCut を使ったショート動画の制作もできます。
              </Text>
              <Text fontSize="lg" color="gray.500">
                仕事以外の時間はダーツをしたりギターをしています。😊
              </Text>
            </VStack>
          </GridItem>

          {/* 画像エリア */}
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Box
              borderRadius="full"
              borderWidth="4px"
              borderColor="black"
              overflow="hidden"
              boxSize="250px"
            >
              <Image
                src="/me.jpg"
                alt="Ryotaro Makita"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
