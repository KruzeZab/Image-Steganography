import propTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface SigninFormProps {
  onSubmit: (values: any) => void;
}

const SigninForm = ({ onSubmit }: SigninFormProps) => {
  return (
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
  );
};

SigninForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SigninForm;
