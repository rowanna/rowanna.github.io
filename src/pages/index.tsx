import { useRef, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Rowanna's Tech Blog"
    // >
    <main id="homePageFeatures">
      <HomepageFeatures />
    </main>
    // </Layout>
  );
}
