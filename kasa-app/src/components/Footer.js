import k from "../assets/logo/k-footer.svg";
import house from "../assets/logo/house-footer.svg";
import door from "../assets/logo/door-footer.svg";
import s from "../assets/logo/s-footer.svg";
import a from "../assets/logo/a-footer.svg";

const Footer = () => (
  <footer>
    <div className="logo footer__logo">
      <img src={k} alt="k-vector"></img>
      <img src={house} alt="house-vector"></img>
      <img src={door} alt="door-vector"></img>
      <img src={s} alt="s-vector"></img>
      <img src={a} alt="a-vector"></img>
    </div>
    <p className="copyrights">© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
