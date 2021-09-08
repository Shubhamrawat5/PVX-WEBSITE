import navLogoImg from "../asserts/images/pvxx.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  // const [state, setstate] = useState(initialState)
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
        {/* <Link to="/#group-section">
          <li className="imp-li group-nav">Groups</li>
        </Link>
        <Link to="/#drive-section">
          <li className="imp-li">Drive</li>
        </Link> */}
        <Link to="/community">
          <li className={pathname === "/community" ? "active" : null}>
            B'Days
          </li>
        </Link>
      </div>
    </nav>
  );
}
