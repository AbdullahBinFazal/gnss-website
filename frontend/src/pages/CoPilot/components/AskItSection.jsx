import { useState } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from "../CoPilot.module.css";

const AskItSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const questions = [
    {
      id: 1,
      title: "What is the difference between Float and Fixed ambiguities in RTK?",
      image: "https://www.bing.com/th/id/OIP.liAtbVDTGB_ITwp40W7LdwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 2,
      title: "How does the Melbourne-Wübbena linear combination detect cycle slips?",
      image: "https://www.bing.com/th/id/OIP.fB0rH4CPIdP75kwtdMZnTgHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 3,
      title: "Explain ionospheric scintillation and its impact on L-band signals.",
      image: "https://www.bing.com/th/id/OIP.rvDSA566RWHRRo64JD5yvQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, questions.length - cardsPerView);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleQuestions = questions.slice(
    carouselIndex,
    carouselIndex + cardsPerView
  );

  return (
    <div className={`${styles.section} ${styles.askItSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Ask it</h2>
        </div>

        <div className={styles.carouselContainer}>
          <button
            onClick={handlePrev}
            className={styles.carouselButton}
            disabled={carouselIndex === 0}
            aria-label="Previous questions"
          >
            <LeftOutlined />
          </button>

          <div className={styles.carouselWrapper}>
            <div className={styles.cardsGrid}>
              {visibleQuestions.map((question) => (
                <div key={question.id} className={styles.questionCard}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={question.image}
                      alt={question.title}
                      className={styles.cardImage}
                    />
                  </div>
                  <h3 className={styles.questionTitle}>{question.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className={styles.carouselButton}
            disabled={carouselIndex === maxIndex}
            aria-label="Next questions"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskItSection;