import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "assets/theme";
import useReloadWindowChange from "components/shared/useReloadWindowChange";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  useReloadWindowChange();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
