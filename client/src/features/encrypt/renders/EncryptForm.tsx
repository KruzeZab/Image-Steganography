import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { messageValidate, pubkeyValidate } from "../helpers/encryptHelpers";
import { useAppSelector } from "../../../app/hooks";
import ImageInput from "./ImageInput";

interface EncryptFormProps {
  onSubmit: (data: any) => void;
}

const EncryptForm = ({ onSubmit }: EncryptFormProps) => {
  const {
    formState: { errors },
    control,
    register,
    handleSubmit,
  } = useForm();

  const { loading } = useAppSelector((state) => state.encrypt);

  return (
    <>
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={"20px"}
        justify="flex-start"
        align={"stretch"}
      >
        <FormControl isInvalid={!!errors.image} mb={"20px"}>
          <Controller
            name="image"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Box h="40vh">
                <ImageInput onChange={onChange} value={value} size="sm" />
              </Box>
            )}
          />
          <FormErrorMessage>
            {String(
              errors?.image?.type === "required" && "You must select an image"
            )}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel>Your message:</FormLabel>
          <Textarea
            {...register("message", {
              validate: {
                ...messageValidate,
              },
            })}
            border="1px solid"
            borderColor="gray.400"
            placeholder="Your message"
            rows={10}
          />
          <FormErrorMessage>
            {String(errors?.message?.message)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.pubkey}>
          <FormLabel>Receiver&apos;s Public Key:</FormLabel>

          <Input
            {...register("pubkey", {
              validate: {
                ...pubkeyValidate,
              },
            })}
            border="1px solid"
            borderColor="gray.400"
            placeholder="Azy21Xpowt475psy31jpLwQ475"
          />
          <FormErrorMessage>{String(errors?.pubkey?.message)}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={loading}
          type="submit"
          variant="solid"
          colorScheme="blue"
          alignSelf="flex-start"
        >
          Encrypt
        </Button>
      </VStack>
    </>
  );
};

EncryptForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EncryptForm;
