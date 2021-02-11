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
        <MenuItem to="/#about">About me</MenuItem>
        <MenuItem to="/#interests">Interests</MenuItem>
        <MenuItem to="/#experience">Experience</MenuItem>
        <MenuItem to="/#portfolio">Portfolio</MenuItem>
        <MenuItem to="/media">Media</MenuItem>
        <MenuItem to="https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:14891906/">
          <Button rounded="md" colorScheme="blue">
            Resume
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
