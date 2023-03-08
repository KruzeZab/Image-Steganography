import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  type IconProps,
  Icon,
  useColorModeValue,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const SignupPage = () => {
  return (
    <Box position={"relative"}>
      <Container
        pt={40}
        minH={"90vh"}
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Protect your privacy with duo{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, blue.400,cyan.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Image and Steganography
          </Heading>
        </Stack>
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          alignSelf={"flex-start"}
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
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
              Join our community today! Create an account to encrypt your
              messages and share them with your friends. It is 100% free and
              always will be.
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
                  Username:
                </FormLabel>

                <Input
                  autoFocus
                  bg={useColorModeValue("gray.200", "gray.700")}
                  border={0}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
                  Email:
                </FormLabel>
                <Input
                  bg={useColorModeValue("gray.200", "gray.700")}
                  border={0}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
                  Password:
                </FormLabel>
                <Input
                  type="password"
                  bg={useColorModeValue("gray.200", "gray.700")}
                  border={0}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
                  Confirm Password:
                </FormLabel>
                <Input
                  type="password"
                  bg={useColorModeValue("gray.200", "gray.700")}
                  border={0}
                />
              </FormControl>
            </Stack>
            <Button
              // isLoading
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              colorScheme={"blue"}
            >
              Sign up
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
};

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default SignupPage;
