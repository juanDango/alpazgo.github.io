import Layout from "components/Layout";
import { VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => (
  <Layout title="Antonio Aspite - Media">
    <VStack my={14} py={14}>
      <Heading mb={4}>Interesting technologies</Heading>
      <Box my={4}>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/1kcKlOjK_L4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box my={4}>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/mTz0GXj8NN0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Heading mb={4}>Some music...</Heading>
      <Box my={4}>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn"
          width="350"
          height="500"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </Box>
    </VStack>
  </Layout>
);

export default Index;
