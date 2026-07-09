import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../../store/authSlice";
import styles from "./LoginForm.module.css";

const LoginForm = ({ loading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login(formData)).unwrap();
      if (result.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      // Error handled by Redux
    }
  };

  return (
    <div className={`glass-card ${styles.loginCard}`}>
      <h2 className={styles.title}>
        Welcome <span className="gradient-text">Back</span>
      </h2>
      <p className={styles.subtitle}>Login to your account</p>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className={`btn-primary ${styles.submitBtn}`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className={styles.footerText}>
        Don't have an account? <Link to="/register" className={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginForm;