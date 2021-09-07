import "../asserts/css/community.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Community() {
  console.log("RENDER COMMUNITY");
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [didUnMount, setDidUnMount] = useState(false); //to check if component is unmounted or not!
  const [linksInfo, setlinksInfo] = useState(
    "Adding group links data... please wait."
  );

  useEffect(() => {
    console.log("USEEFFECT COMMUNITY");
    const url = "https://pvxgroup.herokuapp.com/api/bday";
    const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/bdaay";

    function setBdays({ data }) {
      //get today date & month
      const d = new Date();
      const todayDate = d.getDate();
      const todayMonth = d.getMonth() + 1; //0 to 11

      data.forEach((item) => {
        const { name, username, date, month, place } = item;
        if (todayDate === date && todayMonth === month) {
          console.log(`TODAY IS ${name} Birthday`);
          document.querySelector(".wish").classList.add("show");

          // check if multiple member bday or not
          if (document.querySelector(".bdy-boy").textContent === "")
            document.querySelector(".bdy-boy").textContent = name;
          else document.querySelector(".bdy-boy").textContent += " & " + name;
        }

        let monthBody = months[month - 1].toLowerCase() + "-body"; //in html tbody

        document.getElementById(monthBody).innerHTML += `<tr> 
        <td>${date}</td>
        <td>${name.toLowerCase()}</td>
        <td>${username.toLowerCase()}</td>
        <td>${place.toLowerCase()}</td>
        </tr>
        `;
      });
    }

    async function tryWithUrl(url) {
      // try {
      let { data } = await axios.get(url);
      let blocked = setBdays(data);
      if (blocked) {
        setlinksInfo(
          "NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins."
        );
        return true;
      }
      setlinksInfo("Group links added!");
      setTimeout(() => {
        setlinksInfo("");
        return true;
      }, 2000);
      // } catch {
      //   return false;
      // }
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
            "NOTE: There is a problem with attaching the group links ! Contact PVX admins."
          );
        }
      }
    }

    start();
    return () => setDidUnMount(true);
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
          <div id="err" className="err">
            {linksInfo}
          </div>
        ) : null}
        {/* <div className="card_b" id="january">
          <div className="month_b">January</div>
          <table className="content-table_b">
            <thead>
              <th className="date_b">Date</th>
              <th className="name_b">Name</th>
              <th className="username_b">Username</th>
              <th class="place_b">Place</th>
            </thead>
            <tbody id="january-body"></tbody>
          </table>
        </div> */}

        {months.map((month, index) => {
          return (
            <div className="card_b" id={month.toLowerCase()} key={index}>
              <div className={`month_b month${(index % 3) + 1}_b`}>{month}</div>
              <table className={`content-table_b month${(index % 3) + 1}-tr_b`}>
                <thead>
                  <th className="date_b">Date</th>
                  <th className="name_b">Name</th>
                  <th className="username_b">Username</th>
                  <th className="place_b">Place</th>
                </thead>
                <tbody id={`${month.toLowerCase()}-body`}>
                  {/* <tr>
            <td>24</td>
            <td>Nitesh</td>
            <td>Shi3ld</td>
            <td>Uttarakhand</td>
          </tr> */}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}
