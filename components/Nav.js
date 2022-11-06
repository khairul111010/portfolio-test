import React from "react";
import Link from "next/link";

import styles from "../styles/Nav.module.css";
export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.user_name}>
        <Link href="/">Moshiul Azam</Link>
      </div>
      <div className={styles.link_wrappers}>
        <div className={styles.nav_links}>
          {" "}
          <Link href="/about">About</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Skills</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Projects</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Papers</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/timeline">Timeline</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Contact</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Resume</Link>
        </div>
        <div className={styles.nav_links}>
          <Link href="/about">Thesis</Link>
        </div>
      </div>
    </div>
  );
}
