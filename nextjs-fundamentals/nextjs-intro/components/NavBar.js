import Image from "next/image";
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
      <Image src="/vercel.svg" alt="vercel logo" width="100" height="20" />
      <div>
        <Link
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className={router.pathname === "/about" ? "active" : ""}
          href="/about"
        >
          About
        </Link>
      </div>
      {/*
        이 style-jsx는 #2.1 강의의 소스 코드에서 가져온 스타일이다.
        여전히 a 태그에 대한 스타일만 적용되지 않는다...
      */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        /*
          아래의 nav a와 .active 선택자에 대한 스타일은 적용되지 않는다.
          /pages/_app.js 에 global 속성으로 추가하여 적용된 상태다.

        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        */
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
