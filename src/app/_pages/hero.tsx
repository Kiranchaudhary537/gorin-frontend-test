import React from "react";
import styles from "./../style/hero.module.css";
import Button from "@/components/button";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.column}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <strong>Sell CRE Faster </strong>with <br /> OMs & Ads created{" "}
              <br /> in <strong>minutes</strong>
            </h1>
            <p className={styles.heroDescription}>
              Create beautiful Commercial Real Estate Offering Memorandums,
              Flyers & Ads in minutes with our AI powered platform
            </p>
            <div className={styles.ctaButtons}>
              <Button text="Try for free" icon="arrow-right" />
              <div className={styles.watchDemo}>
                <img
                  src="./play_logo_second.png"
                  alt="Watch Demo"
                  className={styles.watchDemoImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.headerMenuOptions}>
            <img
              src="./hero.png"
              alt="Header Menu Options"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
