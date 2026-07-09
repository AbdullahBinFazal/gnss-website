import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <LoginForm loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Login;