import React from "react";
import "../asserts/css/community.css";

export default function Community() {
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
  return (
    <>
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

      <div id="err" className="err">
        adding bday data. please wait.
      </div>

      <div className="months-container_b">
        <div className="card_b" id="january">
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
        </div>

        {months.map((month, index) => {
          return (
            <div className="card_b" id={month.toLowerCase()}>
              <div className={`month_b month${index + 1}`}>{month}</div>
              <table className={`content-table_b month${index + 1}-tr_b`}>
                <thead>
                  <th className="date_b">Date</th>
                  <th className="name_b">Name</th>
                  <th className="username_b">Username</th>
                  <th class="place_b">Place</th>
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
    </>
  );
}
