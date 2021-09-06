import React from "react";
import driveImg from "../asserts/images/drive.png";

export default function Drive() {
  return (
    <section id="drive-section" className="section">
      <h2 className="section-heading">PVX SHARED DRIVE</h2>
      <p className="drive-subheading">
        Access all Movies, Series, Anime, Courses, PC Games, Softwares in one
        place!
      </p>
      <div data-aos="zoom-in" className="drive-container">
        <img loading="lazy" className="drive-img" src={driveImg} alt="drive" />
        <p className="drive-text">
          Join PVX Shared Drive
          <br />
          <a href="https://groups.google.com/g/pvx-movies">
            click here for link.
          </a>
          <br />
          1) Open in desktop mode
          <br />
          2) Join Group
          <br />
          (an error message can be displayed: "You don't have permission to
          access this content", but ignore it!) <br />
          3) Open Google drive app
          <br />
          4) Go to "Files", then "Shared drives" - Adi
          <br />
          Enjoy!
          <br />
          <br />- Managed by Aditya Mukherjee
        </p>
      </div>
    </section>
  );
}
