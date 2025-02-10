import { useNavigate } from "react-router-dom";
import "../styles/home.css"; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="overlay">
        <h1>Welcome to Eventure!</h1>
        <p>Where every event is an adventure waiting to happen</p>
        <div className="button-group">
          <button className="explore-btn" onClick={() => navigate("/explore")}>
            Explore
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;