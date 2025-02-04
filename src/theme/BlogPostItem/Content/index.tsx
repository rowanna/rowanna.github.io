import React, { type ReactNode } from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/BlogPostItem/Content";
import { useLocation } from "@docusaurus/router";
import { useEffect } from "react";

function HitsComponent() {
  const location = useLocation(); // 현재 블로그 글의 URL 가져오기
  const encodedUrl = encodeURIComponent(
    `https://rowanna.github.io${location.pathname}`
  );

  return (
    <div>
      {/* Hits Counter 추가 */}
      <a href="https://hits.seeyoufarm.com">
        <img
          src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodedUrl}&count_bg=%2379C83D&title_bg=%23555555&icon=blog&icon_color=%23E7E7E7&title=hits&edge_flat=false`}
          alt="Hits"
        />
      </a>
    </div>
  );
}
const DisqusComments = () => {
  const shortname = "rowanna";
  const url = typeof window !== "undefined" ? window.location.href : "";
  const location = useLocation(); // 현재 블로그 글의 URL 가져오기
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true });
    } else {
      const script = document.createElement("script");
      script.src = `https://${shortname}.disqus.com/embed.js`;
      script.setAttribute("data-timestamp", +new Date());
      document.body.appendChild(script);
    }
  }, [shortname, url, location.pathname]);

  return (
    <div
      id="disqus_thread"
      style={{
        background: "#a4a4a4",
        padding: "20px",
        boxShadow: "1px 1px 6px #bbb9b9",
      }}
    ></div>
  );
};

export default function BlogPostItemContent({
  children,
  className,
}: Props): ReactNode {
  const { isBlogPostPage } = useBlogPost();
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
    >
      {isBlogPostPage ? <HitsComponent /> : <></>}
      <MDXContent>{children}</MDXContent>

      {isBlogPostPage ? <DisqusComments /> : <></>}
    </div>
  );
}
