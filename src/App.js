import Nav from "./components/Nav";
import Header from "./components/Header";
import Group from "./views/Group";
import Drive from "./components/Drive";
import Others from "./components/Others";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import Community from "./views/Community";
// import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupStateProvider from "./views/GroupStateProvider";
import BdayStateProvider from "./views/BdayStateProvider";
import { useState } from "react";

function App() {
  const [wagroups, setWagroups] = useState(GroupStateProvider());
  const [months, setMonths] = useState(BdayStateProvider());

  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Header />
          <Group wagroups={wagroups} setWagroups={setWagroups} />
          <Drive />
          <Others />
          <Admin />
          <Footer />
        </Route>
        <Route exact path="/community">
          <Community months={months} setMonths={setMonths} />
          <Footer />
        </Route>
        {/* <Route exact path="/about">
          <About />
        </Route> */}
        <Route>
          <p style={{ padding: "100px 0 50px 0", color: "black" }}>
            you're in wrong url.
          </p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
