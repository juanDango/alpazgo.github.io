import React from "react";
import PageSection from "components/shared/PageSection";
import SkillLevels from "components/Experience/SkillLevels";

export default function Experience() {
  return (
    <PageSection id="experience" title="Experience" image={<SkillLevels />}>
      I have over 2 years of experience developing as a fullstack developer at
      Auxo, as well as freelance development and personal projects. Even though
      my strongest skills reside in the front-end area, I apply whatever
      technology is required to solve the problem at hand, including but not
      limited to back-end and mobile development, UI/UX design, infraestructure
      and software architecture. Regarding academics, I am a student of
      Computing Systems Engineering, studied Mandarin at Nankai University in
      Tianjin and hold an HSK4 certification. I have also volunteered in China
      to help build houses in villages and as a web developer in Addis Ababa,
      Ethiopia.
    </PageSection>
  );
}
