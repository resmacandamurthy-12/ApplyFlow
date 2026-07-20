import "./SignupForm.css";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      fullName,
      email,
      password,
      confirmPassword,
    });
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <p>Start tracking your internship journey today.</p>

      {/* Full Name */}

      <div className="input-box">
        <FiUser className="input-icon" />

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      {/* Email */}

      <div className="input-box">
        <FiMail className="input-icon" />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}

      <div className="input-box">
        <FiLock className="input-icon" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      {/* Confirm Password */}

      <div className="input-box">
        <FiLock className="input-icon" />

        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      <button className="signup-btn" type="submit">
        Create Account
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn" type="button">
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>

      <div className="bottom-text">
        Already have an account?
        <span> Login</span>
      </div>
    </form>
  );
}

export default SignupForm;
