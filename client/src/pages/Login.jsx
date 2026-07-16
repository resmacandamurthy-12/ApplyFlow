import "./Login.css";
function Login() {
  return (
    <main className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <div className="login-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="login-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-button">Login</button>
      </div>
    </main>
  );
}

export default Login;
