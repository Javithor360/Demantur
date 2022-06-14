import "./assets/scss/main.scss";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

import { FaAngleRight } from 'react-icons/fa'

import SliderImage1 from "./assets/img/index/slider/slider-image-1.jpg";
import SliderImage2 from "./assets/img/index/slider/slider-image-2.jpg";
import SliderImage3 from "./assets/img/index/slider/slider-image-3.jpg";
import SliderImage4 from "./assets/img/index/slider/slider-image-4.jpg";

import Tarjeta1 from "./assets/img/index/card-1.png";
import Tarjeta2 from "./assets/img/index/card-2.png";
import Tarjeta3 from "./assets/img/index/card-3.png";

import Logo_Icon_White from "./assets/img/logos/svg/Logo_Icon-1_White.svg";

export const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid box ms-0">
          <p className="text">Banca en Línea</p>
          <div className="linea" />
          <p className="parrafo">
            Simplificamos la forma de administrar tus cuentas, abre tu cuenta y
            disfruta de muchos beneficios
          </p>

          <div className="slider-button">
            <Link to="/" className="view-more">
              <span className="view-text">Ver Más</span>
              <FaAngleRight />
            </Link>
          </div>
        </div>

        <div className="slider-container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={SliderImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SliderImage4} className="d-block w-100" alt="..." />
              </div>
            </div>

          </div>
        </div>

        <div className="section-tittle">
          <p>Soluciones financieras en un solo lugar</p>
          <hr />
        </div>

        <div className="cards-container">
          <div className="card">
            <img src={Tarjeta1} alt="" />
            <h4>Tarjetas</h4>
            <p>
              Con nuestras tarjetas recibes los mejores beneficios adaptados a
              tus necesidades
            </p>
            <div className="boton">
              <Link to="/" className="LinkHover">
                <span>Conoce Más</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={Tarjeta2} alt="" />
            <h4>Solicitud de prestamos</h4>
            <p>
              Obtén tu préstamo fácil, seguro y rápido, para que puedas cumplir
              tus metas
            </p>
            <div className="boton">
              <Link to="/" className="LinkHover">
                <span>Conoce Más</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={Tarjeta3} alt="" />
            <h4>Cobro de remesas</h4>
            <p>
              Retira tu remesa directamente desde tu cuenta fácil, rápido y
              seguro
            </p>
            <div className="boton">
              <Link to="/" className="LinkHover">
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
              <Link to="/" className="about-button-rg">
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
                Conoce nuestros créditos y elige el mejor para cumplir tus
                metas, con tramites sencillos y rápidos, además de una baja tasa
                de intereses
              </p>
              <Link to="/" className="about-button-rg">
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
              <Link to="/" className="view-more-button">
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
            <Link to="/" className="view-more-button">
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
      </div>

      <Footer />
    </>
  );
};
