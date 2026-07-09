import styles from "./DashboardHeader.module.css";

const DashboardHeader = ({ user }) => {
  return (
    <>
      <h1 className={styles.title}>
        👋 Welcome, <span className="gradient-text">{user?.name || "User"}</span>
      </h1>
      <p className={styles.subtitle}>
        Explore the GNSS program and research at NCGSA.
      </p>
    </>
  );
};

export default DashboardHeader;