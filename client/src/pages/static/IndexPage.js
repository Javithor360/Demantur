// Estilos
import "./assets/scss/main.scss";

// Componentes
import { Navbar, Footer } from "../../components/";
import Slide1 from "../../Slide";

// Hooks
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

// Asstes (Iconos e Imagenes)
import { FaAngleRight } from "react-icons/fa";
import Logo_Icon_White from "./assets/img/logos/svg/Logo_Icon-1_White.svg";

const SliderImages = require.context("./assets/img/index/slider", true);
const TarjetasImages = require.context("./assets/img/index", true);

export const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid box ms-0">
          <p className="slidertext">{t("index.slider.title")}</p>
          <div className="linea" />
          <p className="parrafo">{t("index.slider.desc")}</p>

          <div className="slider-button">
            <Link to="/accounts" className="view-more">
              <span className="view-text">{t("index.read_more")}</span>
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
                <img
                  src={SliderImages("./slider-image-1.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SliderImages("./slider-image-2.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SliderImages("./slider-image-3.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={SliderImages("./slider-image-4.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <Slide1 />

        <div className="section-tittle">
          <p>{t("index.financial_solutions")}</p>
          <hr />
        </div>

        <div className="cards-container">
          <div className="card">
            <img src={TarjetasImages("./card-1.png")} alt="" />
            <h4>{t("index.cards_grid.1.title")}</h4>
            <p>{t("index.cards_grid.1.desc")}</p>
            <div className="boton">
              <Link to="/cards" className="LinkHover">
                <span>{t("index.read_more2")}</span>
                <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={TarjetasImages("./card-2.png")} alt="" />
          <h4>{t("index.cards_grid.2.title")}</h4>
          <p>{t("index.cards_grid.2.desc")}</p>
          <div className="boton">
            <Link to="/Loans" className="LinkHover">
              <span>{t("index.read_more2")}</span>
              <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={TarjetasImages("./card-3.png")} alt="" />
          <h4>{t("index.cards_grid.3.title")}</h4>
          <p>{t("index.cards_grid.3.desc")}</p>
          <div className="boton">
            <Link to="/accounts" className="LinkHover">
              <span>{t("index.read_more2")}</span>
              <FaAngleRight className="view-icon fa-solid fa-angle-right ArrowIcon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="dual-banner-container">
        <div className="dual-banner">
          <div className="dual-banner-image-1" />
          <div className="dual-banner-content">
            <p>{t("index.dual_banner.1.title")}</p>
            <hr className="blue-underline" />
            <p>{t("index.dual_banner.1.desc")}</p>
            <Link to="/accounts/savings" className="about-button-rg">
              <span>{t("index.read_more2")}</span>
              <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
            </Link>
          </div>
        </div>

        <div className="dual-banner">
          <div className="dual-banner-content">
            <p>{t("index.dual_banner.2.title")}</p>
            <hr className="blue-underline" />
            <p>{t("index.dual_banner.2.desc")}</p>
            <Link to="/Loans" className="about-button-rg">
              <span>{t("index.read_more2")}</span>
              <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
            </Link>
          </div>
          <div className="dual-banner-image-2" />
        </div>
      </div>

      <div className="section-tittle">
        <p>{t("index.help_center.main_title")}</p>
        <hr />
      </div>

      <div className="help-center-banner">
        <div className="help-center-content">
          <div className="banner-logo">
            <img src={Logo_Icon_White} alt="" />
          </div>
          <div className="banner-tittle">
            <p> {t("index.help_center.title")} </p>
          </div>
          <hr className="white-uderline" />
          <div className="help-banner-information">
            <p>{t("index.help_center.desc")}</p>
          </div>
          <div>
            <Link to="/help" className="view-more-button">
              <span>{t("index.read_more")}</span>
              <FaAngleRight className="fa-solid fa-angle-right view-more-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="section-tittle">
        <p>{t("index.business_info.main_title")}</p>
        <hr />
      </div>

      <div className="buisness-banner">
        <div className="row-content">
          <p>{t("index.business_info.title")}</p>
          <hr className="blue-underline-2" />
          <p>{t("index.business_info.desc")}</p>
          <Link to="/info" className="view-more-button">
            <span>{t("index.read_more")}</span>
            <FaAngleRight className="fa-solid fa-angle-right view-more-icon" />
          </Link>
        </div>
        <div className="row-image" />
      </div>

      <div className="section-tittle">
        <p>{t("index.about_extended.main_title")}</p>
        <hr className="smallest" />
      </div>

      <div className="about-banner">
        <div className="about-banner-content">
          <p>{t("index.about_extended.title")}</p>
          <hr className="blue-underline-3" />
          <p>{t("index.about_extended.desc")}</p>
          <Link to="/" className="about-button-rg">
            <span>{t("index.read_more2")}</span>
            <FaAngleRight className="fa-solid fa-angle-right about-button-rg-icon" />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};
