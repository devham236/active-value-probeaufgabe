import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import "../styles/stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="company-info">
          <div>
            <p>Benzenbergstraße 39 - 47</p>
            <p>40219 Düsseldorf</p>
          </div>
          <div>
            <p>Telefon: +49 211/749 505 0</p>
            <p>Email: info@active-value.de</p>
          </div>
        </div>
        <div className="mobile-social-icons">
          <span className="instagram">
            <img src={instagram} alt="" />
          </span>
          <span className="facebook">
            <img src={facebook} alt="" />
          </span>
        </div>
        <div className="impressum-agb">
          <div>
            <p>Impressum</p>
            <p>Datenschutz</p>
            <p>AGB</p>
          </div>
          <p>Copyright © 2018 active value GmbH - Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
