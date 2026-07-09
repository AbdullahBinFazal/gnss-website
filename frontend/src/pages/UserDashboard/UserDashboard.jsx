import { useSelector } from "react-redux";
import DashboardHeader from "./components/DashboardHeader";
import DashboardCard from "./components/DashboardCard";
import styles from "./UserDashboard.module.css";

const UserDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const cards = [
    { icon: "📚", title: "Program Info", description: "Learn about MS/PhD GNSS program" },
    { icon: "👨‍🏫", title: "Faculty", description: "Meet our expert faculty members" },
    { icon: "🔬", title: "Research", description: "Explore GNSS research areas" },
    { icon: "📄", title: "Publications", description: "View research publications" },
  ];

  return (
    <div className={styles.userDashboard}>
      <div className="container">
        <DashboardHeader user={user} />
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;