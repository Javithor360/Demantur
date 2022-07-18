//scss
import "../assets/scss/loans_styles/HouseLoan.scss";

//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icon
import { GiHouse } from "react-icons/gi";

//imgs
const LoanH = require.context("../assets/img/all_loans/House", true);

export const HouseLoan = () => {
  return (
    <>
      <Navbar />
      <div className="House-banner-container">
        <div className="House-banner-content">
          <GiHouse className="Home-icon" />
          <h1>Crédito de Vivienda</h1>
          <p>Te ofrecemos un crédito hecho a tu medida para tu nuevo hogar</p>
        </div>
      </div>

      <div className="loansH-type-tittle">
        <p>Vivienda Demantur </p>
        <hr />
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="House_description">
                <p>
                  Este tipó de préstamo se hace a largo plazo y que estará
                  respaldado por el inmueble que se compra. Este préstamos
                  pueden estar financiados a un plazo determinado y a una tasa
                  de interés que dependerá y la cantidad que solicites para
                  obtener lo que necesitas.
                </p>
              </div>
              <div className="House_description">
                <p>
                  Es importante que tengas claro que el hecho de que sea el
                  inmueble la garantía del préstamo, eso no quiere decir nos 
                  quedaremos con tu casa o que no vas a poder usarla hasta que termines de
                  pagar la deuda.
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_personal_image">
                <img
                  src={LoanH("./House_key.jpg")}
                  alt="Home loan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {Tabs("rqrHouse")}

      <div className="loans-type-tittle">
        <p>Beneficios</p>
        <hr />
      </div>

      <div className="House-other-interest-banner">
        <div className="House-otb-content">
          <div className="loan-otb-icon">
            <img src={LoanH("./BenefitsIcon.png")} alt="icon" />
          </div>
          <div className="classic-otb-text">
            <p>Hasta 90% de financiamiento</p>
            <p>
            Te financiamos hasta un valor del 90% del valúo.
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
};
