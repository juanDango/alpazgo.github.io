import React, { ReactNode } from "react";
import { SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";

type Props = {
  title: string;
  children: ReactNode;
  image?: ReactNode;
  right?: boolean;
  id?: string;
};

export default function PageSection({
  title,
  image,
  children,
  right,
  id,
}: Props) {
  return (
    <SimpleGrid
      my={14}
      px={[0, 2, 14]}
      mx={[0, 2, 14]}
      minChildWidth="200px"
      spacing={14}
      gridAutoFlow="dense"
      id={id}
    >
      <Box gridColumn={[1, 1, right ? 2 : 1]}>
        <Heading mb={5}>{title}</Heading>
        <Center>{children}</Center>
      </Box>
      <Center height="100%">{image}</Center>
    </SimpleGrid>
  );
}
