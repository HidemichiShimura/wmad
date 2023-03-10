import "../styles/Card.css";

import { Description, Socials } from "./index";

export default function Card({
  fullName,
  avatar,
  title,
  email,
  about,
  interests,
}) {
  return (
    <div className="card-wrapper">
      <div
        className="card-image"
        style={{
          height: 317,
          width: 317,
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="profile">
        <h2 className="fullName">{fullName}</h2>
        <p className="title">{title}</p>
        <p className="website">janedoe.website</p>
        <button className="button" href={email}>
          <img
            src="https://img.icons8.com/windows/16/null/filled-message.png"
            alt="email icon"
          />
          <span className="email">Email</span>
        </button>
        <div className="description">
          <Description title="About" content={about} />
          <br />
          <Description title="Interests" content={interests} />
        </div>
      </div>
      <Socials />
    </div>
  );
}
