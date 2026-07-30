import styles from "../Programs.module.css";

const ProgramTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section style={{ padding: "10px 0" }}>
      <div className="container">
        <div className={styles.programTabs}>
          {["ms", "phd"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.programTab} ${activeTab === tab ? styles.programTabActive : ""}`}
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