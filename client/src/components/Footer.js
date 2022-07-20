// Estilos
import "./assets/scss/footer-style.scss";

//Hooks
import { Link } from "react-router-dom";

// Assets (Iconos e Imagenes)
import {
  FaInstagram as InstagramIcon,
  FaFacebook as FbIcon,
  FaRegEnvelope as MailIcon,
} from "react-icons/fa";
import Logo_Footer_White from "./assets/img/Demantur_Imagotype-2_White.svg";

// Translation as well -.-
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content-container">
          <img src={Logo_Footer_White} alt="" className="footer-logo" />
        </div>
        <div className="footer-menu">
          <div className="footer-content-container">
            <Link to="/terms" className="menu-item-footer">
              {t("main_footer.terms")}
            </Link>
            <Link to="/" className="menu-item-footer">
              {t("main_footer.policy")}
            </Link>
            <Link to="/help" className="menu-item-footer">
              {t("main_footer.help")}
            </Link>
          </div>
          <div className="footer-content-container">
            <Link to="/about" className="menu-item-footer">
              {t("main_footer.about")}
            </Link>
            <Link to="/contact" className="menu-item-footer">
              {t("main_footer.contact")}
            </Link>
            <Link to="/auth" className="menu-item-footer">
              {t("main_footer.access")}
            </Link>
          </div>
          <div className="social-icons-container">
            <div className="social-icons">
              <Link to="/" className="social-link">
                <InstagramIcon />
              </Link>
              <Link to="/" className="social-link">
                <FbIcon />
              </Link>
              <Link to="/" className="social-link">
                <MailIcon />
              </Link>
            </div>
            <div className="lang-footer-select">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span className="copyright">{t("main_footer.copyright")}</span>
      </div>
    </footer>
  );
};
