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
function setGroupLinks(data) {
  console.log(data);
  data.forEach((grp) => {
    document.getElementById("wa-" + grp.name).setAttribute("href", grp.link);
  });
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    setGroupLinks(data);
  });
