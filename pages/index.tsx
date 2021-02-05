import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const BannerNoSSR = dynamic(() => import("components/Sections/Banner"), {
  ssr: false,
});

const IndexPage = () => (
  <Layout title="Antonio Aspite - Software Engineer">
    <BannerNoSSR />
  </Layout>
);

export default IndexPage;
