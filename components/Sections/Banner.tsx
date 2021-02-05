import { useRef, useEffect, useState } from "react";
import { Heading, VStack, Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const IndexPage = () => {
  const ref = useRef(document.createElement("div"));
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth + 25);
    }
  }, [ref.current]);

  return (
    <VStack align="center" justify="center" h="100%">
      {ref.current && (
        <Box align="flex-start" w={width}>
          <Heading as="h1" size="3xl" textAlign="left">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hello. I'm <span style="color: #90CDF4;" >Antonio Aspite</span>.</br>I'm a full-stack web developer.`
                  )
                  .start();
              }}
            />
          </Heading>
        </Box>
      )}
      <Heading as="h1" size="3xl" ref={ref} visibility="hidden">
        I'm a full-stack web developer.
      </Heading>
    </VStack>
  );
};

export default IndexPage;
