import "./Login.css";
import { useState } from "react";

import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="auth-page">
      <div className={`auth-container ${!isLogin ? "signup-mode" : ""}`}>
        {/* LEFT PANEL */}

        <section className="auth-panel">
          <div className="panel-content">
            <div className="panel-logo">ApplyFlow</div>

            {isLogin ? (
              <>
                <h1>Track Every Opportunity</h1>

                <p>
                  Organize every internship application, monitor your progress,
                  and never miss an opportunity again.
                </p>
              </>
            ) : (
              <>
                <h1>Start Your Journey</h1>

                <p>
                  Join ApplyFlow and simplify your internship search with one
                  beautiful dashboard.
                </p>
              </>
            )}

            <div className="auth-switch">
              <button
                type="button"
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>

              <button
                type="button"
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Decorative Shapes */}

          <span className="blob blob1"></span>
          <span className="blob blob2"></span>
          <span className="blob blob3"></span>
        </section>

        {/* RIGHT PANEL */}

        <section className="auth-form-wrapper">
          <div className="glass-card">
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
