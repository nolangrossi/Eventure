import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";
const Navbar = () => {
  const currentPage = useLocation();
  const hideHeader = currentPage.pathname === "/login" || currentPage.pathname === "/signup";
  return (
    <div className="layout">
      {/* Header with Navigation */}
      {!hideHeader && (
        <header className="header">
          <h1>Eventure</h1>
          <nav>
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/rsvp">RSVP Events</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
      )}
      <footer className="footer">
        <p>&copy; 2025 Eventure. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Navbar;
