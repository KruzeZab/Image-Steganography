import { Box, Container, Heading } from "@chakra-ui/react";

import CTA from "./renders/CTA";
import FAQ from "./renders/FAQ";
import Features from "./renders/Features";
import Hero from "./renders/Hero";

const HomePage = () => {
  return (
    <>
      <Box mb={"80px"}>
        <Hero />
      </Box>
      <Container maxW="7xl">
        <Box>
          <Heading textAlign={"center"} as="h2" size="2xl" mb={8}>
            Features
          </Heading>
          <Features />
        </Box>
        <Box>
          <CTA />
        </Box>
        <Box mb={"60px"}>
          <Heading textAlign={"center"} as="h2" size="xl" mb={8}>
            Frequently Asked Questions
          </Heading>
          <FAQ />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
