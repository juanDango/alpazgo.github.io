import React from "react";
import { Heading, Box, SimpleGrid, Center } from "@chakra-ui/react";
import PortfolioItem from "components/Portfolio/PortfolioItem";

export default function Index() {
  return (
    <Box mt={12} mb={12}>
      <Center mb={12}>
        <Heading>Portfolio</Heading>
      </Center>
      <SimpleGrid minChildWidth="300px" spacing={10}>
        <PortfolioItem title="UBits Analytics">
          Dashboard creado para ...
        </PortfolioItem>
        <PortfolioItem title="Zaggo">Dashboard creado para ...</PortfolioItem>
        <PortfolioItem title="Amcon en Línea">
          Dashboard creado para ...
        </PortfolioItem>
        <PortfolioItem title="Securitas Admin Dashboard">
          Dashboard creado para ...
        </PortfolioItem>
        <PortfolioItem title="MiMenú">Dashboard creado para ...</PortfolioItem>
        <PortfolioItem title="PrecioAda">
          Dashboard creado para ...
        </PortfolioItem>
        <PortfolioItem title="DeBedout">
          Dashboard creado para ...
        </PortfolioItem>
        <PortfolioItem title="Careto">Dashboard creado para ...</PortfolioItem>
      </SimpleGrid>
    </Box>
  );
}
