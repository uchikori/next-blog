import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { useState } from "react";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((navIsOpen) => !navIsOpen);
  };
  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <>
      <nav className={navIsOpen ? styles.open : styles.close}>
        {navIsOpen && (
          <style jsx global>
            {`
              @media (max-width: 767px) {
                body {
                  overflow: hidden;
                  position: fixed;
                  wodth: 100%;
                }
              }
            `}
          </style>
        )}
        <button onClick={toggleNav} className={styles.btn}>
          <span className={styles.bar}></span>
          <span className="sr-only">MENU</span>
        </button>
        <ul className={styles.list}>
          <li>
            <Link href="/" onClick={closeNav}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeNav}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={closeNav}>
              BLOG
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
