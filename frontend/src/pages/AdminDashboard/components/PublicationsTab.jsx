import styles from "./PublicationsTab.module.css";

const PublicationsTab = () => {
  return (
    <div className={`glass-card ${styles.container}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Publications</h3>
        <button className={styles.addBtn}>+ Add Publication</button>
      </div>
      <p className={styles.emptyMessage}>No publications yet. Add your first publication!</p>
    </div>
  );
};

export default PublicationsTab;