import { Box, Container } from "@chakra-ui/react";
import Crumb from "../../components/Crumb";
import DashboardView from "../../features/dashboard/DashboardView";

const DashboardPage = () => {
  return (
    <Container maxW={"8xl"} pt={20} mb={"30px"} minH="90vh">
      <Box mb={5}>
        <Crumb />
      </Box>
      <DashboardView />
    </Container>
  );
};

export default DashboardPage;
