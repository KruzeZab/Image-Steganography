import {
  Box,
  IconButton,
  Image,
  Text,
  type ToastPosition,
  Tooltip,
  useBreakpointValue,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useCallback, useMemo, useState } from "react";
import { type FileRejection, useDropzone } from "react-dropzone";
import { MdClose, MdCloudUpload } from "react-icons/md";

const StyledDropZone = styled(Box)`
  border: 1px dashed #4299e1;
  border-radius: 0.5rem;
  border-width: 3px;
  display: flex;
  gap: 5px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4299e1;
  min-height: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;

interface ImageInputProps {
  onChange: (file: File | null) => void;
  value: File | null;
  size: "sm" | "md" | "lg" | "xl";
  imagePreview: boolean;
}

const ImageInput = ({
  onChange,
  value,
  size,
  imagePreview,
}: ImageInputProps) => {
  const [file, setFile] = useState<File | null>(value);
  const imageBg = useColorModeValue("gray.100", "gray.700");

  const toast = useToast();
  const placement = useBreakpointValue({
    base: "bottom" as ToastPosition,
    md: "top-right" as ToastPosition,
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFile(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        onChange(file);
      }
    },
    [onChange]
  );

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const fileRejection = fileRejections[0];
    if (fileRejection.errors[0].code === "file-invalid-type") {
      toast.closeAll();
      toast({
        position: placement,
        title: "Invalid file type",
        description: "Only PNG, JPG and JPEG files are allowed",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
  });

  const renderDropZone = useMemo(() => {
    if (imagePreview && file && "preview" in file) {
      return (
        <Box position="relative" w="100%" h="100%">
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgGradient="linear(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)"
          />
          <Image boxSize={size} src={String(file.preview)} alt={file.name} />
        </Box>
      );
    } else {
      return (
        <>
          <MdCloudUpload fontSize={"56px"} />
          <input {...getInputProps()} />

          {isDragActive ? (
            <Text>Drop the image here</Text>
          ) : (
            <Text>
              Drag and drop the image here, or click to select an image
            </Text>
          )}
        </>
      );
    }
  }, [file, isDragActive, getInputProps]);
  return (
    <StyledDropZone {...getRootProps()} _hover={{ bg: imageBg }}>
      {renderDropZone}
      {imagePreview && file && (
        <Tooltip label="Remove image">
          <IconButton
            size={"sm"}
            isRound
            position={"absolute"}
            top={"-10px"}
            right={"-5px"}
            aria-label="Remove image"
            icon={<MdClose fontSize={"18px"} />}
            onClick={(e) => {
              setFile(null);
              e.stopPropagation();
            }}
          />
        </Tooltip>
      )}
    </StyledDropZone>
  );
};

ImageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  imagePreview: PropTypes.bool,
};

ImageInput.defaultProps = {
  size: "sm",
  imagePreview: true,
};

export default ImageInput;
