import { Alert, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loginUser } from "../authActions";
import SigninBanner from "./renders/SigninBanner";
import SigninForm from "./renders/SigninForm";
import { Heading } from "@chakra-ui/react";

const SigninView = () => {
  const rhf = useForm();
  // const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  const onSubmit = (values: any) => {
    rhf.reset();
    dispatch(loginUser(values)).then(() => {
      navigate("/protected/");
    });
  };

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      alignSelf={"center"}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 6 }}
      maxW={{ lg: "lg" }}
    >
      <SigninBanner />
      {error && (
        <Alert status="error" display="flex" alignItems={"center"}>
          <MdError fontSize={"18px"} />
          <Text ml={1}>{error}</Text>
        </Alert>
      )}
      <FormProvider {...rhf}>
        <SigninForm onSubmit={onSubmit} />
      </FormProvider>
    </Stack>
  );
};

export default SigninView;
