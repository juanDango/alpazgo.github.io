import { Box, Button, Stack } from "@chakra-ui/react";
import MenuItem from "components/Navbar/MenuItem";

type Props = {
  isOpen?: boolean;
};

const MenuLinks = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">About</MenuItem>
        <MenuItem to="/">Interests</MenuItem>
        <MenuItem to="/">Experience</MenuItem>
        <MenuItem to="/">Portfolio</MenuItem>
        <MenuItem to="/">Contact </MenuItem>
        <MenuItem to="/">
          <Button rounded="md" colorScheme="blue">
            Resume
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
