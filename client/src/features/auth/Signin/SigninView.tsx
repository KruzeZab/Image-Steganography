import { Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loginUser, logout } from "../authSlice";
import SigninBanner from "./renders/SigninBanner";
import SigninForm from "./renders/SigninForm";

const SigninView = () => {
  const rhf = useForm();
  // const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

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
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
    >
      <SigninBanner />
      {user && <h1>{user.username}</h1>}
      <Button onClick={() => dispatch(logout())}>Logout</Button>
      <FormProvider {...rhf}>
        <SigninForm onSubmit={onSubmit} />
      </FormProvider>
    </Stack>
  );
};

export default SigninView;
