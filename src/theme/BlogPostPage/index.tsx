import React, { useEffect } from "react";
import OriginalBlogPostPage from "@theme-original/BlogPostPage";
import mediumZoom from "medium-zoom";

export default function BlogPostPageWrapper(props) {
  //   const dimmed = document.querySelector(".medium-zoom-overlay");

  useEffect(() => {
    // 블로그 포스트 로드 후 이미지에 줌 효과 추가
    const zoom = mediumZoom(document.querySelectorAll("img"), {
      margin: 24, // 이미지 확대 시 주변 여백
    });

    return () => {
      zoom.detach(); // 컴포넌트 해제 시 줌 효과 제거
    };
  }, []);

  return <OriginalBlogPostPage {...props} />;
}
