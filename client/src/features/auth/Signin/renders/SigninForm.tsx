import propTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface SigninFormProps {
  onSubmit: (values: any) => void;
}

const SigninForm = ({ onSubmit }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext();

  // State
  const [showPass, setShowPass] = useState(false);

  // Handlers
  const handleInstantChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <Box as={"form"} mt={10} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Email:
          </FormLabel>
          <Input
            autoFocus
            {...register("username", {
              onBlur: handleInstantChange,
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
            {...register("password", {})}
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
        // isLoading
        fontFamily={"heading"}
        mt={8}
        w={"full"}
        colorScheme={"blue"}
      >
        Sign in
      </Button>
    </Box>
  );
};

SigninForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SigninForm;
