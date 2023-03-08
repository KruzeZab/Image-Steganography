import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const SigninBanner = () => {
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.700", "white")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Login to continue{" "}
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
        Welcome back! Please log in to your account to start encrypting /
        decrypting images and manage your contents.
      </Text>
    </Stack>
  );
};

export default SigninBanner;
