---
slug: nextjs-simple-tutorial-second
title: Next.js가 처음인 그대를 위한 간단한 튜토리얼(2)(작성중)
authors: [rowanna]
image: "image-2.png"
tags: [frontend, nextjs, ASAC07]
---

![alt text](image-2.png)

Next.js와 친해지기 위한 간단한 튜토리얼 - 에러처리

<!-- truncate -->

## `expected errors`와 `uncaught exceptions`

Next.js의 에러 핸들링은 expected errors와 uncaught exceptions 오류를 처리할 수 있는 방법을 안내하고 있습니다. ([Javascript error와 exception의 차이 그리고 예외처리하는 방법](https://ebbnflow.tistory.com/268))

## 👩‍💻 `notFound()` 함수

```tsx title="src/app/dashboard/customers/page.tsx"
import { notFound } from "next/navigation";

export default function Customers() {
  const handleError = () => {
    throw new Error("일부러 에러 발생");
  };
  try {
    handleError();
  } catch (err) {
    notFound();
  }

  return <div>customer page</div>;
}
```

![alt text](image-1.png)

`notFound()` 함수를 실행하면 not-found.js가 실행되며 404 페이지가 뜨게 됩니다.  
위 사진과 같이 next.js에서는 기본적으로 제공하는 404페이지가 있습니다.  
[next.js notFound() 공식문서 바로가기](https://nextjs.org/docs/app/api-reference/functions/not-found)

## 👩‍💻 `not-found.tsx` 설정하기

```tsx title="src/app/not-found.tsx"
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found페이지 입니다.</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

`src>app` 폴더에 `not-found.tsx` 파일을 만들면 커스텀 404페이지를 만들 수 있습니다.

## 👩‍💻 참고

- [Next.js error handling](https://nextjs.org/docs/app/getting-started/error-handling#handling-expected-errors)

- [Javascript error와 exception의 차이](https://ebbnflow.tistory.com/268)
