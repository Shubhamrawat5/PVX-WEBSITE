import React from "react";
import kryptonImg from "../asserts/images/admin/krypton.jpg";
import adiImg from "../asserts/images/admin/adi.jpg";
import rollyImg from "../asserts/images/admin/rolly.jpg";
import mundalImg from "../asserts/images/admin/mundal.jpg";
import bhanuImg from "../asserts/images/admin/bhanu.jpg";
import jigneshImg from "../asserts/images/admin/jignesh.jpg";
import anmolImg from "../asserts/images/admin/anmol.jpg";
import masterImg from "../asserts/images/admin/master.jpg";
import kiraImg from "../asserts/images/admin/kira.jpg";
import ankitImg from "../asserts/images/admin/toxic.jpg";
import mysImg from "../asserts/images/admin/mys.jpg";
import vivekImg from "../asserts/images/admin/leo.jpg";
import karmaImg from "../asserts/images/admin/karma.jpg";

export default function Admin() {
  let admins = [
    {
      name: "KRYPTON",
      img: kryptonImg,
    },
    {
      name: "ADI",
      img: adiImg,
    },
    {
      name: "ROLLY",
      img: rollyImg,
    },
    {
      name: "MUNDAL",
      img: mundalImg,
    },
    {
      name: "BHANU",
      img: bhanuImg,
    },
    {
      name: "JIGNESH",
      img: jigneshImg,
    },
    {
      name: "CHIEF",
      img: masterImg,
    },
    {
      name: "Añøn¥móú$",
      img: anmolImg,
    },
    {
      name: "KIRA",
      img: kiraImg,
    },
    {
      name: "ANKIT",
      img: ankitImg,
    },
    {
      name: "K Λ Я M Λ",
      img: karmaImg,
    },
    {
      name: "MYSTIXXZ",
      img: mysImg,
    },
    {
      name: "VIVEK",
      img: vivekImg,
    },
  ];
  return (
    <section id="admin-section" className="section">
      <h2 className="section-heading">PVX MAIN ADMINS</h2>

      <div className="group-container">
        {admins.map((admin, index) => {
          return (
            <div className="admin-box" key={index}>
              <img className="admin-dp" src={admin.img} alt="admin" />
              <h4 className="admin-name">{admin.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
