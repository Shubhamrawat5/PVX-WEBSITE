import "../asserts/css/community.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Month from "../components/Month";

export default function Community(props) {
  console.log("RENDER COMMUNITY");
  const { months, setMonths } = props;

  // const [didUnMount, setDidUnMount] = useState(false); //to check if component is unmounted or not!
  const [linksInfo, setlinksInfo] = useState("");

  useEffect(() => {
    console.log("USEEFFECT COMMUNITY");
    if (months[0].members.length !== 0) return; //already attached bdays!

    setlinksInfo("Adding Bday data... please wait.");
    const url = "https://pvxgroup.herokuapp.com/api/bday";
    const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/bdaay";

    function setBdays({ data }) {
      //get today date & month
      const d = new Date();
      const todayDate = d.getDate();
      const todayMonth = d.getMonth() + 1; //0 to 11

      let newState = months;

      data.forEach((item) => {
        const { name, username, date, month, place } = item;

        //TODO: show today birthday
        // if (todayDate === date && todayMonth === month) {
        //   console.log(`TODAY IS ${name} Birthday`);
        //   document.querySelector(".wish").classList.add("show");

        //   // check if multiple member bday or not
        //   if (document.querySelector(".bdy-boy").textContent === "")
        //     document.querySelector(".bdy-boy").textContent = name;
        //   else document.querySelector(".bdy-boy").textContent += " & " + name;
        // }

        newState[month - 1].members.push({ date, name, username, place });
      });

      setMonths(newState);
    }

    async function tryWithUrl(url) {
      // try {
      let { data } = await axios.get(url);
      setBdays(data);

      setlinksInfo("Bday data added!");
      setTimeout(() => {
        setlinksInfo("");
        return true;
      }, 2000);
    }

    async function start() {
      let response = await tryWithUrl(url);
      if (response === false) {
        //error in main url, now trying backup url
        console.log("Error in main url.. trying backup url.");
        setlinksInfo("Problem with main url.. trying backup url.");
        let response = await tryWithUrl(urlBackup);
        if (response === false) {
          setlinksInfo(
            "NOTE: There is a problem with attaching the bday data ! Contact PVX admins."
          );
        }
      }
    }

    start();
    // return () => setDidUnMount(true);
    //TODO: fix this eslint warning
    // eslint-disable-next-line
  }, []);

  return (
    <section id="birthday_b">
      <h2 className="bday-header_b">Birthday List</h2>
      <div className="wish_b">
        <div className="gif_b"></div>
        <div className="today-bday-text_b">
          <h6 className="happy-birthday_b">Happy Birthday</h6>
          <h6 className="bdy-boy_b">""</h6>
        </div>
        <img src="balloon.png" className="balloon_b" alt=""></img>
        <img src="balloon.png" className="balloon_b balloon2_b" alt=""></img>
      </div>

      <div className="months-container_b">
        {linksInfo ? (
          <div id="err" className="err" style={{ border: "1px solid black" }}>
            {linksInfo}
          </div>
        ) : null}

        {months.map((month, index) => {
          return <Month month={month} index={index} key={index} />;
        })}
      </div>
    </section>
  );
}
