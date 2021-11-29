import navLogoImg from "../asserts/images/pvxx.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Nav(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    //everytime url will change so page will be scrolled to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src={navLogoImg} alt="logo" />
      </Link>
      <div className="nav-item-container">
        <Link to="/">
          <li className={pathname === "/" ? "active" : null}>Home</li>
        </Link>
        <Link to="/stats">
          <li className={pathname === "/stats" ? "active" : null}>Stats</li>
        </Link>
        <Link to="/donate">
          <li className={pathname === "/donate" ? "active" : null}>Donate</li>
        </Link>
        <Link to="/bdays">
          <li className={pathname === "/bdays" ? "active" : null}>B'Days</li>
        </Link>
      </div>
    </nav>
  );
}
