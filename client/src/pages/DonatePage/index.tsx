import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcDonate } from "react-icons/fc";

const DonatePage = () => {
  return (
    <Box textAlign="center" py={10} px={6} pt={8}>
      <Container
        maxW="4xl"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        minHeight="85vh"
      >
        <FcDonate fontSize={"64px"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Thank you for reaching out to donate us!
        </Heading>
        <Text fontSize="18px" color={useColorModeValue("gray.700", "gray.100")}>
          Currently, we are not accepting any donations. We will update this
          page once we are ready to accept donations. Thank you for your
          patience.
        </Text>
      </Container>
    </Box>
  );
};

export default DonatePage;
