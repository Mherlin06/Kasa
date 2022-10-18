import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-header.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="k-vector" className="header__logo"></img>
      <nav>
        <Link to="/" className="nav-links">
          ACCUEIL
        </Link>
        <Link to="/a-propos" className="nav-links">
          A PROPOS
        </Link>
      </nav>
    </header>
  );
}
