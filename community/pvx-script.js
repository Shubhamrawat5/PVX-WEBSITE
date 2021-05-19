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
  //get today date & month
  const d = new Date();
  const todayDate = d.getDate();
  const todayMonth = d.getMonth() + 1; //0 to 11
  // console.log(data);

  data.forEach((item) => {
    const { name, username, date, month, place } = item;

    if (todayDate === date && todayMonth === month) {
      console.log(`TODAY IS ${name} Birthday`);
      document.querySelector(".wish").classList.add("show");

      // check if multiple member bday or not
      if (document.querySelector(".bdy-boy").textContent == "")
        document.querySelector(".bdy-boy").textContent = name;
      else document.querySelector(".bdy-boy").textContent += " & " + name;
    }

    let monthBody = months[month - 1] + "-body"; //in html tbody
    // console.log(monthBody);

    document.getElementById(monthBody).innerHTML += `<tr> 
    <td>${date}</td>
    <td>${name.toLowerCase()}</td>
    <td>${username.toLowerCase()}</td>
    <td>${place.toLowerCase()}</td>
    </tr>
    `;
  });
}

// FOR TESTING..
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
    date: 20,
    month: 5,
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
    date: 20,
    month: 5,
    place: "Mumbai",
  },
  {
    name: "Upanshu nimbulkar",
    username: "USN-2k",
    date: 20,
    month: 5,
    place: "Nagpur",
  },
  {
    name: "Seth Adarsh Jain Ataari",
    username: "Sethadarshjainataari",
    date: 20,
    month: 1,
    place: "Ashoknagar M.P.",
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
