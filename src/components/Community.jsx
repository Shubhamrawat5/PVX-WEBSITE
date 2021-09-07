import React from "react";

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
      <header>
        <h1>PVX</h1>
        <h2>Birthday List</h2>
      </header>
      <div class="wish">
        <div class="gif"></div>
        <div class="today-bday-text">
          <h6 class="happy-birthday">Happy Birthday</h6>
          <h6 class="bdy-boy">""</h6>
        </div>
        <img src="balloon.png" class="balloon" alt=""></img>
        <img src="balloon.png" class="balloon balloon2" alt=""></img>
      </div>

      <div id="err" class="err">
        adding bday data. please wait.
      </div>

      <div class="months-container">
        <div class="card" id="january">
          <div class="month">January</div>
          <table class="content-table">
            <thead>
              <th class="date">Date</th>
              <th class="name">Name</th>
              <th class="username">Username</th>
              <th class="place">Place</th>
            </thead>
            <tbody id="january-body"></tbody>
          </table>
        </div>

        {months.map((month, index) => {
          return (
            <div class="card" id={month.toLowerCase()}>
              <div class={`month month${index + 1}`}>{month}</div>
              <table class={`content-table month${index + 1}-tr`}>
                <thead>
                  <th class="date">Date</th>
                  <th class="name">Name</th>
                  <th class="username">Username</th>
                  <th class="place">Place</th>
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
