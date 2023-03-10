import "../styles/Description.css";

export default function Description({ title, content }) {
  return (
    <>
      <h2 className="description-title">{title}</h2>
      <p className="description-content">{content}</p>
    </>
  );
}
