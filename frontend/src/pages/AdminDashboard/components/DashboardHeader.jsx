import styles from "./DashboardHeader.module.css";

const DashboardHeader = ({ user }) => {
  return (
    <>
      <h1 className={styles.title}>
        👑 Admin <span className="gradient-text">Dashboard</span>
      </h1>
      <p className={styles.subtitle}>
        Welcome back, {user?.name}! You have full control over the system.
      </p>
    </>
  );
};

export default DashboardHeader;