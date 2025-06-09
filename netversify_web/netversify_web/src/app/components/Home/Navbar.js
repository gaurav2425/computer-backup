"use client";
import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
function Navbar() {
  const [activePage, setActivePage] = useState("Home");
  return (
    <div className={styles.navbar_container}>
      <div className={styles.nav_links_container}>
        <ul className={styles.nav_links_sub_container}>
          <Link className={styles.nav_link} href="/">
            Home
          </Link>
          <Link className={styles.nav_link} href="/about">
            About
          </Link>
          <Link className={styles.nav_link} href="/contact">
            Contact
          </Link>
          <Link className={styles.nav_link} href="/services">
            Services
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
