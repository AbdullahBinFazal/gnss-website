import { useState } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from "../Opportunities.module.css";

const ResearchOpportunitiesCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const opportunities = [
    {
      id: 1,
      name: "MS Thesis Opportunities",
      image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 2,
      name: "PhD Research Opportunities",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 3,
      name: "Final-year Projects",
      image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 4,
      name: "Research Assistantships",
      image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 5,
      name: "Internships",
      image: "https://ncgsa.org.pk/wp-content/uploads/2025/08/internship.jpg",
    },
    {
      id: 6,
      name: "Visiting Student Opportunities",
      image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, opportunities.length - cardsPerView);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleOpportunities = opportunities.slice(
    carouselIndex,
    carouselIndex + cardsPerView
  );

  return (
    <div className={`${styles.section} ${styles.researchOpportunitiesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Research Opportunities</h2>
        </div>

        <div className={styles.carouselContainer}>
          <button
            onClick={handlePrev}
            className={styles.carouselButton}
            disabled={carouselIndex === 0}
            aria-label="Previous opportunities"
          >
            <LeftOutlined />
          </button>

          <div className={styles.carouselWrapper}>
            <div className={styles.cardsGrid}>
              {visibleOpportunities.map((opportunity) => (
                <div key={opportunity.id} className={styles.opportunityCard}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={opportunity.image}
                      alt={opportunity.name}
                      className={styles.cardImage}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{opportunity.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className={styles.carouselButton}
            disabled={carouselIndex === maxIndex}
            aria-label="Next opportunities"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchOpportunitiesCarousel;