import { Navigate, Outlet } from "react-router-dom";
import  Navbar from "./pages/Nav.js";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where child pages (Login, Dashboard, etc.) will be displayed */}
      <Navigate to= "/events" />
    </div>
  );
}


export default App;
