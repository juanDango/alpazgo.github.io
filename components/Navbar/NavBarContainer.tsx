import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const NavBarContainer = ({ children }: Props) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Flex
      bg={bg}
      color={color}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={3}
      px={14}
      style={{ position: "fixed", zIndex: 999 }}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
