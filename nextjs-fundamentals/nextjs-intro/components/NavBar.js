import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  /* 
    Next.js 13버전부터 Link 컴포넌트 사용 시 하위에 a 태그를 넣을 수 없게 되었다. (자동으로 추가됨)
    그런데 style-jsx의 처리보다 Link 컴포넌트의 처리가 느린건지 style-jsx로 a 태그에 `text-decoration: none` 을 적용해도
    자동으로 추가된 a 태그에는 해당 스타일이 적용되지 않는 문제가 발생한다.

    여러 방법을 사용해봤지만 그냥 CSS Module을 사용하거나 Link 컴포넌트에 inline style로 `textDecoration: "none"` 을 주는게
    가장 확실해보인다...
  */
  return (
    <nav>
      <Link style={{textDecoration: "none"}} className={router.pathname === "/" ? "active" : ""} href="/">Home</Link>
      <Link style={{textDecoration: "none"}} className={router.pathname === "/about" ? "active" : ""} href="/about">About</Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
