import React from "react";
import { Center } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo() {
  return (
    <Center>
      <Image src="/logo.png" alt="FLYP" width={75} height={75} />
    </Center>
  );
}
