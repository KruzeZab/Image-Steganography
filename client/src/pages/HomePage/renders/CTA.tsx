import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import ctaBanner from "./cta-banner.jpeg";

export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        justify="space-between"
        spacing={{ base: 8, md: 12 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            Start Journey Today
          </Heading>
          <Text>
            Don&apos;t miss out on this incredible opportunity to join and be a
            part of something truly special. By joining us today, you have
            access to exclusive benefits. So why wait? Take action now and join
            us in our mission to create a better future for all.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
              as={RouterLink}
              to="/register"
            >
              Get started
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={{ base: "center", md: "flex-end" }}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"xl"}
            width={{ base: "100%", lg: "80%" }}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={ctaBanner}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
