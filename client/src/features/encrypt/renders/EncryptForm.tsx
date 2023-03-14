import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Textarea,
  VStack,
  InputGroup,
  InputRightElement,
  Tooltip,
  FormErrorMessage,
  useClipboard,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import { IoMdClipboard } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { messageValidate, pubkeyValidate } from "../helpers/encryptHelpers";
import ImageInput from "./ImageInput";

interface EncryptFormProps {
  onSubmit: (data: any) => void;
}

const EncryptForm = ({ onSubmit }: EncryptFormProps) => {
  const {
    formState: { errors },
    control,
    getValues,
    setValue,
    register,
    handleSubmit,
  } = useForm();

  const {
    onCopy,
    setValue: setCopyValue,
    hasCopied,
  } = useClipboard(getValues("pubkey"));

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={"20px"}
      justify="flex-start"
      align={"stretch"}
    >
      <FormControl isInvalid={!!errors.image}>
        <Controller
          name="image"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ImageInput onChange={onChange} value={value} />
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
        <FormErrorMessage>{String(errors?.message?.message)}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.pubkey}>
        <FormLabel>Receiver&apos;s Public Key:</FormLabel>
        <InputGroup>
          <Input
            {...register("pubkey", {
              onChange: (e) => {
                setCopyValue(e.target.value);
                setValue("pubkey", e.target.value);
              },
              validate: {
                ...pubkeyValidate,
              },
            })}
            border="1px solid"
            borderColor="gray.400"
            placeholder="Azy21Xpowt475psy31jpLwQ475"
          />
          <InputRightElement>
            <Tooltip
              label="Copy to clipboard"
              aria-label={hasCopied ? "Copied" : "Copy to clipboard"}
            >
              <IconButton
                colorScheme={"blue"}
                h="1.75rem"
                size="sm"
                aria-label={hasCopied ? "Copied" : "Copy to clipboard"}
                icon={<IoMdClipboard fontSize={"18px"} />}
                onClick={onCopy}
              />
            </Tooltip>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{String(errors?.pubkey?.message)}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        variant="solid"
        colorScheme="blue"
        alignSelf="flex-start"
      >
        Encrypt
      </Button>
    </VStack>
  );
};

EncryptForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EncryptForm;
