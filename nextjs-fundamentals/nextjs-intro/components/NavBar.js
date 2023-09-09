import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
        href="/about"
      >
        About
      </Link>
      <style jsx>{`
      nav {
        background-color: tomato;
      }
      a {
        text-decoration: none;
      }
      `}</style>
    </nav>
  );
}
