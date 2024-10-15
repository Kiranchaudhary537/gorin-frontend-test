import React from "react";
import styles from "./../style/propertyCard.module.css";

interface PropertyCardProps {
  iconSrc: string;
  propertyType: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  iconSrc,
  propertyType,
}) => {
  return (
    <article className={styles.propertyCard}>
      <div className={styles.iconWrapper}>
        <img
          src={iconSrc}
          alt={`${propertyType} icon`}
          className={styles.icon}
          loading="lazy"
        />
        <h3 className={styles.propertyType}>{propertyType}</h3>
      </div>
    </article>
  );
};

export default PropertyCard;
