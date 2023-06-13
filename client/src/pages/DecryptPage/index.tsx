import { Box, Container } from "@chakra-ui/react";
import Crumb from "../../components/Crumb";
import DecryptView from "../../features/decrypt/DecryptView";

const DecryptPage = () => {
  return (
    <Container maxW={"8xl"} pt={20} mb={"30px"} minH="90vh">
      <Box mb={5}>
        <Crumb />
      </Box>
      <DecryptView />
    </Container>
  );
};

export default DecryptPage;
