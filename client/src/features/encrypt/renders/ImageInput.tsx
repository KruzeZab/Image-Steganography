import {
  Box,
  IconButton,
  Image,
  Text,
  type ToastPosition,
  Tooltip,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
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
  cursor: pointer;
  min-height: 40vh;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #edf2f7;
  }

  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;

interface ImageInputProps {
  onChange: (file: File | null) => void;
  value: File | null;
}

const ImageInput = ({ onChange, value }: ImageInputProps) => {
  const [file, setFile] = useState<File | null>(value);

  const toast = useToast();
  const placement = useBreakpointValue({
    base: "bottom" as ToastPosition,
    md: "top-right" as ToastPosition,
  });

  useEffect(() => {
    onChange(file);
  }, [file, onChange]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFile(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const fileRejection = fileRejections[0];
    if (fileRejection.errors[0].code === "file-invalid-type") {
      toast.closeAll();
      toast({
        position: placement ?? "top-right",
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

  const renderDropZone = useCallback(() => {
    if (file && "preview" in file) {
      return <Image boxSize="sm" src={String(file.preview)} alt={file.name} />;
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
    <StyledDropZone {...getRootProps()}>
      {renderDropZone()}
      {file && (
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

export default ImageInput;
