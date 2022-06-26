import { Navbar, Footer } from "../../components";
import "./assets/scss/HelpAccount.scss"
import { AiFillPieChart as Empre } from "react-icons/ai";
import { Tabs } from "./assets/js/BannerTabCreator.js";
import { BiLock } from "react-icons/bi"
export const InfoEmpre = () => {
  return (
    <>
    <Navbar />
    <div className="baners">
        <div className="baners-content">
        <Empre className="arrow" />
          <h1 className="title">Cuenta Empresarial</h1>
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
      </div><br/><br/>
      <div className="content-icon">
      <p className="list"><BiLock className="ico" /><br/>
        Un lugar seguro para guardar tu dinero
        </p>
      </div>
      <div className="content-icon">
      <p className="list"><BiLock className="ico" /><br/>
      Realizar el pago de nóminas
        </p>
      </div>
      <div className="content-icon">
      <p className="list"><BiLock className="ico" /><br/>
      Posibilidad de contar con chequera
        </p>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       
      {Tabs("InfoEmpre")}
      
    <Footer />
    </>
  )
}
