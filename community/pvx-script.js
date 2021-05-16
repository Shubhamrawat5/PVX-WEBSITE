const url = "https://pvx-bday.herokuapp.com/api";
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function getData(data) {
  console.log(data);

  data.forEach((item) => {
    const { name, username, date, month, place } = item;

    let monthBody = months[month - 1] + "-body"; //in html tbody
    console.log(monthBody);

    document.getElementById(monthBody).innerHTML += `<tr> 
    <td>${date}</td>
    <td>${name.toLowerCase()}</td>
    <td>${username.toLowerCase()}</td>
    <td>${place.toLowerCase()}</td>
    </tr>
    `;
  });
}

const temp = [
  {
    name: "Shubham Rawat",
    username: "Krypton",
    date: 14,
    month: 2,
    place: "Pauri",
  },
  {
    name: "Deepanjan Bhattacharjee",
    username: "Deepanjan",
    date: 24,
    month: 11,
    place: "Kolkata",
  },
  { name: "Ravi vats", username: "Ravi", date: 9, month: 8, place: "Hisar" },
  {
    name: "Patel Bhargav",
    username: "unnamed boi pvx",
    date: 1,
    month: 6,
    place: "Ahmedabad",
  },
  {
    name: "Tarun thakur",
    username: "Tarun thakur",
    date: 2,
    month: 5,
    place: "Patiala, Punjab",
  },
  {
    name: "Vivek",
    username: " ︻╦╤─ ҉ - √ﾉ√乇ズシ",
    date: 14,
    month: 8,
    place: "Mumbai",
  },
  {
    name: "VISHAL",
    username: "STORMBREAKER",
    date: 26,
    month: 12,
    place: "Mumbai",
  },
  {
    name: "Upanshu nimbulkar",
    username: "USN-2k",
    date: 30,
    month: 3,
    place: "Nagpur",
  },
  {
    name: "Nischay Sharma",
    username: "Nischay",
    date: 22,
    month: 6,
    place: "New Delhi",
  },
  {
    name: "Karan Singh",
    username: "F1ash",
    date: 2,
    month: 1,
    place: "Jaipur",
  },
];
// getData(temp);

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    getData(data.data);
  });

/* ---------------------------------- AJAX ---------------------------------- */
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);

// xhr.onprogress = function () {
//   console.log("ON PROGRESS");
// };

// xhr.onload = function () {
//   console.log("ON LOAD");
// };

// xhr.onreadystatechange = function () {
//   console.log("ON READY STATE CHANGE");
//   console.log(xhr.readyState);
// };

// xhr.send();
