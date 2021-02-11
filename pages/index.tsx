import Layout from "components/Layout";
import dynamic from "next/dynamic";
import AboutMe from "components/AboutMe";
import Interests from "components/Interests";
import Experience from "components/Experience";
import Portfolio from "components/Portfolio";

const BannerNoSSR = dynamic(() => import("components/Banner"), {
  ssr: false,
});

const Index = () => (
  <Layout title="Antonio Aspite - Software Engineer">
    <BannerNoSSR />
    <AboutMe />
    <Interests />
    <Experience />
    <Portfolio />
  </Layout>
);

export default Index;
