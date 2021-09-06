import React from "react";
import unreadImg from "../asserts/images/pvx/unread.jpg";
import certiImg from "../asserts/images/pvx/certi.jpg";
import medal1Img from "../asserts/images/medal.png";
import medal2Img from "../asserts/images/medal 2.png";
import medal3Img from "../asserts/images/medal 3.png";

export default function Others() {
  return (
    <section id="achieve-section" className="section">
      <h2 className="section-heading">OTHERS</h2>
      <div className="achieve-container">
        <div data-aos="zoom-in" className="achieve-box unread">
          <img loading="lazy" src={unreadImg} alt="unread" />
          <p>
            Yes it is real! Unread message over some years. <br /> Credits:
            Hritik Jain
          </p>
        </div>

        <div data-aos="zoom-in" className="achieve-box donation">
          <img loading="lazy" src={certiImg} alt="certificate" />
          <p>Donations collected by PVX in Feb 2020</p>
        </div>
        <div data-aos="zoom-in" className="achieve-box tournament">
          <div className="winners">
            <div className="winners-2">
              <img
                loading="lazy"
                src={medal2Img}
                alt="2"
                className="medal-img"
              />
              <p>Nikunj NJV</p>
            </div>
            <div className="winners-1">
              <img
                loading="lazy"
                src={medal1Img}
                alt="1"
                className="medal-img"
              />
              <p>Ash</p>
            </div>
            <div className="winners-3">
              <img
                loading="lazy"
                src={medal3Img}
                alt="3"
                className="medal-img"
              />
              <p>Sweeton</p>
            </div>
          </div>
          <p className="chess-heading">PVX CHESS TOURNAMENT (12/08/21)</p>
        </div>
      </div>
    </section>
  );
}
