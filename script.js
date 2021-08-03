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
  let blocked = 0;
  // console.log(data);
  data.forEach((grp) => {
    if (grp.name === "website") {
      if (grp.link === "") blocked = 1;
      return;
    }
    document.getElementById("wa-" + grp.name).setAttribute("href", grp.link);
  });
  return blocked;
}

function showErr(msg) {
  const errElement = document.getElementById("err");
  errElement.innerHTML = msg;
  // errElement.classList.add("err");
}
function removeErr(msg) {
  const errElement = document.getElementById("err");
  errElement.innerHTML = msg;
  errElement.classList.remove("err");
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let blocked = setGroupLinks(data);
    if (blocked) {
      showErr(
        "<strong>NOTE: </strong>Whatsapp Group Links are currently blocked ! Contact PVX admins."
      );
      return;
    }
    showErr("group links added!");
    setTimeout(() => {
      removeErr("");
    }, 2000);
  })
  .catch((err) => {
    //error in main url, now trying backup url
    console.log("Error in main url, trying backup url");
    showErr("problem with main url, trying backup url");
    fetch(urlBackup)
      .then((res) => res.json())
      .then((data) => {
        let blocked = setGroupLinks(data);
        if (blocked) {
          showErr(
            "<strong>NOTE: </strong>Whatsapp Group Links are currently blocked ! Contact PVX admins."
          );
          return;
        }
        showErr("group links added!");
        setTimeout(() => {
          removeErr("");
        }, 2000);
      })
      .catch((err) =>
        showErr(
          "<strong>NOTE: </strong>There is a problem with attaching the B'Day data ! Contact PVX admins."
        )
      );
  });
