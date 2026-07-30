import { Tag } from 'antd';
import FAQQuestion from './FAQQuestion';
import styles from './FAQCategory.module.css';

const FAQCategory = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.panelHeader}>
        <span className={styles.categoryIcon}>{category.icon}</span>
        <span className={styles.categoryName}>{category.category}</span>
        <Tag className={styles.countTag}>{category.questions.length}</Tag>
      </div>
      <div className={styles.questionsList}>
        {category.questions.map((q, index) => (
          <FAQQuestion key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;