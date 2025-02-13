
import "../styles/login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
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
      navigate("/events"); // Redirect after login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const NylasLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/nylas/auth");
      const data = await response.json();

      if (data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        setError("Failed to retrieve authentication URL. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching Nylas auth URL:", error);
      setError("An error occurred while connecting to Nylas. Please try again.");
    }
  };


  // const handleNylasAuth = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/nylas/auth");
  //     const data = await response.json();
  //     if (data.authUrl) {
  //       window.open(data.authUrl, "_blank"); // Redirect in the frontend
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch Nylas auth URL", error);
  //   }
  // };

  // const handleNylasLogin = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:3001/nylas/auth");
      
  //     if (!response.ok) {
  //       const errorText = await response.text(); // Get response as text
  //       console.error("Error response:", errorText);
  //       throw new Error(`Failed to fetch Nylas auth URL: ${errorText}`);
  //     }
  
  //     try {
  //       const data = await response.json(); // Try parsing the JSON response
  //       console.log(data);
  //       window.location.href = data.authUrl; // Redirect to Nylas login
  //     } catch (jsonError) {
  //       console.error("Error parsing JSON:", jsonError);
  //       setError("Unexpected response format from Nylas.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching Nylas auth URL", error);
  //     setError("Failed to connect to Nylas. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  

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
          {/*Button-Container */}
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
            <button onClick={NylasLogin}>Login with Nylas</button>
            </div>
        </form>
      </div>
    </div>
  );
};

  export default LoginPage;
