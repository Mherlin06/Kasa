import logo from "../assets/logo/logo-footer.svg";
import "../styles/Footer.css";

const Footer = () => (
  <footer>
    <img src={logo} alt="k-vector" className="logo"></img>
    <p className="copyrights">© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
