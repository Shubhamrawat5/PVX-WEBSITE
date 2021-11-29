import tgpvxImg from "../../asserts/images/group/tg-pvx.jpg";
import mirrorImg from "../../asserts/images/group/mirror.jpg";
import techImg from "../../asserts/images/group/tech.jpg";
import moviesImg from "../../asserts/images/group/movies.jpg";

export default function Telegram() {
  return (
    <div className="tg groups">
      <h3 className="app-heading">TELEGRAM</h3>

      <div className="group-container">
        <a
          href="https://t.me/PVX_Community_Group"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-community"
        >
          <div className="card">
            <h4 className="group-name">COMMUNITY</h4>
            <img className="group-dp" src={tgpvxImg} alt="" />
            <p className="group-info">(Group Chat)</p>
          </div>
        </a>

        <a
          href="https://t.me/pvxtechnews"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-technews"
        >
          <div className="card">
            <h4 className="group-name">TECH NEWS</h4>
            <img className="group-dp" src={techImg} alt="" />
            <p className="group-info">(For Daily Tech News)</p>
          </div>
        </a>

        <a
          href="https://t.me/joinchat/J7FzKB1uYt0xNDVl"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-movies"
        >
          <div className="card">
            <h4 className="group-name">MOVIES</h4>
            <img className="group-dp" src={moviesImg} alt="" />
            <p className="group-info">(For any Movies & Series)</p>
          </div>
        </a>

        <a
          href="https://t.me/PVXMIRROR"
          target="_blank"
          rel="noopener noreferrer"
          className="tg-mirror"
        >
          <div className="card">
            <h4 className="group-name">MIRROR</h4>
            <img className="group-dp" src={mirrorImg} alt="" />
            <p className="group-info">(For Copying Files to Gdrive)</p>
          </div>
        </a>
      </div>
    </div>
  );
}
