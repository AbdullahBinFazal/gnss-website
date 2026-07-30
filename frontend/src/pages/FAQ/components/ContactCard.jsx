import { Typography } from 'antd';
import styles from './ContactCard.module.css';

const { Title, Paragraph } = Typography;

const ContactCard = () => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactContent}>
        <span className={styles.contactIcon}>💬</span>
        <div>
          <Title level={4} className={styles.contactTitle}>Still have questions?</Title>
          <Paragraph className={styles.contactText}>
            Can't find what you're looking for? Contact us directly.
          </Paragraph>
        </div>
        <a href="/contact-us" className={styles.contactBtn}>
          Contact Us →
        </a>
      </div>
    </div>
  );
};

export default ContactCard;