// src/pages/Home/components/Comp10.jsx
import { Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import styles from "../../../styles/HomeStyles/Home.module.css";
import homeData from "../../../json/pages/home/homeData.json";

const { Title, Paragraph } = Typography;

const Comp10 = () => {
  const data = homeData.comp10;

  return (
    <section className={`${styles.sectionLight} ${styles.padding80}`}>
      <div className={styles.container}>
        <Flex vertical align="center" gap={24} style={{ marginBottom: "48px" }}>
          {/* Icon/SVG */}
          <div className={styles.coPilotIconWrapper}>
            <div className={styles.coPilotIcon}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <line x1="32" y1="53.33" x2="32" y2="5.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="32" y1="58.67" x2="32" y2="53.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="45.33" y1="53.33" x2="18.67" y2="5.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="45.33" y1="58.67" x2="18.67" y2="53.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="5.33" y1="32" x2="53.33" y2="32" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="5.33" y1="45.33" x2="53.33" y2="18.67" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="5.33" y1="18.67" x2="53.33" y2="45.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="53.33" y1="32" x2="58.67" y2="32" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="53.33" y1="45.33" x2="58.67" y2="45.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="53.33" y1="18.67" x2="58.67" y2="18.67" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="18.67" y1="53.33" x2="53.33" y2="53.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="10.67" y1="53.33" x2="18.67" y2="53.33" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="10.67" y1="10.67" x2="10.67" y2="10.67" stroke="#0B1020" strokeWidth="2.67"/>
                <line x1="21.33" y1="10.67" x2="21.33" y2="10.67" stroke="#0B1020" strokeWidth="2.67"/>
              </svg>
            </div>
          </div>

          <Title level={1} className={`${styles.title} ${styles.titleSize42}`}>
            {data.title}
          </Title>
          
          <Paragraph className={`${styles.description} ${styles.descriptionSize20} ${styles.descriptionCenter}`}>
            {data.description}
          </Paragraph>

          {data.button && (
            <Link to={data.button.link || "/copilot"} className={styles.link}>
              {data.button.text || "LAUNCH GNSS CO-PILOT"}
            </Link>
          )}
        </Flex>
      </div>
    </section>
  );
};

export default Comp10;