import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Skeleton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { IoCopy } from "react-icons/io5";

interface PubkeyBoxProps {
  pubkey: string;
  loading: boolean;
}

const PubKeyBox = ({ loading, pubkey }: PubkeyBoxProps) => {
  const { hasCopied, onCopy } = useClipboard("");

  if (loading) {
    return (
      <Box mb={10}>
        <Skeleton h="20px" />
      </Box>
    );
  }

  return (
    <FormControl mb={"30px"}>
      <FormLabel>Your Public Key:</FormLabel>
      <InputGroup>
        <Input value={pubkey} readOnly />
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
  );
};

PubKeyBox.propTypes = {
  pubkey: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PubKeyBox;
