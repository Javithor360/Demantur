//Scss
import "./assets/scss/LoansPage_main.scss";

//Component
import { Navbar, Footer } from "../../components";

//Icons
import { FaHandshake } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//hooks
import { Link } from "react-router-dom";

//Imagenes
const LoansImage = require.context("./assets/img/all_loans", true);

export const LoansPage = () => {
  return (
    <>
      <Navbar />
      <div className="loans-banner-container">
        <div className="loans-banner-content">
          <FaHandshake className="hands-icon" />
          <h1>Préstamos</h1>
          <p>Encuentra una solución para financiar tus futuros proyectos</p>
        </div>
      </div>

      <div className="loans-type-tittle">
        <p>Tipos de Préstamos</p>
        <hr />
      </div>

      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="subhead">Préstamos personales</div>
              <h2 className="title-section">
                ¿Qué son los
                <span className="fg-primary"> préstamos Personales?</span>
              </h2>
              <p>
                Disfruta tu nueva vida con las mejores condiciones. Facilitamos
                los trámites para que consolides tus deudas o realices tu
                proyectos con nuestro Crédito Personal.
              </p>

              {/*boton para mas info de las paginas"*/}
              <div className="Btn-info">
                <Link to="/loans/PersonalLoan">
                  <span>Más información</span>
                  <FaAngleRight color="#fff" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about-img">
                <img
                  src={LoansImage("./personal_loan.jpg")}
                  alt="Prestamo personal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="subhead">Préstamos para Empresas</div>
              <h2 className="title-section">
                ¿Qué son los
                <span className="fg-primary"> préstamos para Empresas?</span>
              </h2>
              <p>
                Nuestros préstamos empresariales representa una excelente
                alternativa para potenciar el crecimiento, actividades y lograr
                un mayor crecimiento en el mercado. La posibilidad de adquirir
                nuevos equipos, maquinaria o abrir una nueva sucursal son
                algunas de las opciones que entregamos en este instrumento
                financiero.
              </p>
              {/*boton para mas info de las paginas"*/}
              <div className="Btn-info">
                <Link to="/loans/businessLoan">
                  <span>Más información</span>
                  <FaAngleRight color="#fff" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about-img">
                <img
                  src={LoansImage("./business_loan.jpg")}
                  alt="Prestamo Empresa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Hero banner contact*/}

      <div className="hero">
        <div className="text">
          <h1>¿Tienes alguna duda?</h1>
          <div className="Btn-contac">
            <Link to="/contact">
              <span>Contáctanos</span>
              <FaAngleRight color="#fff" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
