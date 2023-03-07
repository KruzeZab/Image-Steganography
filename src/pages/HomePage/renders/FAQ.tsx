import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { faqs } from "../../../data";

interface SingleFAQProps {
  title: string;
  description: string;
}

const SingleFAQ = ({ title, description }: SingleFAQProps) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontWeight={"600"} p={1}>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize="16px">
        {description}
      </AccordionPanel>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <Accordion allowMultiple>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={10} rowGap={5}>
        {faqs.map(({ title, description }) => (
          <Box key={title}>
            <SingleFAQ title={title} description={description} />
          </Box>
        ))}
      </SimpleGrid>
    </Accordion>
  );
};

export default FAQ;
