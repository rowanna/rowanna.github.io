import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import IconHome from "@theme/Icon/Home";
import { useLocation } from "@docusaurus/router";

import styles from "./styles.module.css";

export default function HomeBreadcrumbItem(): ReactNode {
  const location = useLocation();
  const basePath = `/${location.pathname.split("/")[1]}`; // 첫 번째 경로 추출
  const homeHref = useBaseUrl(basePath);

  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className="breadcrumbs__link"
        href={homeHref}
      >
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}
