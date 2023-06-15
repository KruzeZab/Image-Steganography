import {
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const GuidePage = () => {
  return (
    <Container maxW={"8xl"} pt={20}>
      <Heading as="h2" pb={3} size="md">
        How it works?
      </Heading>
      <Text size="md" mb={4}>
        Image steganography is a technique that involves hiding secret
        information within an image to ensure its covert transmission or
        storage. The goal is to make the presence of the hidden data
        undetectable to anyone who may intercept or analyze the image.
        Here&apos;s overview of how this app works:
      </Text>

      <OrderedList>
        <ListItem mb={4}>
          <strong>Image Selection: </strong>
          The process begins by selecting an appropriate cover image that will
          be used to hide the secret message. The cover image should ideally be
          large enough to accommodate the additional data without visibly
          altering its appearance.
        </ListItem>
        <ListItem mb={4}>
          <strong>Secret Message Encoding: </strong>
          The secret message, which can be any form of digital data, such as
          text, files, or other images, needs to be encoded before it can be
          embedded within the cover image. Encoding methods may vary depending
          on the chosen steganography algorithm.
        </ListItem>
        <ListItem mb={4}>
          <strong>Steganography Algorithms:</strong>
          There are various steganography algorithms available, each with its
          own approach to hiding data within an image. Some common techniques
          include:
          <UnorderedList>
            <ListItem mb={4}>
              <strong>Least Significant Bit (LSB) Insertion: </strong>
              This method involves replacing the least significant bit of each
              pixel in the cover image with a bit from the secret message. Since
              the LSB alteration is minimal, the change is often imperceptible
              to the human eye.
            </ListItem>
            <ListItem mb={4}>
              <strong>Spread Spectrum Technique: </strong>
              This approach involves distributing the secret data across
              multiple pixels in the cover image, making it harder to detect any
              alterations. It uses mathematical transformations and frequency
              domain analysis to embed the data.
            </ListItem>
            <ListItem mb={4}>
              <strong>Transform Domain Techniques: </strong>
              hese methods leverage mathematical transformations such as
              Discrete Cosine Transform (DCT) or Discrete Fourier Transform
              (DFT) to hide the secret data within the transformed coefficients
              of the cover image.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem mb={4}>
          <strong>Embedding the Secret Message: </strong>
          Once the secret message is encoded and the steganography algorithm is
          selected, the embedding process begins. It typically involves the
          following steps:
          <UnorderedList>
            <ListItem mb={4}>
              Break the secret message into smaller chunks or packets.
            </ListItem>
            <ListItem mb={4}>
              Determine the specific locations within the cover image where the
              data will be inserted based on the steganography algorithm.
            </ListItem>
            <ListItem mb={4}>
              Embed the data by modifying the pixel values or their attributes
              in the cover image according to the chosen algorithm.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <strong>Extraction of the Secret Message</strong>
          To retrieve the hidden data from the steganographic image, the
          following steps are generally followed:
          <UnorderedList>
            <ListItem mb={4}>Locate the steganographic image.</ListItem>
            <ListItem mb={4}>
              Apply the reverse steganography algorithm to extract the embedded
              data from the image.
            </ListItem>
            <ListItem mb={4}>
              Reassemble the extracted data packets to reconstruct the original
              secret message.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </Container>
  );
};

export default GuidePage;
