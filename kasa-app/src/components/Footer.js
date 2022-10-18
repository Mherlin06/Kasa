import logo from "../assets/logo/logo-footer.svg";
import "../styles/Footer.css";

const Footer = () => (
  <footer>
    <div className="logo">
    <img src={logo} alt="k-vector"></img>
    </div>
    <p className="copyrights">© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
