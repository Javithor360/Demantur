// Estilos
import "./assets/scss/main.scss";

// Componentes
import { Navbar, Footer } from "../../components/";
import Slide1 from "../../Slide"

// Hooks
import { Link } from "react-router-dom";

// Asstes (Iconos e Imagenes)
import { FaAngleRight } from "react-icons/fa";
import Logo_Icon_White from "./assets/img/logos/svg/Logo_Icon-1_White.svg";

const SliderImages = require.context("./assets/img/index/slider", true);
const TarjetasImages = require.context("./assets/img/index", true);

export const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Slide1 />

      

        <div className="section-tittle">
          <p>Soluciones financieras en un solo lugar</p>
          <hr />
        </div>

        <div className="cards-container">
          <div className="card">
            <img src={TarjetasImages("./card-1.png")} alt="" />
            <h4>Tarjetas</h4>
            <p>
              Con nuestras tarjetas recibes los mejores beneficios adaptados a
              tus necesidades
            </p>
            <div className="boton">
              <Link to="/cards" className="LinkHover">
                <span>Conoce Más</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={TarjetasImages("./card-2.png")} alt="" />
            <h4>Solicitud de prestamos</h4>
            <p>
              Obtén tu préstamo fácil, seguro y rápido, para que puedas cumplir
              tus metas
            </p>
            <div className="boton">
              <Link to="/Loans" className="LinkHover">
                <span>Conoce Más</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={TarjetasImages("./card-3.png")} alt="" />
            <h4>Cuentas bancarias</h4>
            <p>
              Elige la mejor cuenta que se adapte a tus necesidades con los
              mejores beneficios
            </p>
            <div className="boton">
              <Link to="/accounts" className="LinkHover">
                <span>Conoce Más</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="dual-banner-container">
          <div className="dual-banner">
            <div className="dual-banner-image-1" />
            <div className="dual-banner-content">
              <p>Ahorrar te trae muchas oportunidades a futuro</p>
              <hr className="blue-underline" />
              <p>
                Abre tu cuenta de ahorros y disfruta de muchos beneficios, ganas
                intereses sobre tus ahorros, controla tu dinero y ten acceso a
                el en todo momento.
              </p>
              <Link to="/accounts/savings" className="about-button-rg">
                <span>Conoce Más</span>
                <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
              </Link>
            </div>
          </div>

          <div className="dual-banner">
            <div className="dual-banner-content">
              <p>Te ayudamos a cumplir tus sueños</p>
              <hr className="blue-underline" />
              <p>
                Conoce nuestros préstamos y elige el mejor para cumplir tus
                metas, con tramites sencillos y rápidos, además de una tasa de
                intereses justa
              </p>
              <Link to="/Loans" className="about-button-rg">
                <span>Conoce Más</span>
                <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
              </Link>
            </div>
            <div className="dual-banner-image-2" />
          </div>
        </div>

        <div className="section-tittle">
          <p>Facilitamos nuestros servicios</p>
          <hr />
        </div>

        <div className="help-center-banner">
          <div className="help-center-content">
            <div className="banner-logo">
              <img src={Logo_Icon_White} alt="" />
            </div>
            <div className="banner-tittle">
              <p> Centro de Ayuda </p>
            </div>
            <hr className="white-uderline" />
            <div className="help-banner-information">
              <p>
                ¿Tienes dudas sobre como realizar ciertos procesos en nuestro
                banco?, visita nuestro centro de ayuda, ahí encontraras
                preguntas frecuentes que seguramente te servirán para solventar
                tu duda.
              </p>
            </div>
            <div>
              <Link to="/help" className="view-more-button">
                <span>Ver Más</span>
                <FaAngleRight className="fa-solid fa-angle-right view-more-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="section-tittle">
          <p>Servicios para empresas</p>
          <hr />
        </div>

        <div className="buisness-banner">
          <div className="row-content">
            <p>Cuentas profesionales para tu empresa</p>
            <hr className="blue-underline-2" />
            <p>
              Aumenta el potencial de tu empresa y hazla crecer con nuestros
              servicios financieros que brindan facilidad al administrar las
              finanzas de tu negocio
            </p>
            <Link to="/info" className="view-more-button">
              <span>Ver Más</span>
              <FaAngleRight className="fa-solid fa-angle-right view-more-icon" />
            </Link>
          </div>
          <div className="row-image" />
        </div>

        <div className="section-tittle">
          <p>Quienes somos</p>
          <hr className="smallest" />
        </div>

        <div className="about-banner">
          <div className="about-banner-content">
            <p>Personas como tú</p>
            <hr className="blue-underline-3" />
            <p>
              Somos una empresa comprometida con lo que hace, descubre más sobre
              nosotros y como hacemos para brindarte un servicio de calidad
            </p>
            <Link to="/" className="about-button-rg">
              <span>Conoce Más</span>
              <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
            </Link>
          </div>
        </div>


      <Footer />
    </>
  );
};
