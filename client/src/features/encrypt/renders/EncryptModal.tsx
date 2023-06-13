import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { IoCopy } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { useAppSelector } from "../../../app/hooks";

interface EncryptModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const EncryptModal = ({ isOpen, onClose }: EncryptModalProps) => {
  const { loading, encrypted } = useAppSelector((state) => state.encrypt);
  const { hasCopied, onCopy } = useClipboard(encrypted?.encrypted_image ?? "");

  useEffect(() => {
    if (!isOpen) return;

    if (!encrypted) {
      onClose();
    }

    return () => {
      onClose();
    };
  }, []);

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
      <ModalContent pb={4}>
        <ModalHeader>Encrypted Image Information</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4}>
            <Box p={1}>
              <Text mb={1}>Encrypted Image:</Text>
              <Image
                mb={2}
                borderRadius={"md"}
                src={encrypted?.encrypted_image}
                alt="encrypted image information"
              />
              <Box textAlign={"right"}>
                <Button
                  as={"a"}
                  href={encrypted?.encrypted_image}
                  size="sm"
                  target="_blank"
                  colorScheme={"blue"}
                  rightIcon={<MdDownload fontSize={"18px"} />}
                >
                  Download
                </Button>
              </Box>
            </Box>

            <FormControl>
              <FormLabel>Image Link:</FormLabel>
              <InputGroup>
                <Input value={encrypted?.encrypted_image} readOnly />
                <Tooltip label={hasCopied ? "Copied" : "Copy to clipboard"}>
                  <InputRightAddon
                    cursor={"pointer"}
                    as="button"
                    type="button"
                    bg="blue.500"
                    onClick={onCopy}
                  >
                    <IoCopy fontSize="18px" color="#fff" />
                  </InputRightAddon>
                </Tooltip>
              </InputGroup>
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

EncryptModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default EncryptModal;
