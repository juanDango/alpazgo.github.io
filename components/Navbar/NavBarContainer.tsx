import { Flex, DarkMode } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NavBarContainer = ({ children }: Props) => {
  return (
    <DarkMode>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        py={3}
        px={10}
        bg="gray.800"
        color="white"
        style={{ position: "fixed", zIndex: 999 }}
      >
        {children}
      </Flex>
    </DarkMode>
  );
};

export default NavBarContainer;
