import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  useBreakpointValue,
  type IconProps,
  Icon,
  useColorModeValue,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";

const SigninPage = () => {
  return (
    <Box position={"relative"}>
      <Container
        minH={"92vh"}
        as={Stack}
        justifyContent={"center"}
        justify
        maxW={"7xl"}
      >
        <Stack
          bg={useColorModeValue("white", "gray.800")}
          alignSelf={"center"}
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
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
                  Email:
                </FormLabel>
                <Input
                  autoFocus
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
              <Checkbox>
                <Text color={useColorModeValue("gray.600", "gray.300")}>
                  Show Password
                </Text>
              </Checkbox>
            </Stack>
            <Button
              // isLoading
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              colorScheme={"blue"}
            >
              Sign in
            </Button>
          </Box>
        </Stack>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Container>
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

export default SigninPage;
