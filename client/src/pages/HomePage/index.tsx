import { Box, Container, Heading } from "@chakra-ui/react";
import CTA from "./renders/CTA";
import FAQ from "./renders/FAQ";
import Features from "./renders/Features";
import Hero from "./renders/Hero";

const HomePage = () => {
  return (
    <>
      <Box mb={{ base: "40px", md: "60px", lg: "60px" }}>
        <Hero />
      </Box>
      <Container maxW="7xl">
        <Box mb={"70px"}>
          <Heading textAlign={"center"} as="h2" size="2xl" mb={8}>
            Features
          </Heading>
          <Features />
        </Box>
        <Box mb={"90px"}>
          <CTA />
        </Box>
        <Box mb={"60px"} id="faq">
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
