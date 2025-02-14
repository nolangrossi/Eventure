import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/home.css"; 

const backgroundImages = [
  "../assets/homepage-stage-background.jpg",
  "../assets/homepage-render1.jpg",
  "../assets/homepage-render2.jpg",
  "../assets/homepage-render3.jpg",
  "../assets/homepage-render4.jpg",
  

];

const HomePage = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home-page"
    style={{backgroundImage: `url(${backgroundImages[currentImgIndex]})`}}>
      <div className="overlay">
        <h1>Welcome to Eventure!</h1>
        <p>Where every event is an adventure waiting to happen</p>
        <div className="button-group">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;