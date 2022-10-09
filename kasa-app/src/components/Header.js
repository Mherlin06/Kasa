import k from "../assets/logo/k-vector.svg";
import house from "../assets/logo/house-vector.svg";
import door from "../assets/logo/door-vector.svg";
import s from "../assets/logo/s-vector.svg";
import a from "../assets/logo/a-vector.svg";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={k} alt="k-vector"></img>
        <img src={house} alt="house-vector"></img>
        <img src={door} alt="door-vector" className="door-header"></img>
        <img src={s} alt="s-vector"></img>
        <img src={a} alt="a-vector"></img>
      </div>
      <nav>
        <a href="#" className="nav-links">
          ACCUEIL
        </a>
        <a href="#" className="nav-links">
          A PROPOS
        </a>
      </nav>
    </header>
  );
}

export default Header;
