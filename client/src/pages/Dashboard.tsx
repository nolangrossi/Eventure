import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [grantId, setGrantId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const grant = params.get("grantId");

    if (grant) {
      localStorage.setItem("nylasGrantId", grant); // Store for future requests
      setGrantId(grant);
      navigate("/dashboard"); // Remove grantId from URL
    }
  }, []);

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      {grantId ? <p>Your Nylas Grant ID: {grantId}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
