import styles from "./EventsTab.module.css";

const EventsTab = () => {
  return (
    <div className={`glass-card ${styles.container}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Events</h3>
        <button className={styles.addBtn}>+ Add Event</button>
      </div>
      <p className={styles.emptyMessage}>No events yet. Add your first event!</p>
    </div>
  );
};

export default EventsTab;