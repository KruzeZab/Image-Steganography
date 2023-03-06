import { Box, Container, Heading } from "@chakra-ui/react";
import Features from "./renders/Features";
import Hero from "./renders/Hero";

const HomePage = () => {
  return (
    <>
      <Box mb={"80px"}>
        <Hero />
      </Box>
      <Container maxW="7xl">
        <Box mb={10}>
          <Heading textAlign={"center"} as="h2" size="xl" mb={8}>
            Features
          </Heading>
          <Features />
        </Box>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quos,
        quis eius fugiat numquam reiciendis voluptatibus laborum error
        reprehenderit? Inventore ipsa deserunt, nobis consequuntur voluptatibus
        eum! Exercitationem a sequi dolore.
      </Container>
    </>
  );
};

export default HomePage;
