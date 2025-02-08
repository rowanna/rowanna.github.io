import { useRef, type ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Rowanna's Tech Blog"
    // >
    <main>About Page 개발중</main>
    // </Layout>
  );
}
