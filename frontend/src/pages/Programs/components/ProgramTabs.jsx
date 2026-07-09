import styles from "./ProgramTabs.module.css";

const ProgramTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section style={{ padding: "10px 0" }}>
      <div className="container">
        <div className={styles.tabs}>
          {["ms", "phd"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            >
              {tab === "ms" ? "MS Program" : "PhD Program"}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTabs;