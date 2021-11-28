import Nav from "./components/Nav";
import Header from "./components/Header";
import Group from "./views/Group";
import Drive from "./components/Drive";
import Donate from "./components/Donate";
import Others from "./components/Others";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Community from "./views/Community";
// import About from "./components/About";
import GroupStateProvider from "./views/GroupStateProvider";
import BdayStateProvider from "./views/BdayStateProvider";
import { useState, useEffect } from "react";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [wagroups, setWagroups] = useState(GroupStateProvider());
  const [months, setMonths] = useState(BdayStateProvider());
  const [todayBday, setTodayBday] = useState("");

  const [donators, setdonators] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    //everytime current view will change so page will be scrolled to top
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <>
      <Nav currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === "home" ? (
        <>
          <Header />
          <Group wagroups={wagroups} setWagroups={setWagroups} />
          <Drive />
          <Others />
          <Admin />
        </>
      ) : currentView === "donate" ? (
        <Donate
          donators={donators}
          setdonators={setdonators}
          totalDonation={totalDonation}
          setTotalDonation={setTotalDonation}
        />
      ) : (
        <Community
          months={months}
          setMonths={setMonths}
          todayBday={todayBday}
          setTodayBday={setTodayBday}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
