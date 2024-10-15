import React from "react";
import styles from "./../style/property.module.css";
import PropertyCard from "./propertyCard";

const propertyTypes = [
  {
    iconSrc: "/retail-store.svg",
    type: "Retail",
  },
  {
    iconSrc: "/house.svg",
    type: "Multi-family",
  },
  {
    iconSrc: "/building.svg",
    type: "Office",
  },
  {
    iconSrc: "/warehouse.svg",
    type: "Industrial",
  },
  {
    iconSrc: "/hotel.svg",
    type: "Hotel",
  },
  {
    iconSrc: "/land.svg",
    type: "Land",
  },
];

const PropertyTypes: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.subtitle}>Create OMs and Ads For</h2>
        <h1 className={styles.title}>Various Real Estate Property Types</h1>
      </header>
      <div className={styles.propertyGrid}>
        {propertyTypes.map((property, index) => (
          <PropertyCard
            key={index}
            iconSrc={property.iconSrc}
            propertyType={property.type}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
