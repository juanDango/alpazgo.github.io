import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  title: string;
  children: string;
  image: string;
};

export default function PortfolioItem({ title, children, image }: Props) {
  return (
    <Box maxW="sm" overflow="hidden">
      <Heading mb={6}>{title}</Heading>
      <Image src={image} height="fill" width="fill" alt={image} />
      {children}
    </Box>
  );
}
