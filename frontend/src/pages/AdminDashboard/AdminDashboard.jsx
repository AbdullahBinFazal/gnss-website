import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "./components/DashboardHeader";
import DashboardTabs from "./components/DashboardTabs";
import UsersTab from "./components/UsersTab";
import FacultyTab from "./components/FacultyTab";
import PublicationsTab from "./components/PublicationsTab";
import EventsTab from "./components/EventsTab";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("users");

  // Dummy data - replace with real API calls
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", email: "admin@test.com", role: "admin" },
    { id: 2, name: "John Doe", email: "john@test.com", role: "user" },
  ]);

  const [faculty, setFaculty] = useState([
    { id: 1, name: "Dr. Ali", designation: "Professor", email: "ali@ist.edu.pk" },
    { id: 2, name: "Dr. Khan", designation: "Associate Professor", email: "khan@ist.edu.pk" },
  ]);

  const renderTab = () => {
    switch (activeTab) {
      case "users":
        return <UsersTab users={users} />;
      case "faculty":
        return <FacultyTab faculty={faculty} />;
      case "publications":
        return <PublicationsTab />;
      case "events":
        return <EventsTab />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.adminDashboard}>
      <div className="container">
        <DashboardHeader user={user} />
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTab()}
      </div>
    </div>
  );
};

export default AdminDashboard;