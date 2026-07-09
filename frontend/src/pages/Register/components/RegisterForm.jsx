import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../../store/authSlice";
import styles from "./RegisterForm.module.css";

const RegisterForm = ({ loading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const result = await dispatch(register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })).unwrap();

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
    <div className={`glass-card ${styles.registerCard}`}>
      <h2 className={styles.title}>
        Create <span className="gradient-text">Account</span>
      </h2>
      <p className={styles.subtitle}>Join the GNSS community</p>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

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
          <p className={styles.hint}>
            Must be 8+ chars with uppercase, lowercase, and number
          </p>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
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
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className={styles.footerText}>
        Already have an account? <Link to="/login" className={styles.link}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;