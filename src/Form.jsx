import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div style={{ marginBottom: "20px" }}>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "20px" }}>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
