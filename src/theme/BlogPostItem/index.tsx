import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";
import { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

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

  return <div id="disqus_thread"></div>;
};

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): ReactNode {
  const containerClassName = useContainerClassName();
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <HitsComponent />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <DisqusComments />
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
