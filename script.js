/* ----------------------------- FOR DARK THEME ----------------------------- */
let themeMode = document.querySelector(".theme-mode-container");

themeMode.addEventListener("click", changeTheme);

function changeTheme() {
  document.querySelector("body").classList.toggle("dark");
  let currentThemeMode = document.querySelector(".theme-mode");

  if (currentThemeMode.getAttribute("src") === "images/moon.svg")
    currentThemeMode.setAttribute("src", "images/light.svg");
  else currentThemeMode.setAttribute("src", "images/moon.svg");
}

/* -------------------- FOR ADDING WA GROUP LINKS IN HTML -------------------- */

const url = "https://pvxgroup.herokuapp.com/api/links";
const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/links";
function setGroupLinks(data) {
  // console.log(data);
  data.forEach((grp) => {
    document.getElementById("wa-" + grp.name).setAttribute("href", grp.link);
  });
}

function showErr() {
  console.log("Error with showing group links!");
  const errElement = document.getElementById("err");
  errElement.innerHTML =
    "<strong>NOTE: </strong>There is a problem with attaching the group links ! Contact PVX admins.";
  errElement.classList.add("err");
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    setGroupLinks(data);
  })
  .catch((err) => {
    //error in main url, now trying backup url
    console.log("Error in main url, trying backup url");
    fetch(urlBackup)
      .then((res) => res.json())
      .then((data) => {
        setGroupLinks(data);
      })
      .catch((err) => showErr());
  });
