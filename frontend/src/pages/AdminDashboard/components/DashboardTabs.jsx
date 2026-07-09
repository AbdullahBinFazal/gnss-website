import styles from "./DashboardTabs.module.css";

const tabs = [
  { id: "users", label: "👥 Users" },
  { id: "faculty", label: "👨‍🏫 Faculty" },
  { id: "publications", label: "📄 Publications" },
  { id: "events", label: "📅 Events" },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;