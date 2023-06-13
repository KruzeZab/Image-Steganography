import PropTypes from "prop-types";
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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  MdMenu,
  MdClose,
  MdDarkMode,
  MdHelp,
  MdLightMode,
  MdEnhancedEncryption,
  MdOutlineLogout,
} from "react-icons/md";
import { AiOutlineDashboard, AiOutlineUnlock } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { type NavItem, AUTH_NAV_ITEMS, NAV_ITEMS } from "../../data/links";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { logout, type UserPayload } from "../../features/auth/authSlice";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box as="header" position="fixed" w="100%" zIndex={999}>
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
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textUnderline: "none" }}
            textAlign={useBreakpointValue({ base: "center", lg: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            ml={1}
            fontWeight={"bold"}
          >
            Image Steganography
          </Link>
          <Flex display={{ base: "none", lg: "flex" }} ml={5}>
            <DesktopNav navItems={user ? AUTH_NAV_ITEMS : NAV_ITEMS} />
          </Flex>
        </Flex>

        <Flex>
          <HStack mr={2} spacing={2}>
            <Tooltip
              label={
                colorMode === "light" ? "Enable dark mode" : "Enable light mode"
              }
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
            <Tooltip label="How it works">
              <IconButton
                display={"flex"}
                alignItems="center"
                justifyContent={"flex-start"}
                as={RouterLink}
                to={"/guide"}
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
        </Flex>
        {!user ? (
          <AuthButtons />
        ) : (
          <Profile handleLogout={handleLogout} user={user} />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={user ? AUTH_NAV_ITEMS : NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

const Profile = ({
  user,
  handleLogout,
}: {
  user: UserPayload;
  handleLogout: () => void;
}) => {
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar size="sm" name={"Jose San"} src="" />
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={<AiOutlineDashboard fontSize={"18px"} />}
            as={RouterLink}
            to="/dashboard"
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<MdEnhancedEncryption fontSize="18px" />}
            as={RouterLink}
            to="/encrypt"
          >
            Encrypt Image
          </MenuItem>
          <MenuItem
            icon={<AiOutlineUnlock fontSize="18px" />}
            as={RouterLink}
            to="/decrypt"
          >
            Decrypt Image
          </MenuItem>
          <MenuItem
            icon={<MdOutlineLogout fontSize="18px" />}
            as="button"
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

const AuthButtons = () => {
  return (
    <Stack
      flex={{ base: 1, lg: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        as={RouterLink}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        to={"/login"}
      >
        Sign In
      </Button>
      <Button
        as={RouterLink}
        display={{ base: "none", lg: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"blue.400"}
        to="/register"
        _hover={{
          bg: "blue.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={{ lg: 2, xl: 4 }}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            isExternal={navItem.external}
            to={navItem.href ?? "#"}
            display="flex"
            alignItems={"center"}
            as={RouterLink}
            p={1}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
            <Box pl={1} as="span">
              {navItem.external && <BiLinkExternal />}
            </Box>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href, external }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={RouterLink}
        to={href ?? "#"}
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
        <Box pl={1} as="span">
          {external && <BiLinkExternal />}
        </Box>
      </Flex>
    </Stack>
  );
};

export default Header;
