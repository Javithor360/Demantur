//Scss
import "../assets/scss/loans_styles/Business.scss";
//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icons
import { BiBuildings } from "react-icons/bi";
//images
const BusinessI = require.context("../assets/img/all_loans/Business", true);


export const BusinessLoan = () => {
  return (
    <>
      <Navbar />
      <div className="buss-banner-container">
        <div className="buss-banner-content">
          <BiBuildings className="Build-icon" />
          <h1>Creditos Empresariales</h1>
          <p>Dale un nuevo potencial a tu empresa/emprendimiento</p>
        </div>
      </div>

      <div className="loans-type-tittle">
        <p>Crédito Empresarial </p>
        <hr />
      </div>
      <div className="Bpage-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="description_empresarial">
                <p>
                Te apoyamos con créditos a mediano y largo plazo para la
                adquisición del equipo que sea de interés para la gestión de
                negocios de tu empresa.
                </p>
              </div>
              <div className="description_empresarial">
                <p>
                  Para que <b>tu compañía</b> pueda mantenerse competitiva, rentable y
                  crecer de manera sostenida, es fundamental contar con los
                  activos que sean necesarios, desde maquinaria hasta el
                  inmueble en el que se desarrollan las operaciones cotidianas.
                 
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_businnes_image">
                <img src={BusinessI("./Business_page_img.jpg")} alt="Prestamo empresa page" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

     
      <br></br>

      {Tabs("rqrBusiness")}

      <div className="loans-type-tittle">
        <p>Beneficios</p>
        <hr />
      </div>

      <div className="business-other-interest-banner">
          <div className="business-otb-content">
            <div className="loan-otb-icon">
              <img src={BusinessI("./Client_.png")} alt="icon" />
            </div>
            <div className="classic-otb-text">
              <p>Atención y asesoría personalizada</p>
              <p>
                Obtén un acesoramiento para poder administar mejor nuestro financiamiento
              </p>
            </div>
          </div>
        </div>
        <br></br>

      <Footer />
    </>
  );
};
