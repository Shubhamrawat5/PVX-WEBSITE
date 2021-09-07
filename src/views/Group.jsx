
import React, { useState, useEffect } from "react";
import axios from "axios";
import Whatsapp from "../components/group/Whatsapp";
import Telegram from "../components/group/Telegram";
import OtherGroups from "../components/group/OtherGroups";

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
      <Whatsapp wagroups={wagroups} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}
