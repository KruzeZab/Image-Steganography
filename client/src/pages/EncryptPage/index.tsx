import { Box, Container } from "@chakra-ui/react";
import Crumb from "../../components/Crumb";

import EncryptView from "../../features/encrypt/EncryptView";

const EncryptPage = () => {
  return (
    <Container maxW={"8xl"} pt={20} mb={"30px"} minH="90vh">
      <Box mb={5}>
        <Crumb />
      </Box>
      <EncryptView />
    </Container>
  );
};

export default EncryptPage;
