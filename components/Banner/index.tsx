import { useRef, useEffect, useState } from "react";
import { Heading, VStack, Box, useColorModeValue } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const IndexPage = () => {
  const ref = useRef(document.createElement("div"));
  const [width, setWidth] = useState(0);
  const nameColor = useColorModeValue("#3182CE", "#90CDF4");

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth + 25);
    }
  }, [ref.current]);

  return (
    <VStack align="center" justify="center" h="100vh">
      {ref.current && (
        <Box align="flex-start" w={width}>
          <Heading as="h1" size="3xl" textAlign="left">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hello. I'm <span style="color: ${nameColor};" >Antonio Aspite</span>.</br>I'm a full-stack developer.`
                  )
                  .start();
              }}
            />
          </Heading>
        </Box>
      )}
      <Heading as="h1" size="3xl" ref={ref} visibility="hidden">
        I'm a full-stack developer.
      </Heading>
    </VStack>
  );
};

export default IndexPage;
