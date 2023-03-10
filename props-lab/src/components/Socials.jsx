import "../styles/Socials.css";

const SocialItems = ["twitter", "facebook", "instagram", "linkedin", "github"];

export default function Socials() {
  return (
    <div className="socials">
      {SocialItems.map((socialItem, idx) => (
        <img
          className="social-icon"
          alt={`${socialItem} icon`}
          src={`./images/icon-${socialItem}.png`}
          key={idx}
        />
      ))}
    </div>
  );
}
