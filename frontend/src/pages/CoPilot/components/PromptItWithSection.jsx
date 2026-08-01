import { useState } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from "../CoPilot.module.css";

const PromptItWithSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prompts = [
    {
      id: 1,
      title: "Give me a command-line configuration template for running RTKLIB (rnx2rtkp) in PPP-Kinematic mode.",
      image: "https://www.bing.com/th/id/OIP.Ns6qC_ftS2DfW9cjObeC8QHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 2,
      title: "What does error code X mean in GAMIT processing?",
      image: "https://www.bing.com/th/id/OIP.bEb4zVWk3ft5aoIv2Mlo0AHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
    {
      id: 3,
      title: "How do I toggle off the tropospheric mapping function in gLAB via the CLI?",
      image: "https://www.bing.com/th/id/OIP.7BCBXlu4ATjL0TanJe6sdQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, prompts.length - cardsPerView);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visiblePrompts = prompts.slice(
    carouselIndex,
    carouselIndex + cardsPerView
  );

  return (
    <div className={`${styles.section} ${styles.promptItWithSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Prompt it with</h2>
        </div>

        <div className={styles.carouselContainer}>
          <button
            onClick={handlePrev}
            className={styles.carouselButton}
            disabled={carouselIndex === 0}
            aria-label="Previous prompts"
          >
            <LeftOutlined />
          </button>

          <div className={styles.carouselWrapper}>
            <div className={styles.cardsGrid}>
              {visiblePrompts.map((prompt) => (
                <div key={prompt.id} className={styles.questionCard}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={prompt.image}
                      alt={prompt.title}
                      className={styles.cardImage}
                    />
                  </div>
                  <h3 className={styles.questionTitle}>{prompt.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className={styles.carouselButton}
            disabled={carouselIndex === maxIndex}
            aria-label="Next prompts"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptItWithSection;