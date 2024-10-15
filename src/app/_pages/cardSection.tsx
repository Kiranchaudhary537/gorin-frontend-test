import React from 'react';
import styles from './../style/card.module.css';
import Card from '@/components/card';

const sampleOMData = [
  {
    imageSrc: "/card_image_1.png",
    title: "Retail OM",
    description: "Strip centers, street retail, vehicle related, and more.",
    isPrimary: true
  },
  {
    imageSrc: "/card_image_2.png",
    title: "Multi-Family OM",
    description: "Garden, low-rise, mid-rise, high-rise.",
    isPrimary: false
  },
  {
    imageSrc: "/card_image_3.png",
    title: "Office OM",
    description: "All classes of office buildings, loft/creative, medical.",
    isPrimary: false
  }
];

const CardSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header>
          <h2 className={styles.heading}>Sample OMs created with our platform</h2>
        </header>
        <div className={styles.cardContainer}>
          <div className={styles.cardGrid}>
            {sampleOMData.map((om, index) => (
              <div key={index} className={styles.cardColumn}>
                <Card
                  imageSrc={om.imageSrc}
                  title={om.title}
                  description={om.description}
                  isPrimary={om.isPrimary}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;