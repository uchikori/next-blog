import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
