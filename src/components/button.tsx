import React from "react";
import styles from "./../app/style/hero.module.css";

interface ButtonProps {
  text: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={styles.tryFreeButton}>
      <div className={styles.buttonContent}>
        <span className={styles.buttonText}>{text}</span>
        {icon && (
          <div className={styles.arrowIcon}>
            <img
              src="./arrow-right.svg"
              alt=""
              className={styles.arrowImage}
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
