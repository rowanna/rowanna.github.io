import { useRef, type ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./about.module.css";
import Link from "@docusaurus/Link";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <Link to="/" className={styles.home_link}>
          rowanna.
        </Link>
        <main>
          <section className={styles.profile}>
            <div className={styles.profile_img}></div>
            <div className={styles.profile_info}>
              <h1>
                안녕하세요.
                <br />
                나원지입니다.
              </h1>
              <div className={styles.profile_info_link_wrap}>
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <a href="">Blog</a>
              </div>
              <div>
                <p>📧 Email : rowankimna@gmail.com</p>
                <p>☎️ phone : 010-8399-4972</p>
              </div>
            </div>

            <p>
              저는 3년 8개월 프론트엔드 개발자 입니다.
              <br />
              UX 향상 개발에 관심이 많습니다.
            </p>
          </section>
          <section>
            <h2>Projects</h2>
          </section>
          <section>
            <h2>Activities</h2>
          </section>
        </main>
      </div>
    </div>
  );
}
