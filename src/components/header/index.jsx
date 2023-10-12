import "./index.css";

import logo from "./logo.svg";

export default function Header({ children }) {
  return (
    <header className="header">
      <img src={logo} alt="" height={32} />
    </header>
  );
}
