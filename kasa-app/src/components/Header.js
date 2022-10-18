import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-header.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
      <img src={logo} alt="k-vector"></img>
      </div>
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
