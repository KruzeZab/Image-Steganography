import {
  type ToastPosition,
  useBreakpointValue,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decryptMessage } from "./decryptActions";
import DecryptForm from "./renders/DecryptForm";
import DecryptModal from "./renders/DecryptModal";

const DecryptView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const placement = useBreakpointValue({
    base: "bottom" as ToastPosition,
    md: "top-right" as ToastPosition,
  });

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.decrypt);

  const onSubmit = (file: File) => {
    dispatch(decryptMessage(file));
    onOpen();
  };

  const renderErrorToast = useCallback(() => {
    if (!error) return;

    toast.closeAll();
    toast({
      position: placement,
      title: "Error decrypting message",
      description: error,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }, [toast, error]);

  useEffect(() => {
    if (error) {
      renderErrorToast();
      onClose();
    }
  }, [error, renderErrorToast]);

  return (
    <>
      <DecryptForm onSubmit={onSubmit} />
      <DecryptModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default DecryptView;
