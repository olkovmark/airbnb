import Heading from "../heading";
import "./index.css";

export default function Description({ children, title }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{children}</p>
    </div>
  );
}
