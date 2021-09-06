import communityImg from "../asserts/images/group/main.jpg";
import techImg from "../asserts/images/group/tech.jpg";
import progImg from "../asserts/images/group/prog.jpg";
import moviesImg from "../asserts/images/group/movies.jpg";
import statusImg from "../asserts/images/group/status.jpg";
import memeImg from "../asserts/images/group/meme.jpg";
import sticker1Img from "../asserts/images/group/sticker1.jpg";
import sticker2Img from "../asserts/images/group/sticker2.jpg";
import animeImg from "../asserts/images/group/anime.jpg";
import botImg from "../asserts/images/group/bot.jpg";
import photographyImg from "../asserts/images/group/photography.jpg";
import crImg from "../asserts/images/group/cr.jpg";
import cocImg from "../asserts/images/group/coc.jpg";
import haveliImg from "../asserts/images/group/haveli.jpg";
import gamingImg from "../asserts/images/group/gaming.jpg";
import studiesImg from "../asserts/images/group/study.jpg";
import sportsImg from "../asserts/images/group/sports.jpg";
import spaceImg from "../asserts/images/group/space.jpg";
import cryptoImg from "../asserts/images/group/crypto.jpg";
import autoImg from "../asserts/images/group/auto.jpg";
import dealsImg from "../asserts/images/group/deals.jpg";
import pubgmImg from "../asserts/images/group/pubgm.jpg";
import codmImg from "../asserts/images/group/codm.jpg";

import tgpvxImg from "../asserts/images/group/tg-pvx.jpg";
import mirrorImg from "../asserts/images/group/mirror.jpg";

import fbImg from "../asserts/images/group/fb.jpg";
import discordImg from "../asserts/images/group/discord.jpg";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Group() {
  console.log("RENDER GROUP");
  const [wagroups, setWagroups] = useState([
    {
      name: "COMMUNITY",
      desc: "Main Group, For all Discussion",
      img: communityImg,
      url: "",
    },
    {
      name: "TECH DISCUSSION",
      desc: "For Technology Discussion",
      img: techImg,
      url: "",
    },
    {
      name: "TECH NEWS",
      desc: "For Latest Tech News",
      img: techImg,
      url: "",
    },
    {
      name: "PROGRAMMERS",
      desc: "For Programming Discussion",
      img: progImg,
      url: "",
    },
    {
      name: "MOVIES",
      desc: "For Series, Movies Discussion",
      img: moviesImg,
      url: "",
    },
    {
      name: "STATUS",
      desc: "For Sharing Whatsapp Status",
      img: statusImg,
      url: "",
    },
    {
      name: "MEMES",
      desc: "For Memes Sharing",
      img: memeImg,
      url: "",
    },
    {
      name: "STICKER 1.0",
      desc: "For Sticker Sharing",
      img: sticker1Img,
      url: "",
    },
    {
      name: "STICKER 2.0",
      desc: "For Sticker Sharing",
      img: sticker2Img,
      url: "",
    },
    {
      name: "ANIME",
      desc: "For Anime Related Discussion",
      img: animeImg,
      url: "",
    },
    {
      name: "BOT",
      desc: "For Whatsapp Bot Testing",
      img: botImg,
      url: "",
    },
    {
      name: "PHOTOGRAPHERS",
      desc: "For photography Related Discussion",
      img: photographyImg,
      url: "",
    },
    {
      name: "HAVELI",
      desc: "For Bang Bang and Spam",
      img: haveliImg,
      url: "",
    },
    {
      name: "GAMING",
      desc: "For Gaming Discussion",
      img: gamingImg,
      url: "",
    },
    {
      name: "STUDIES",
      desc: "For Study Related Discussion",
      img: studiesImg,
      url: "",
    },
    {
      name: "SPORTS",
      desc: "For Different Sports Discussion",
      img: sportsImg,
      url: "",
    },
    {
      name: "CRYPTO",
      desc: "For Crypto Related Discussion",
      img: cryptoImg,
      url: "",
    },
    {
      name: "CR",
      desc: "For Clash Royale Discussion",
      img: crImg,
      url: "",
    },
    {
      name: "COC",
      desc: "For Clash of Clans Discussion",
      img: cocImg,
      url: "",
    },
    {
      name: "AUTOMOBILE",
      desc: "For Cars Bikes Discussion",
      img: autoImg,
      url: "",
    },
    {
      name: "SPACE",
      desc: "For Space Astronomy Discussion",
      img: spaceImg,
      url: "",
    },
    {
      name: "PUBGM",
      desc: "For Pubg Mobile Discussion",
      img: pubgmImg,
      url: "",
    },
    {
      name: "DEALS",
      desc: "For Loots & Deals Info",
      img: dealsImg,
      url: "",
    },
    {
      name: "CODM",
      desc: "For Call of Duty Mobile Discussion",
      img: codmImg,
      url: "",
    },
  ]);

  const [linksInfo, setlinksInfo] = useState(
    "Adding group links data... please wait."
  );

  useEffect(() => {
    console.log("USEEFFECT");
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

    async function start() {
      try {
        let { data } = await axios.get(url);
        let blocked = setGroupLinks(data);
        if (blocked) {
          setlinksInfo(
            "NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins."
          );

          return;
        }
        setlinksInfo("Group links added!");
        setTimeout(() => {
          setlinksInfo("");
        }, 2000);
      } catch {
        //error in main url, now trying backup url
        try {
          console.log("Error in main url.. trying backup url.");
          setlinksInfo("Problem with main url.. trying backup url.");

          let { data } = await axios.get(urlBackup);
          let blocked = setGroupLinks(data);
          if (blocked) {
            setlinksInfo(
              "NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins."
            );
            return;
          }
          setlinksInfo("Group links added!");
          setTimeout(() => {
            setlinksInfo("");
          }, 2000);
        } catch {
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
              <a id="wa-community" href={group.url} key={index}>
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
          <a href="https://t.me/PVX_Community_Group">
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={tgpvxImg} alt="" />
              <h4 className="group-name">PVX COMMUNITY</h4>
              <p className="group-info">Telegram Group Chat</p>
            </div>
          </a>

          <a href="https://t.me/pvxtechnews">
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={techImg} alt="" />
              <h4 className="group-name">TECH NEWS</h4>
              <p className="group-info">For Daily Tech News</p>
            </div>
          </a>

          <a href="https://t.me/joinchat/J7FzKB1uYt0xNDVl">
            <div data-aos="fade" className="card">
              <img loading="lazy" className="group-dp" src={moviesImg} alt="" />
              <h4 className="group-name">MOVIES</h4>
              <p className="group-info">For Movies & Series</p>
            </div>
          </a>

          <a href="https://t.me/PVXMIRROR">
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
          <a href="https://facebook.com/groups/pvxgaming/">
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
          <a href="https://discord.gg/zMktzNzx9U">
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
          <a href="https://signal.group/#CjQKIFt19XJr-7owvEs8F0otjk5TujIroVnPsqQB-QV8dQXCEhDbIbTkPzfIpDek1Xhoxk53">
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
