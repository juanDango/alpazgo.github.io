import React from "react";
import PageSection from "components/shared/PageSection";
import Image from "next/image";
import { ListItem, UnorderedList, Box } from "@chakra-ui/react";

export default function index() {
  return (
    <PageSection
      title="Interests"
      right
      image={<Image src="/punch.png" height="350px" width="350px" />}
      id="interests"
    >
      <Box>
        Even though my main interest and passion is technology, I have other
        things I like to do in my spare time. These include but are not limited
        to:
        <br />
        <br />
        <UnorderedList>
          <ListItem>Reading books on any topic</ListItem>
          <ListItem>Travelling</ListItem>
          <ListItem>Listening and playing music, primarily the guitar</ListItem>
          <ListItem>Learning languages, especially Mandarin</ListItem>
        </UnorderedList>
      </Box>
    </PageSection>
  );
}
