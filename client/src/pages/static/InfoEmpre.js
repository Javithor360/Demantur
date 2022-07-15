import { Navbar, Footer } from "../../components";
import "./assets/scss/HelpAccount.scss"
import { AiFillPieChart as Empre } from "react-icons/ai";
import { Tabs } from "./assets/js/BannerTabCreator.js";
import { BiLock,BiWallet } from "react-icons/bi"
export const InfoEmpre = () => {
  return (
    <>
    <Navbar />
    <div className="baners">
        <div className="baners-content">
        <Empre className="arrow" />
          <h1 className="title">Cuenta Empresarial</h1>
          <p className="subtitles">Encuentra la mejor solución que se adapte a tus necesidades</p>
        </div>
      </div>
      <div className="title2">
        <p>¿Que es una cuenta empresarial?</p>
        <hr />
      </div>
      <br/>
      <p className="infor">Un contrato entre una empresa y nuestro banco , por medio del cual el titular deposita una cantidad de dinero 
        y el banco adquiere un compromiso para custodiarlo, con este servicio busacamos brindar una manera más rapida y dinamica para la administracion
        de su dinero.</p>
        <br/><br/>
        <div className="title2">
        <p>¿Cuales son los beneficios?</p>
        <hr />
      </div>
      <div className="accT_benefits-containers">
          <div className="accT_benefits-grids">
            <div className="accT_benefits-card-conts">
            <BiLock className="ico" />
              <p className="accT_benefits-titles">
              Un lugar seguro para guardar tu dinero
              </p>
            </div>

            <div className="accT_benefits-card-conts">
            <BiWallet className="ico" />
              <p className="accT_benefits-titles">Realizar el pago de nóminas</p>
            </div>

            <div className="accT_benefits-card-conts">
            <BiWallet className="ico" />
              <p className="accT_benefits-titles  ">
              Posibilidad de contar con chequera
              </p>
            </div>
          </div>
        </div>
      <br/><br/><br/><br/><br/><br/>
       
      {Tabs("InfoEmpre")}
      
    <Footer />
    </>
  )
}
