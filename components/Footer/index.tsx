import React from "react";
import { Center, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <hr />
      <Center p={5}>
        Made with&nbsp;<Box color="red">&hearts;</Box>&nbsp;by Antonio Aspite.
      </Center>
    </footer>
  );
}
