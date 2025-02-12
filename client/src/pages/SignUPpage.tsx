import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const SignUP = () => {
  const [formData, setFormData] = useState({
    
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (Object.values(formData).some((field) => field.trim() === "")) {
      setError("Please fill in all fields.");
      return;
    }
    console.log(formData);
  
    setLoading(true);
  
    try {
      const response = await fetch('/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Check if the response is OK
      if (!response.ok) {
        let errorMessage = "Signup failed. Please try again.";
  
        // Only attempt to parse the response if the body exists
        const errorData = await response.text(); // Use text() to handle empty responses
        if (errorData) {
          try {
            const errorJson = JSON.parse(errorData);
            errorMessage = errorJson.error || errorMessage;
          } catch (parseError) {
            console.error("Error parsing response:", parseError);
          }
        }
  
        throw new Error(errorMessage);
      }
  
      // If the signup is successful, navigate to the login page
      setLoading(false);
      navigate("/login");
  
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  



  return (
<div className="signup-page">
  <div className="signup-container">
    <h2>Create Account</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSignup}>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={formData.firstname}
        onChange={handleChange}
        className="input-field"
        required
        autoComplete="given-name"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={handleChange}
        className="input-field"
        required
        autoComplete="family-name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input-field"
        required
        autoComplete="email"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="input-field"
        required
        autoComplete="username"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="input-field"
        required
        autoComplete="new-password"
      />
      <button type="submit" className="login-btn" disabled={loading}>
        {loading ? "Creating Profile..." : "Create Profile"}
      </button>
    </form>
  </div>
</div>

  );
};

export default SignUP;
