import React, { ReactNode } from "react";
import Navbar from "components/Navbar";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <Flex direction="column" h="100%">
      <Box mt={14} grow={1} mx={[4, 6, 14]} px={[4, 6, 14]}>
        {children}
      </Box>
      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  </>
);

export default Layout;
