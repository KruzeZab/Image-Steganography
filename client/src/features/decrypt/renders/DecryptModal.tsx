import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";

interface DecryptModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const DecryptModal = ({ isOpen, onClose }: DecryptModalProps) => {
  const { loading, decrypted } = useAppSelector((state) => state.decrypt);

  useEffect(() => {
    return () => {
      onClose();
    };
  }, [onClose]);

  if (loading) {
    // Return sekeleton
    return (
      <Modal
        motionPreset="slideInBottom"
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader>Encrypted Image Information</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Stack>
              <Skeleton h="300px" />
              <Skeleton h="20px" />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal
      motionPreset="slideInBottom"
      size={"xl"}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Encrypted Image Information</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{decrypted?.message}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

DecryptModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default DecryptModal;
