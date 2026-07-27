import "./LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function LoginForm({ onSwitch }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      // Store JWT
      localStorage.setItem("token", data.token);

      // Store User
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect directly
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>

      <p>Continue your internship journey with ApplyFlow.</p>

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

      {/* Error Message */}

      {error && <div className="form-error">{error}</div>}

      {/* Forgot Password */}

      <div className="forgot-password">
        <button type="button" className="text-link" disabled>
          Forgot Password?
        </button>
      </div>

      {/* Login */}

      <button className="login-btn" type="submit" disabled={loading}>
        {loading ? "Logging In..." : "Login"}
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      {/* Google */}

      <button type="button" className="google-btn" disabled>
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>

      <div className="bottom-text">
        Don't have an account?{" "}
        <button type="button" className="text-link" onClick={onSwitch}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
