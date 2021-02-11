import React from "react";
import { Heading, Box, Center } from "@chakra-ui/react";
import PortfolioItemsSection from "components/Portfolio/PortfolioItemsSection";

export default function Index() {
  return (
    <Box id="portfolio" my={14} px={[1, 14]} mx={[1, 14]}>
      <Center mb={14}>
        <Heading>Portfolio</Heading>
      </Center>
      <PortfolioItemsSection />
    </Box>
  );
}
