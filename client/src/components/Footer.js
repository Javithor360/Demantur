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

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content-container">
          <img src={Logo_Footer_White} alt="" className="footer-logo" />
        </div>
        <div className="footer-menu">
          <div className="footer-content-container">
            <Link to="/terms" className="menu-item-footer">
              Términos y condiciones
            </Link>
            <Link to="/" className="menu-item-footer">
              Política de privacidad
            </Link>
            <Link to="/help" className="menu-item-footer">
              Ayuda
            </Link>
          </div>
          <div className="footer-content-container">
            <Link to="/about" className="menu-item-footer">
              Nuestra empresa
            </Link>
            <Link to="/contact" className="menu-item-footer">
              Contacto
            </Link>
            <Link to="/auth" className="menu-item-footer">
              Acceder
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
              <select name="" id="">
                <option className="select-item" value="">
                  ES
                </option>
                <option className="select-item" value="">
                  EN
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span className="copyright">
          Todos los derechos reservados. © 2022 Demantur
        </span>
      </div>
    </footer>
  );
};
