import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { features } from "../../../data";

interface SingleFeatureProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const SingleFeature = ({ title, icon, description }: SingleFeatureProps) => {
  return (
    <Box w={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Stack align={"start"} spacing={3}>
        <Flex
          w={14}
          h={14}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{title}</Heading>
          <Text mt={2} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const Feature = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      {features.map(({ title, icon, description }) => (
        <SingleFeature
          key={title}
          title={title}
          icon={icon}
          description={description}
        />
      ))}
    </SimpleGrid>
  );
};

export default Feature;
