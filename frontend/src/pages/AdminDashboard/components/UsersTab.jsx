import styles from "./UsersTab.module.css";

const UsersTab = ({ users }) => {
  return (
    <div className={`glass-card ${styles.tableContainer}`}>
      <h3 className={styles.tableTitle}>All Users</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={`${styles.roleBadge} ${u.role === "admin" ? styles.adminBadge : styles.userBadge}`}>
                    {u.role}
                  </span>
                </td>
                <td>
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

export default UsersTab;