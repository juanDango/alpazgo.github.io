import React, { ReactNode } from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  children: ReactNode;
  image?: ReactNode;
  right?: boolean;
};

export default function PageSection({ title, image, children, right }: Props) {
  return (
    <SimpleGrid
      mt={12}
      mb={12}
      minChildWidth="120px"
      spacing={12}
      gridAutoFlow="dense"
    >
      <Box gridColumn={right ? 2 : 1} height="200px">
        <Heading mb={5}>{title}</Heading>
        {children}
      </Box>
      <Box height="200px" borderWidth={2}>
        {image}
      </Box>
    </SimpleGrid>
  );
}
