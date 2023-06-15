import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import type { DecryptPayload } from "../dashboardSlice";

function LoadingList() {
  return (
    <>
      <Heading as="h4" size="md" mb={5}>
        Your Encryptions
      </Heading>
      <SimpleGrid minChildWidth={"320px"} spacing={"20px"}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={i}>
            <Skeleton h="150px" mb={"10px"} />
            <Skeleton h="10px" />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

interface DecryptDetailProps {
  decrypts?: DecryptPayload[] | null;
}

function DecryptDetail({ decrypts }: DecryptDetailProps) {
  if (decrypts?.length === 0) {
    return (
      <Text align={"center"} my={20}>
        You have not decrypted any images yet.
      </Text>
    );
  }

  return (
    <>
      {decrypts?.map((decrypt) => (
        <Card key={decrypt.id}>
          <Image src={decrypt.encrypted_image} maxH="200px" />
          <CardBody>
            <Text>{decrypt.message}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

DecryptDetail.propTypes = {
  decrypts: PropTypes.array,
};

interface DecryptListProps {
  loading: boolean;
  decrypts: DecryptPayload[] | null;
}

const DecryptList = ({ loading, decrypts }: DecryptListProps) => {
  if (loading) {
    return <LoadingList />;
  }

  return (
    <>
      {decrypts && (
        <Heading as="h4" size="md" mb={5}>
          Your Decryptions
        </Heading>
      )}

      <SimpleGrid minChildWidth={"320px"} spacing={"20px"}>
        <DecryptDetail decrypts={decrypts} />
      </SimpleGrid>
    </>
  );
};

DecryptList.propTypes = {
  loading: PropTypes.bool,
  decrypts: PropTypes.array,
};

export default DecryptList;
