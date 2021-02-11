import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import PortfolioItem from "components/Portfolio/PortfolioItem";

export default function Index() {
  return (
    <SimpleGrid minChildWidth="300px" spacing={14}>
      <PortfolioItem title="UBits Analytics" image="/portfolio/ubits.png">
        Analytics platform developed for YC company Ubits so that companies like
        Davivienda, Falabella, Starbucks and HomeCenter and monitor the learning
        process of their employees.
      </PortfolioItem>
      <PortfolioItem title="Zaggo" image="/portfolio/zaggo.png">
        This simple yet powerful portal aims to create a seamless experience so
        that anybody can get fiat currency in exchange for their
        cryptocurrencies, while verifying identity and background checks.
      </PortfolioItem>
      <PortfolioItem title="Amcon en Línea" image="/portfolio/amcon.png">
        Amcon En Línea aims to improve processes for construction contracts and
        keeping the clients with up-to-date with the progress of their site,
        getting to granular details such as inputting the concrete's mixes
        ingredients, pictures of the sites and various user roles.
      </PortfolioItem>
      <PortfolioItem title="Securitas SATT" image="/portfolio/satt.png">
        Through various platforms, this robust solution manages information for
        more airports in more that 5 countries. It features luggage scanning,
        incidents, access control, passboard information and operational flight
        information.
      </PortfolioItem>
      {/* <PortfolioItem title="MiMenú">TEXT</PortfolioItem>
      <PortfolioItem title="PrecioAda">TEXT</PortfolioItem>
      <PortfolioItem title="DeBedout">TEXT</PortfolioItem>
      <PortfolioItem title="Careto">TEXT</PortfolioItem>
      <PortfolioItem title="CUIVA">TEXT</PortfolioItem>
      <PortfolioItem title="FLYP">TEXT</PortfolioItem> */}
    </SimpleGrid>
  );
}
