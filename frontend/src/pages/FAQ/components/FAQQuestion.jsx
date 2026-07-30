import { Collapse } from 'antd';
import styles from './FAQQuestion.module.css';

const { Panel } = Collapse;

const FAQQuestion = ({ question, answer }) => {
  return (
    <Collapse 
      className={styles.questionCollapse}
      bordered={false}
      expandIconPosition="end"
    >
      <Panel
        header={
          <span className={styles.questionHeader}>
            <span className={styles.questionIcon}>❓</span>
            {question}
          </span>
        }
        key="question"
      >
        <div className={styles.answerContainer}>
          <span className={styles.answerIcon}>💡</span>
          <span className={styles.answerText}>{answer}</span>
        </div>
      </Panel>
    </Collapse>
  );
};

export default FAQQuestion;