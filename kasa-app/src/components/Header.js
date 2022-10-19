import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-header.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="k-vector" className="header__logo"></img>
      <nav>
        <Link to="/" className="nav-links">
          Acceuil
        </Link>
        <Link to="/a-propos" className="nav-links">
          A propos
        </Link>
      </nav>
    </header>
  );
}
