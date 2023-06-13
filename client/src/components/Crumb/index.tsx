import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routeElements } from "../../routes";

const Crumb = () => {
  const breadcrumbs = useBreadcrumbs(routeElements);
  const navColors = useColorModeValue("gray.800", "gray.100");

  return (
    <Breadcrumb>
      {breadcrumbs.map(({ breadcrumb, match }) => {
        if (match.pathname === "/") {
          return (
            <BreadcrumbItem key={match.pathname} color="blue.500">
              <BreadcrumbLink as={RouterLink} to={match.pathname}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        } else if (match.pathname === location.pathname) {
          return (
            <BreadcrumbItem key={match.pathname} isCurrentPage>
              <Text color={navColors}>{breadcrumb}</Text>
            </BreadcrumbItem>
          );
        }
        return (
          <BreadcrumbItem
            key={match.pathname}
            color={useColorModeValue("gray.100", "gray.500")}
            _hover={{ underline: "none" }}
          >
            <BreadcrumbLink as={RouterLink} to={match.pathname}>
              {breadcrumb}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Crumb;
