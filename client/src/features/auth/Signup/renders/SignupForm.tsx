import propTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdError } from "react-icons/md";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../helpers/signupHelper";
import { useAppSelector } from "../../../../app/hooks";

interface SignupFormProps {
  onSubmit: (values: any) => void;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  // State
  const [showPass, setShowPass] = useState(false);

  const { loading, error } = useAppSelector((state) => state.auth);

  // Handlers
  const handleInstantChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert status="error" display="flex" alignItems={"center"} mb={4}>
          <MdError fontSize={"18px"} />
          <Text ml={1}>{error}</Text>
        </Alert>
      )}
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Username:
          </FormLabel>

          <Input
            autoFocus
            {...register("username", {
              onBlur: handleInstantChange,
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

        <FormControl isInvalid={!!errors.email}>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Email:
          </FormLabel>
          <Input
            {...register("email", {
              onBlur: handleInstantChange,
              validate: {
                ...emailValidate,
              },
            })}
            bg={useColorModeValue("gray.200", "gray.700")}
            border={0}
          />
          {errors.email && (
            <FormErrorMessage>
              {String(errors?.email?.message)}
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
          {errors.password ? (
            <FormErrorMessage>
              {String(errors?.password?.message)}
            </FormErrorMessage>
          ) : (
            <FormHelperText>
              Use at least 8 characters, including a number and a symbol.
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.cfmPassword}>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Confirm Password:
          </FormLabel>
          <Input
            {...register("cfmPassword", {
              validate: {
                matches: (value: string) => {
                  if (value !== getValues("password"))
                    return "Passwords do not match";
                  return true;
                },
              },
            })}
            type={showPass ? "text" : "password"}
            bg={useColorModeValue("gray.200", "gray.700")}
            border={0}
          />
          {errors.cfmPassword && (
            <FormErrorMessage>
              {String(errors?.cfmPassword?.message)}
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
        Sign up
      </Button>
      <Text color={useColorModeValue("gray.600", "gray.300")} mt={5}>
        Already have an account?{" "}
        <Link
          as={RouterLink}
          to={"/login/"}
          color={useColorModeValue("blue.600", "blue.300")}
        >
          Login here
        </Link>
      </Text>
    </Box>
  );
};

SignupForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SignupForm;
