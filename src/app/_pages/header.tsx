import React from "react";
import styles from "./../style/header.module.css";
import Image from "next/image";

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <div className={styles.navItem}>{text}</div>
);

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        loading="lazy"
        src="/SellCRE_logo.svg"
        className={styles.logo}
        alt="Company logo"
        width={30}
        height={30}
      />
      <nav className={styles.menuOptions}>
        <div className={styles.navLinks}>
          <NavItem text="Features" />
          <NavItem text="Pricing" />
          <div className={styles.loginButton}>
            <Image
              loading="lazy"
              src="/search.svg"
              className={styles.loginIcon}
              alt=""
              width={30}
              height={30}
            />
            <span>Login</span>
          </div>
          <button className={styles.tryFreeButton}>Try for Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
