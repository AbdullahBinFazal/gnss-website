import styles from "./DashboardCard.module.css";

const DashboardCard = ({ icon, title, description }) => {
  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DashboardCard;