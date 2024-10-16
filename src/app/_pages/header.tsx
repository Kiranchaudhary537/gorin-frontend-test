"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../style/header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.navItem}>{children}</div>
  );

  return (
    <header className={styles.header}>
      <Image
        loading="lazy"
        src="/SellCRE_logo.svg"
        className={styles.logo}
        alt="Company logo"
        width={131}
        height={29}
      />
      {isMobile && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></div>
        </div>
      )}
      <nav
        className={`${styles.menuOptions} ${
          isMobile ? (isMenuOpen ? styles.open : styles.closed) : ""
        }`}
      >
        <div className={styles.navLinks}>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>
            <div className={styles.loginButton}>
              <Image
                loading="lazy"
                src="/search.svg"
                className={styles.loginIcon}
                alt=""
                width={14}
                height={14}
              />
              <span>Login</span>
            </div>
          </NavItem>
          <button className={styles.tryFreeButton}>Try for Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
