import navLogoImg from "../asserts/images/pvxx.png";

export default function Nav(props) {
  const { currentView, setCurrentView } = props;
  return (
    <nav>
      <img className="nav-logo" src={navLogoImg} alt="logo" />
      <div className="nav-item-container">
        <li
          className={currentView === "home" ? "active" : null}
          onClick={() => setCurrentView("home")}
        >
          Home
        </li>
        <li
          className={currentView === "donate" ? "active" : null}
          onClick={() => setCurrentView("donate")}
        >
          Donate
        </li>
        <li
          className={currentView === "bdays" ? "active" : null}
          onClick={() => setCurrentView("bdays")}
        >
          B'Days
        </li>
      </div>
    </nav>
  );
}
