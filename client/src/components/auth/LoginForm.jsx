import "./LoginForm.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email);
    console.log(password);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>

      <p>Continue your internship journey with ApplyFlow.</p>

      <div className="input-box">
        <FiMail className="input-icon" />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-box">
        <FiLock className="input-icon" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      <div className="forgot-password">
        <a href="/">Forgot Password?</a>
      </div>

      <button className="login-btn" type="submit">
        Login
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn" type="button">
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>

      <div className="bottom-text">
        Don't have an account?
        <button type="button" className="text-link" onClick={onSwitch}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
