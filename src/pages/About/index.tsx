import { type ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function AboutPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Rowanna's Tech Blog"
    >
      <main id="homePageFeatures">about page 개발 중</main>
    </Layout>
  );
}
