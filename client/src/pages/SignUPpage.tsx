import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const SignUP = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleSignup = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Basic validation
      if (!firstName || !lastName || !email || !username || !password) {
        setError("Please fill in all fields.");
        return;
      }
  
      // You can replace this with an API call to create an account
      console.log({ firstName, lastName, email, username, password });
  
      // Redirect to login page after successful signup
      navigate("/login");
    };
  
    return (
      <div className="signup-page">
        <div className="signup-container">
          <h2>Create Account</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    );
};

export default SignUP;

