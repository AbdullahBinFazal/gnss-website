import styles from "./FacultyTab.module.css";

const FacultyTab = ({ faculty }) => {
  return (
    <div className={`glass-card ${styles.tableContainer}`}>
      <div className={styles.header}>
        <h3 className={styles.tableTitle}>Faculty Members</h3>
        <button className={styles.addBtn}>+ Add Faculty</button>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.name}</td>
                <td>{f.designation}</td>
                <td>{f.email}</td>
                <td>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyTab;