import { Stack, useColorModeValue } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import SigninBanner from "./renders/SigninBanner";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit = (values: any) => {
    rhf.reset();
  };

  return (
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
      <SigninBanner />
      <FormProvider {...rhf}>
        <SigninForm onSubmit={onSubmit} />
      </FormProvider>
    </Stack>
  );
};

export default SigninView;
