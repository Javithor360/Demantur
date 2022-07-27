// Estilos
import "./assets/scss/SelectTypeAccount.scss";

// Componentes
import { Navbar, Footer } from "../../components";

// Assets (iconos)
import { BsFillCursorFill as Select } from "react-icons/bs";
import { FaUserTie as Empre } from "react-icons/fa";
import { FaUserAlt as User } from "react-icons/fa";
import { FaCheck as Check } from "react-icons/fa";
import { FaRedo as Reset } from "react-icons/fa"
const TarjetasImages = require.context("./assets/img/index", true);
/* import { Link } from "react-router-dom";
const CuentasImagenes = require.context('./assets/img/banner', true); */

export const SelectAccountPage = () => {
  return (
    <>
      <Navbar />
      <div className="baner">
        <div className="baner-content">
          <Select className="arrow" />
          <h1 className="title">Seleccion de Usuario</h1>
        </div>
      </div>
      <div className="title2">
        <p>¿como iniciar sesion?</p>
        <hr />
      </div>
      <p className="info"></p>
      <div className="title2">
        <p>Bienvenido nuevamente</p>
        <hr />
      </div>
      <p className="info">
        <br />
        Bienvenido a la interfaz de Seleccion de Usuario, porfavor selecciona el
        tipo de Usuario al cual eres poseedor, asegurate de seleccionar la
        opcion con tu tipo de cuenta e todos tus datos correctamente
      </p>
      <div className="cards-container">
          <div className="card">
            <div className="title2">  
            <User className="iconst" />
            <p className="subtitle">Cuenta Normal</p>
            <hr />
          </div>
            <p>si tu empresa aún no tiene una cuenta con nosotros, cotratala de
            manera segura, ágil y digital sin acudir a una oficina o un banco.
          </p>
            <div className="boton-position">
            <button class="custom-btn btn-15">Iniciar sesion</button>
            <button class="custom-btn btn-15">Registrarse</button>
          </div>
            <div className="boton">
             
            </div>
          </div>
          <div className="card">
            <div className="title2">
            <Empre className="iconst" />
            <p className="subtitle">Cuenta Empresarial</p>
            <hr />
          </div>
            <p>La mejor opcion en cuanto a administracion de tu estado bancario,
            todo desde la comodidad de tu hogar sin tener que ira un banco</p>
            <div className="boton-position">
            <button class="custom-btn btn-15">Iniciar sesion</button>
            <button class="custom-btn btn-15">Registrarse</button>
          </div>
            <div className="boton">
              
            </div>
          </div>
        </div>
        <div className="title2">
        <p>Otras opciones</p>
        <hr />
      </div>
      <p className="info">
        <br />
        tenemos otras opciones en caso de que ya poseas una cuenta, tenemos las siguientes herramientas que te podrian servir
      </p>
      <br/><br/><br/>
      <div className="cards-container">
          <div className="card">
            <div className="title2">  
            <Reset className="iconst" />
            <p className="subtitle">Cambio de contraseña</p>
            <hr />
          </div>
            <p>si tu empresa aún no tiene una cuenta con nosotros, cotratala de
            manera segura, ágil y digital sin acudir a una oficina o un banco.
          </p>
            <div className="boton-position">
            <button class="custom-btn btn-15">Ir </button>
          </div>
          </div>
          <div className="card">
            <div className="title2">
            <Check className="iconst" />
            <p className="subtitle">Verficacion de email</p>
            <hr />
          </div>
            <p>La mejor opcion en cuanto a administracion de tu estado bancario,
            todo desde la comodidad de tu hogar sin tener que ira un banco</p>
            <div className="boton-position"> 
            <button class="custom-btn btn-15">Ir </button>
          </div>
          </div>
        </div>
        
        
        

      <Footer />
    </>
  );
};
