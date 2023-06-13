import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ImageInput from "../../encrypt/renders/ImageInput";

interface DecryptFormProps {
  onSubmit: (file: File) => void;
}

const DecryptForm = ({ onSubmit }: DecryptFormProps) => {
  const [file, setFile] = useState<null | File>(null);

  const onChange = (file: File | null) => {
    setFile(file);
    if (file) onSubmit(file);
  };

  return (
    <>
      <Heading mb={5} size="md">
        Decrypt Image
      </Heading>

      <Box h="60vh">
        <ImageInput
          onChange={onChange}
          value={file}
          size="xl"
          imagePreview={false}
        />
      </Box>
    </>
  );
};

DecryptForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DecryptForm;
