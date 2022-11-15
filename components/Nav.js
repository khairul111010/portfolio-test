import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/Nav.module.css";
import Hamburger from "hamburger-react";
export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setOpen((current) => !current);
  };
  return (
    <>
      {" "}
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
            <Link href="/education">Education</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/about">Skills</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/about">Projects</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/timeline">Timeline</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/about">Resume</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/about">Thesis</Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/about">Contact</Link>
          </div>
        </div>
        <div className={styles.burger_menu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={isOpen ? styles.mobile_nav : ""}>
        <Link href="/about">About</Link>
        <Link href="/education">Education</Link>
        <Link href="/about">Skills</Link>
        <Link href="/about">Projects</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/about">Resume</Link>
        <Link href="/about">Thesis</Link>
        <Link href="/about">Contact</Link>
      </div>
    </>
  );
}
