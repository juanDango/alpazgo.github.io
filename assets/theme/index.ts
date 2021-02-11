import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: () => ({
    "#__next": {
      height: "100%",
    },
  }),
};

const theme = extendTheme({ config, styles });
export default theme;
