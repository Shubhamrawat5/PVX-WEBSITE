import React from "react";
import certiImg from "../asserts/images/pvx/certi.jpg";
import qrImg from "../asserts/images/pvx_qr.png";

export default function Others() {
  return (
    <section id="achieve-section" className="section">
      <h2 className="section-heading">DONATE</h2>

      <p className="drive-subheading">
        Help PVX COMMUNITY to grow and provide good stuff for all members.
      </p>

      <p>
        <em>Any amount is appreciated</em>
      </p>

      <div data-aos="zoom-in" className="drive-container">
        <p className="donation-text">
          <span className="step">
            1) Scan the given qr code or donate at shubhamraw123@okhdfcbank this
            VPA using your favourite payments app.
            <br />
          </span>
          <span className="step">
            2) Take a screenshot and send it to us
            <a
              href="https://wa.me/919557666582"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            with your name.
            <br />
          </span>
          <span className="step">
            3) You'll be listed on community bot, website and other products as
            donor 💰
          </span>
          <br />
        </p>

        <img loading="lazy" className="qr-img" src={qrImg} alt="pvx-qr" />
      </div>

      <br />

      <p className="drive-subheading">
        Donations are ✅ transparently used to build tools, 🌐 host website, 🤖
        bots and much more ❤️
      </p>

      <div data-aos="zoom-in" className="achieve-box donation">
        <img loading="lazy" src={certiImg} alt="certificate" />
        <p>Donations collected by PVX in Feb 2020</p>
      </div>
    </section>
  );
}
