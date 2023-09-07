import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link style={{color: router.pathname === "/" ? "red" : "blue"}} className="hello" href="/">
        Home
      </Link>
      <Link style={{color: router.pathname === "/about" ? "red" : "blue"}} className="about" href="/about">
        About
      </Link>
    </nav>
  );
}