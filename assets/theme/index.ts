import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const colors = {
  // background: "#F2F2F2",
  // darkBackground: "#111535",
  // success: "#3DFE96",
  // primaryAlt: "#343B73",
  // accent: "#0057FF",
  // primary: {
  //   100: "#343B73",
  //   200: "#343B73",
  //   300: "#0C0F2F",
  //   400: "#0C0F2F",
  //   500: "#0C0F2F",
  //   600: "#0C0F2F",
  //   700: "#0C0F2F",
  //   800: "#0C0F2F",
  //   900: "#0C0F2F", //DEJAR ESTE
  // },
  // secondary: {
  //   100: "#FFCE85",
  //   200: "#FFCE85", //DEJAR ESTE
  //   300: "#FFCE85",
  //   400: "#FFCE85",
  //   500: "#FFCE85",
  //   600: "#FFCE85",
  //   700: "#FFCE85",
  //   800: "#FFCE85",
  //   900: "#FFCE85",
  // },
};

const components = {
  Button: {},
  Input: {
    //TO-DO: move input bg and border style from components to here
  },
};

const styles = {
  global: () => ({
    // styles for the `body`
    body: {
      //bg: colors.primary["900"],
    },
    "#__next": {
      height: "100%",
    },
  }),
};

// 3. extend the theme
const theme = extendTheme({ config, colors, components, styles });
export default theme;
