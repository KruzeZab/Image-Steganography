import { Stack, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loginUser } from "../authActions";
import SigninBanner from "./renders/SigninBanner";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const navigate = useNavigate();
  const rhf = useForm();

  const dispatch = useAppDispatch();

  const { loading, user } = useAppSelector((state) => state.auth);

  const onSubmit = (values: any) => {
    dispatch(loginUser(values)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") navigate("/encrypt");
    });
  };

  useEffect(() => {
    if (loading) return;

    if (user) {
      navigate("/encrypt");
    }
  }, []);

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      alignSelf={"center"}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 4 }}
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
