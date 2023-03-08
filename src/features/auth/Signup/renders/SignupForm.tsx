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

interface SignupFormProps {
  onSubmit: (values: any) => void;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  return (
    <Box as={"form"} mt={10}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Username:
          </FormLabel>

          <Input
            autoFocus
            bg={useColorModeValue("gray.200", "gray.700")}
            border={0}
          />
        </FormControl>

        <FormControl>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Email:
          </FormLabel>
          <Input bg={useColorModeValue("gray.200", "gray.700")} border={0} />
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

        <FormControl>
          <FormLabel color={useColorModeValue("gray.600", "gray.300")}>
            Confirm Password:
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
        Sign up
      </Button>
    </Box>
  );
};

SignupForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default SignupForm;
