import tgpvxImg from "../asserts/images/group/tg-pvx.jpg";
import mirrorImg from "../asserts/images/group/mirror.jpg";
import techImg from "../asserts/images/group/tech.jpg";
import moviesImg from "../asserts/images/group/movies.jpg";
import communityImg from "../asserts/images/group/main.jpg";
import fbImg from "../asserts/images/group/fb.jpg";
import discordImg from "../asserts/images/group/discord.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Group(props) {
  console.log("RENDER GROUP");
  const { wagroups, setWagroups } = props;

  const [linksInfo, setlinksInfo] = useState("");

  useEffect(() => {
    console.log("USEEFFECT GROUP");
    if (wagroups[1].url !== "https://") return; //to avoid reattaching group links when internal page change

    setlinksInfo("Adding group links data... please wait.");
    const url = "https://pvxgroup.herokuapp.com/api/linkss";
    // const urlBackup = "https://pvxgroupbackup.herokuapp.com/api/links";
    const urlBackup = "https://pvxgroup.herokuapp.com/api/links";

    function setGroupLinks(data) {
      let newState = [];

      //check if group links are blocked or not
      data.forEach((grp) => {
        if (grp.name === "website") {
          if (grp.link === "") return true;
        }
      });

      //grpExt = coming from outside - api
      //grpIn = present inside already
      wagroups.forEach((grpIn) => {
        data.forEach((grpOut) => {
          if (grpOut.name === grpIn.name.toLowerCase()) {
            newState.push({
              ...grpIn,
              url: grpOut.link,
            });
          }
        });
      });
      setWagroups(newState);
      return false;
    }

    async function tryWithUrl(url) {
      try {
        let { data } = await axios.get(url);
        let blocked = setGroupLinks(data);
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
      } catch {
        return false;
      }
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
    //TODO: fix this eslint warning
    // eslint-disable-next-line
  }, []);

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {linksInfo ? (
        <div id="err" className="err">
          {linksInfo}
        </div>
      ) : null}
      <div className="wa groups">
        <h3 className="app-heading">WHATSAPP</h3>
        <div className="group-container">
          {wagroups.map((group, index) => {
            return (
              <a
                href={group.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div data-aos="fade" className="card">
                  <img className="group-dp" src={group.img} alt="" />
                  <h4 className="group-name">{group.name}</h4>
                  <p className="group-info">{group.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="tg groups">
        <h3 className="app-heading">TELEGRAM</h3>

        <div className="group-container">
          <a
            href="https://t.me/PVX_Community_Group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={tgpvxImg} alt="" />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">Telegram Group Chat</p>
            </div>
          </a>

          <a
            href="https://t.me/pvxtechnews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={techImg} alt="" />
              <h4 className="group-name">TECH NEWS</h4>
              <p className="group-info">For Daily Tech News</p>
            </div>
          </a>

          <a
            href="https://t.me/joinchat/J7FzKB1uYt0xNDVl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={moviesImg} alt="" />
              <h4 className="group-name">MOVIES</h4>
              <p className="group-info">For Movies & Series</p>
            </div>
          </a>

          <a
            href="https://t.me/PVXMIRROR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={mirrorImg} alt="" />
              <h4 className="group-name">MIRROR</h4>
              <p className="group-info">For Copying Files to Gdrive</p>
            </div>
          </a>
        </div>
      </div>

      <div className="fb groups">
        <h3 className="app-heading">FACEBOOK</h3>
        <div className="group-container">
          <a
            href="https://facebook.com/groups/pvxgaming/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={fbImg} alt="" />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">Facebook PVX group</p>
            </div>
          </a>
        </div>
      </div>

      <div className="discord groups">
        <h3 className="app-heading">DISCORD</h3>
        <div className="group-container">
          <a
            href="https://discord.gg/zMktzNzx9U"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img
                loading="lazy"
                className="group-dp"
                src={discordImg}
                alt=""
              />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">Discord PVX group</p>
            </div>
          </a>
        </div>
      </div>

      <div className="signal groups">
        <h3 className="app-heading">SIGNAL</h3>
        <div className="group-container">
          <a
            href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade" className="card">
              <img
                loading="lazy"
                className="group-dp"
                src={communityImg}
                alt=""
              />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">Signal PVX group</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
