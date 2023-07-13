import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.style";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div className="navbar-brand">
          <h2>Movie App</h2>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
