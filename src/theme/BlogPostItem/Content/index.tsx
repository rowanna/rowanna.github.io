import React, { type ReactNode } from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/BlogPostItem/Content";
import { useLocation } from "@docusaurus/router";
import { useEffect, useRef } from "react";

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

const UtterancesComments = () => {
  const { metadata } = useBlogPost();
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "rowanna/rowanna.github.io"); // GitHub 저장소 설정
    script.setAttribute("issue-term", "pathname"); // 게시글의 URL을 기준으로 Issue 생성
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    if (commentRef.current) {
      commentRef.current.innerHTML = "";
      commentRef.current.appendChild(script);
    }
  }, []);

  return <div ref={commentRef} />;
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

      {isBlogPostPage ? <UtterancesComments /> : <></>}
    </div>
  );
}
