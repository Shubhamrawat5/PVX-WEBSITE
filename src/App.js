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
import { useState } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [wagroups, setWagroups] = useState(GroupStateProvider());
  const [months, setMonths] = useState(BdayStateProvider());
  const [todayBday, setTodayBday] = useState("");

  const [donators, setdonators] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Group wagroups={wagroups} setWagroups={setWagroups} />
              <Drive />
              <Others />
              <Admin />
            </>
          }
        />

        <Route
          exact
          path="/donate"
          element={
            <Donate
              donators={donators}
              setdonators={setdonators}
              totalDonation={totalDonation}
              setTotalDonation={setTotalDonation}
            />
          }
        />

        <Route
          exact
          path="/bdays"
          element={
            <Community
              months={months}
              setMonths={setMonths}
              todayBday={todayBday}
              setTodayBday={setTodayBday}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
