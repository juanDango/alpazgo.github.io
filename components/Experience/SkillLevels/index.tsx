import React from "react";
import Skill from "components/Experience/SkillLevels/Skill";
import { VStack } from "@chakra-ui/react";

export default function index() {
  return (
    <VStack w="100%">
      <Skill value={100} name="React"></Skill>
      <Skill value={80} name="Django"></Skill>
      <Skill value={70} name="GraphQL"></Skill>
      <Skill value={60} name="AWS"></Skill>
      <Skill value={50} name="Android"></Skill>
    </VStack>
  );
}
