import propTypes from "prop-types";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MdError } from "react-icons/md";
import { useAppSelector } from "../../../../app/hooks";
import { passwordValidate, usernameValidate } from "../helpers/signinHelper";

interface SigninFormProps {
  onSubmit: (values: any) => void;
}

const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  // State
  const [showPass, setShowPass] = useState(false);

  const { loading, error } = useAppSelector((state) => state.auth);

  return (
    <Box>
      {error && (
        <Alert status="error" display="flex" alignItems={"center"} mb={4}>
          <MdError fontSize={"18px"} />
          <Text ml={1}>{error}</Text>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
              Username:
            </FormLabel>
            <Input
              autoFocus
              {...register("username", {
                validate: {
                  ...usernameValidate,
                },
              })}
              bg={useColorModeValue("gray.200", "gray.700")}
              border={0}
            />
            {errors.username && (
              <FormErrorMessage>
                {String(errors?.username?.message)}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
              Password:
            </FormLabel>
            <Input
              {...register("password", {
                validate: {
                  ...passwordValidate,
                },
              })}
              type={showPass ? "text" : "password"}
              bg={useColorModeValue("gray.200", "gray.700")}
              border={0}
            />
            {errors.password && (
              <FormErrorMessage>
                {String(errors?.password?.message)}
              </FormErrorMessage>
            )}
          </FormControl>
          <Checkbox
            onChange={() => {
              setShowPass((pass) => !pass);
            }}
          >
            <Text color={useColorModeValue("gray.600", "gray.300")}>
              Show Password
            </Text>
          </Checkbox>
        </Stack>
        <Button
          type="submit"
          isLoading={loading}
          fontFamily={"heading"}
          mt={8}
          w={"full"}
          colorScheme={"blue"}
        >
          Sign in
        </Button>
      </form>

      <Text color={useColorModeValue("gray.600", "gray.300")} mt={5}>
        Don&apos;t have an account?{" "}
        <Link
          as={RouterLink}
          to={"/register/"}
          color={useColorModeValue("blue.600", "blue.300")}
        >
          Register here
        </Link>
      </Text>
    </Box>
  );
};

SigninForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SigninForm;
