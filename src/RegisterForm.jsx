import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required")
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Registration successful!");
      formik.resetForm();
    }
  });

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit} style={styles.form}>
        {/* Full Name */}
        <div style={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            style={{
              ...styles.input,
              borderColor:
                formik.touched.fullName && formik.errors.fullName
                  ? "red"
                  : "#ccc"
            }}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div style={styles.error}>{formik.errors.fullName}</div>
          )}
        </div>

        {/* Email */}
        <div style={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{
              ...styles.input,
              borderColor:
                formik.touched.email && formik.errors.email ? "red" : "#ccc"
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={styles.error}>{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{
              ...styles.input,
              borderColor:
                formik.touched.password && formik.errors.password
                  ? "red"
                  : "#ccc"
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={styles.error}>{formik.errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div style={styles.field}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            style={{
              ...styles.input,
              borderColor:
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "red"
                  : "#ccc"
            }}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={styles.error}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  field: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "1rem"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "5px"
  }
};

export default RegisterForm;
