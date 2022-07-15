//scss
import "../assets/scss/loans_styles/PersonalLoan.scss";

//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icon
import { TbReportMoney } from "react-icons/tb";

//imgs
const LoanP = require.context("../assets/img/all_loans/Personal", true);

export const PersonalLoan = () => {
  return (
    <>
      <Navbar />
      <div className="Personal-banner-container">
        <div className="Personal-banner-content">
          <TbReportMoney className="Money-icon" />
          <h1>Creditos Personales</h1>
          <p>Para alcanzar tus metas, realizar tus proyectos o para lo que necesites.</p>
        </div>
      </div>

      <div className="loansP-type-tittle">
        <p>Prestamo Personal </p>
        <hr />
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="description_empresarial">
                <p>
                  Un crédito personal es la operación en la que una entidad
                  financiera entrega una cantidad monetaria específicamente a un
                  cliente, quien deberá devolver los prestado en un tiempo
                  pactado más los intereses generados.
                </p>
              </div>
              <div className="description_personal">
                <p>
                  Este tipo de crédito se diferencia de otros porque se entrega
                  sin avales o garantías adicionales, como suele suceder, por
                  ejemplo, con el crédito hipotecario, donde además de la
                  responsabilidad personal del cliente es necesario acreditar
                  una garantía (la vivienda).
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_personal_image">
                <img
                  src={LoanP("./Warranty.jpg")}
                  alt="Prestamo empresa page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {Tabs("rqrpersonal")}

      <div className="loans-type-tittle">
        <p>Beneficios</p>
        <hr />
      </div>

      <div className="business-other-interest-banner">
        <div className="business-otb-content">
          <div className="loan-otb-icon">
            <img src={LoanP("./Calendar_icon.jpg")} alt="icon" />
          </div>
          <div className="classic-otb-text">
            <p>Hasta 120 Meses Plazo</p>
            <p>
            Disfruta de plazos que se ajustan a tus necesidades. Restricciones aplican.
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
};
