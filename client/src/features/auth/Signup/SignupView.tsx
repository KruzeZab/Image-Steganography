import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { createUser } from "../authActions";
import SignupBanner from "./renders/SignupBanner";
import SignupForm from "./renders/SignupForm";

const SignupView = () => {
  const rhf = useForm();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = async (values: any) => {
    const res = await dispatch(createUser(values));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <>
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
        spacing={{ base: 4 }}
        maxW={{ lg: "lg" }}
      >
        <SignupBanner />
        <FormProvider {...rhf}>
          <SignupForm onSubmit={onSubmit} />
        </FormProvider>
      </Stack>
    </>
  );
};

export default SignupView;
