import "../styles/login.css";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth.js';  // Fix typo: `utlis` → `utils`
import { login } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      console.log(data); // Log the raw response
      Auth.login(data.token);
      navigate('/events');  // Redirect to dashboard on success
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error('Failed to login', err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Eventure</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>  {/* Fix: Use `handleLogin` */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}  // Fix: Correct state reference
            onChange={handleChange}  // Fix: Use `handleChange`
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}  // Fix: Correct state reference
            onChange={handleChange}  // Fix: Use `handleChange`
          />
          <div className="button-group">
            <button type="submit" className="login-btn">
              Login
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


