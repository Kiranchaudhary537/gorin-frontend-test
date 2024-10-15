import React from "react";
import styles from "./../app/style/card.module.css";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  isPrimary?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  isPrimary = false,
}) => {
  return (
    <article className={styles.card}>
      <img loading="lazy" src={imageSrc} alt="" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button
          className={`${styles.button} ${
            isPrimary ? styles.buttonPrimary : styles.buttonSecondary
          }`}
          aria-label={`View Sample Template for ${title}`}
        >
          View Sample Template
        </button>
      </div>
    </article>
  );
};

export default Card;
