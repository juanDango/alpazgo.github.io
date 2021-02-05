import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// adjust your pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import theme from "assets/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es" style={{ height: "100%" }}>
        <Head />
        <body style={{ height: "100%" }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
