import {
  type ToastPosition,
  useBreakpointValue,
  useDisclosure,
  useToast,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { encryptMessage } from "./encryptActions";

import EncryptForm from "./renders/EncryptForm";
import EncryptModal from "./renders/EncryptModal";

const EncryptView = () => {
  const rhf = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const placement = useBreakpointValue({
    base: "bottom" as ToastPosition,
    md: "top-right" as ToastPosition,
  });

  const dispatch = useAppDispatch();
  const { loading, encrypted, error } = useAppSelector(
    (state) => state.encrypt
  );

  const renderErrorToast = useCallback(() => {
    if (!error) return;

    toast.closeAll();
    toast({
      position: placement,
      title: "Error encrypting message",
      description: error,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }, [toast, error]);

  const renderSuccessToast = useCallback(() => {
    if (!encrypted) return;

    toast.closeAll();
    toast({
      position: placement,
      title: "Message encrypted successfully",
      description: "Your message has been encrypted successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [toast, encrypted]);

  const onSubmit = async (values: any) => {
    dispatch(encryptMessage(values));
  };

  useEffect(() => {
    if (loading) return;

    if (error) renderErrorToast();

    if (encrypted) {
      renderSuccessToast();
      onOpen();
    }
  }, [loading, error, encrypted, renderErrorToast, renderSuccessToast]);

  return (
    <>
      <Box>
        <Heading mb={5} size="md">
          Encrypt Image
        </Heading>
        <FormProvider {...rhf}>
          <EncryptForm onSubmit={onSubmit} />
        </FormProvider>
      </Box>

      <EncryptModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default EncryptView;
