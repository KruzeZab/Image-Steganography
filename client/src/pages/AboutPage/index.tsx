import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const AboutPage = () => {
  return (
    <>
      <Container maxW={"8xl"} pt={20}>
        <Box mb={4}>
          <Heading as="h2" pb={3} size="md">
            About Image Steganography
          </Heading>

          <Text size="md">
            Welcome to our image steganography website! We are a team of
            passionate professionals who have a deep understanding of the
            importance of data security and privacy. Our mission is to provide
            the most reliable and user-friendly image steganography service that
            enables you to keep your sensitive data safe and secure. Our website
            offers a range of advanced features that allow you to encrypt and
            decrypt data with ease. Our platform also includes authentication,
            ensuring that your data is always accessible only to you. We
            understand the importance of confidentiality and we are committed to
            ensuring that your data remains private and secure. Our image
            steganography service is designed to be user-friendly, and you
            don&apos;t need any special technical skills to use our platform.
            Our encryption and decryption process is simple and straightforward,
            allowing you to encrypt your data quickly and easily. You can also
            customize your encryption settings to meet your specific needs. One
            of the key features of our website is an interactive dashboard that
            provides you with a comprehensive view of your encryption and
            decryption history. With our dashboard, you can easily monitor and
            manage your data, and keep track of your activity on the platform.
            Our platform also allows you to view your encryption and decryption
            logs, providing you with an audit trail of your data activity. We
            understand that data security is critical, and we take all necessary
            measures to ensure that your data remains safe and secure. Our
            servers are maintained to the highest standards, and our encryption
            technology is advanced and secure. Our website is also regularly
            updated with the latest security patches to ensure that your data is
            always protected. At our website, we pride ourselves on providing
            excellent customer support. Our team is available 24/7 to answer any
            questions or concerns you may have, and to provide you with
            assistance whenever you need it. We are committed to providing you
            with the best image steganography service and support.
          </Text>
        </Box>
        <Box mb={4}>
          <Heading as="h2" pb={3} size="md">
            History
          </Heading>

          <Text size="md">
            Steganography (/ˌstɛgə&apos;nɒgrəfi/ (listen) STEG-ə-NOG-rə-fee) is
            the practice of representing information within another message or
            physical object, in such a manner that the presence of the
            information is not evident to human inspection. In
            computing/electronic contexts, a computer file, message, image, or
            video is concealed within another file, message, image, or video.
            The word steganography comes from Greek steganographia, which
            combines the words steganós (στεγανός), meaning &quot;covered or
            concealed&quot;, and -graphia (γραφή) meaning &quot;writing&quot;.
            The first recorded use of the term was in 1499 by Johannes
            Trithemius in his Steganographia, a treatise on cryptography and
            steganography, disguised as a book on magic. Generally, the hidden
            messages appear to be (or to be part of) something else: images,
            articles, shopping lists, or some other cover text. For example, the
            hidden message may be in invisible ink between the visible lines of
            a private letter. Some implementations of steganography that lack a
            shared secret are forms of security through obscurity, and
            key-dependent steganographic schemes adhere to Kerckhoffs&apos;s
            principle. The advantage of steganography over cryptography alone is
            that the intended secret message does not attract attention to
            itself as an object of scrutiny. Plainly visible encrypted messages,
            no matter how unbreakable they are, arouse interest and may in
            themselves be incriminating in countries in which encryption is
            illegal.
          </Text>

          <Text size="md" mb={2}>
            The first recorded uses of steganography can be traced back to 440
            BC in Greece, when Herodotus mentions two examples in his Histories.
            Histiaeus sent a message to his vassal, Aristagoras, by shaving the
            head of his most trusted servant, &quot;marking&quot; the message
            onto his scalp, then sending him on his way once his hair had
            regrown, with the instruction, &quot;When thou art come to Miletus,
            bid Aristagoras shave thy head, and look thereon.&quot;
            Additionally, Demaratus sent a warning about a forthcoming attack to
            Greece by writing it directly on the wooden backing of a wax tablet
            before applying its beeswax surface. Wax tablets were in common use
            then as reusable writing surfaces, sometimes used for shorthand. In
            his work Polygraphiae, Johannes Trithemius developed his so-called
            &quot;Ave-Maria-Cipher&quot; that can hide information in a Latin
            praise of God. &quot;Auctor Sapientissimus Conseruans Angelica
            Deferat Nobis Charitas Potentissimi Creatoris&quot; for example
            contains the concealed word VICIPEDIA.
          </Text>
        </Box>

        <Box mb={4}>
          <Heading as="h2" pb={3} size="md">
            Advantage of Steganography
          </Heading>

          <Text size="md" mb={2}>
            Steganography is a method that makes it easy to conceal a message
            within another to keep it secret. The result is that the hidden
            message remains hidden. A steganography approach can benefit images,
            videos, and audio files. Further advantages include:
          </Text>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Unlike other methods, steganography has the added benefit of
              hiding communications so well that they receive no attention.
              However, in countries where encryption is illegal, sending an
              encrypted message that you can easily decipher will raise
              suspicion and may be risky.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Steganography is a form of encryption that protects the
              information within a message and the connections between sender
              and receiver.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              The three essential elements of steganography—security, capacity,
              and robustness—make it worthwhile to covert information transfer
              via text files and develop covert communication channels.
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can store an encrypted copy of a file containing sensitive
              information on the server without fear of unauthorized parties
              gaining access to the data.
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Government and law enforcement agencies can communicate secretly
              with the help of steganography corporations.
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
