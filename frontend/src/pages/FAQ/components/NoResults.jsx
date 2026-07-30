import { Typography } from 'antd';
import styles from './NoResults.module.css';

const { Title, Paragraph } = Typography;

const NoResults = () => {
  return (
    <div className={styles.noResults}>
      <span className={styles.noResultsIcon}>🔍</span>
      <Title level={3}>No questions found</Title>
      <Paragraph>Try different keywords or browse the categories above.</Paragraph>
    </div>
  );
};

export default NoResults;