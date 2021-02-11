import React from "react";
import { Box, Text, Progress } from "@chakra-ui/react";

type Props = {
  value: number;
  name: string;
};

export default function InterestRow({ value, name }: Props) {
  return (
    <Box w="100%">
      <Text>{name}</Text>
      <Progress value={value} />
    </Box>
  );
}
