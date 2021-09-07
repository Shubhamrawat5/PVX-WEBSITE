import React from "react";

export default function Whatsapp(props) {
  const { wagroups } = props;
  return (
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
  );
}
