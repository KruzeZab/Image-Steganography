import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Tooltip,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdMenu,
  MdClose,
  MdDarkMode,
  MdHelp,
  MdLightMode,
} from "react-icons/md";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" w="100%" zIndex={999}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          ml={{ base: -2, lg: 1 }}
          display={"flex"}
          alignItems={"center"}
        >
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={onToggle}
            icon={
              isOpen ? (
                <MdClose fontSize={"18px"} color="gray.600" />
              ) : (
                <MdMenu fontSize={"18px"} color="gray.600" />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <Text
            textAlign={useBreakpointValue({ base: "center", lg: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            ml={1.5}
            fontWeight={"bold"}
          >
            Image Steganography
          </Text>
          <Flex display={{ base: "none", lg: "flex" }} ml={5}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex>
          <HStack mr={2} spacing={2}>
            <Tooltip
              label={
                colorMode === "light" ? "Enable dark mode" : "Enable light mode"
              }
              openDelay={100}
            >
              <IconButton
                onClick={toggleColorMode}
                variant="unstyled"
                aria-label={
                  colorMode === "light"
                    ? "enable dark Mode"
                    : "enable light mode"
                }
                icon={
                  colorMode === "light" ? (
                    <MdDarkMode
                      fontSize={"21px"}
                      color={useColorModeValue("gray.600", "gray.200")}
                    />
                  ) : (
                    <MdLightMode
                      fontSize={"21px"}
                      color={useColorModeValue("gray.600", "gray.200")}
                    />
                  )
                }
              />
            </Tooltip>
            <Tooltip label="Help and support" openDelay={100}>
              <IconButton
                variant="unstyled"
                aria-label={"Help and support"}
                icon={
                  <MdHelp
                    fontSize={"21px"}
                    color={useColorModeValue("gray.600", "gray.200")}
                  />
                }
              />
            </Tooltip>
          </HStack>

          <Stack
            flex={{ base: 1, lg: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", lg: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              href={"#"}
              _hover={{
                bg: "blue.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={{ lg: 2, xl: 4 }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "about/",
  },
  {
    label: "Get started",
    href: "#",
  },
  {
    label: "How it works?",
    href: "#",
  },
  {
    label: "View Github",
    href: "#",
  },
  {
    label: "Donate us",
    href: "#",
  },
  {
    label: "FAQs",
    href: "#",
  },
];

export default Header;
