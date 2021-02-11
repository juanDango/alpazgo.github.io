import React from "react";
import PageSection from "components/shared/PageSection";
import Image from "next/image";

export default function index() {
  return (
    <PageSection
      title="About me"
      image={<Image src="/wink.png" height="350px" width="350px" />}
      id="about"
    >
      I am a Software Developer from Margarita Island, Venezuela. Even though I
      have Italian nationality and grew up in Canada, I currently live in
      Colombia. I am in my last semester of Computing Systems engineering at
      Universidad de los Andes and look forward to opportunities to work on
      after graduation.
    </PageSection>
  );
}
