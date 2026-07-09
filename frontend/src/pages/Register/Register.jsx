import { useSelector } from "react-redux";
import RegisterForm from "./components/RegisterForm";
import styles from "./Register.module.css";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <RegisterForm loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Register;