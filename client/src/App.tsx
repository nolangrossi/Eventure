import { Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Add Navbar here later if needed */}
      <Outlet /> {/* This is where child pages (Login, Dashboard, etc.) will be displayed */}
      <Navigate to= "/events" />
    </div>
  );
}


export default App;
