import "./index.css";

export default function ListItem({ children, imgSrc, title }) {
  return (
    <li className="list-item">
      {imgSrc && <img height={24} width={24} src={imgSrc} alt="Icon" />}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}{" "}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
}
