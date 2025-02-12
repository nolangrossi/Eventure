import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false); // Fix: Added useState for loading
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear error when the user starts typing
    if (error) setError("");

    if (!userName || !password) {
      if (!userName && !password)
        setError("Please enter both username and password.");
      else if (!userName) setError("Please Enter a Username.");
      else setError("A Valid Password is Required.");
      return;
    }

    // TODO: Replace with API call to backend authentication
    
    if (userName === "testuser" && password === "password123") {
      localStorage.setItem("token", "mock-jwt-token"); // Temporary mock authentication
      navigate("/dashboard"); // Redirect after login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };


  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Eventure</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Button Group */}
          <div className="button-group">
            <button type="submit" className="login-btn" /*disabled={loading}*/>
            Login
              {/* {loading ? "Logging in..." : "Login"} */}
            </button>
            <button
              type="button"
              className="create-account-btn"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


