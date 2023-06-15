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
import type { EncryptPayload } from "../dashboardSlice";

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

EncryptDetail.propTypes = {
  encrypts: PropTypes.array,
};

interface EncryptDetailProps {
  encrypts?: EncryptPayload[] | null;
}

function EncryptDetail({ encrypts }: EncryptDetailProps) {
  if (encrypts?.length === 0) {
    return (
      <Text align={"center"} my={20}>
        You have not encrypted any images yet.
      </Text>
    );
  }

  return (
    <>
      {encrypts?.map((encrypt) => (
        <Card key={encrypt.id}>
          <Image src={encrypt.encrypted_image} maxH="200px" />
          <CardBody>
            <Text>{encrypt.message}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

interface EncryptListProps {
  loading: boolean;
  encrypts: EncryptPayload[] | null;
}

const EncryptList = ({ loading, encrypts }: EncryptListProps) => {
  if (loading) {
    return <LoadingList />;
  }

  return (
    <>
      {encrypts && (
        <Heading as="h4" size="md" mb={5}>
          Your Encryptions
        </Heading>
      )}
      <SimpleGrid minChildWidth={"320px"} spacing={"20px"}>
        <EncryptDetail encrypts={encrypts} />
      </SimpleGrid>
    </>
  );
};

EncryptList.propTypes = {
  loading: PropTypes.bool.isRequired,
  encrypts: PropTypes.array,
};

export default EncryptList;
