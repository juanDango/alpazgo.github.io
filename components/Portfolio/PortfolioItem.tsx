import React from "react";
import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  children: string;
  image?: string;
};

export default function PortfolioItem({ title, children, image }: Props) {
  return (
    <Box>
      <Heading mb={6}>{title}</Heading>
      {image}
      {children}
    </Box>
  );
}
