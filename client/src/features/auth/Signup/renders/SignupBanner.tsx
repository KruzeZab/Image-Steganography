import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const SignupBanner = () => {
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.700", "white")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Create an account{" "}
        <Text
          as={"span"}
          bgGradient="linear(to-r, blue.400,cyan.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Text
        color={useColorModeValue("gray.600", "gray.300")}
        fontSize={{ base: "sm", sm: "md" }}
      >
        Join our community today! Create an account to encrypt your messages and
        share them with your friends. It is 100% free and always will be.
      </Text>
    </Stack>
  );
};

export default SignupBanner;
