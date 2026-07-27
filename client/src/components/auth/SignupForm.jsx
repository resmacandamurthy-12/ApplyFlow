import "./SignupForm.css";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function SignupForm({ onSwitch }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");

    if (!fullName || !email || !password || !confirmPassword) {
      setMessageType("error");
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setMessageType("error");
      setMessage("Password should be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessageType("error");
        setMessage(data.message);
        return;
      }

      setMessageType("success");
      setMessage("Account created successfully.");

      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        onSwitch();
      }, 1200);
    } catch (error) {
      console.error(error);
      setMessageType("error");
      setMessage("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <p>Start tracking your internship journey today.</p>

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

      {message && (
        <div
          className={messageType === "success" ? "form-success" : "form-error"}
        >
          {message}
        </div>
      )}

      <button className="signup-btn" type="submit" disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button type="button" className="google-btn" disabled>
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>

      <div className="bottom-text">
        Already have an account?{" "}
        <button type="button" className="text-link" onClick={onSwitch}>
          Login
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
