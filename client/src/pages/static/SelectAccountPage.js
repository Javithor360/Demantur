// Estilos
import "./assets/scss/SelectTypeAccount.scss"

// Componentes
import { Navbar, Footer } from "../../components";

// Assets (iconos)
import { BsFillCursorFill as Select } from "react-icons/bs";
import { FaUserTie as Empre } from "react-icons/fa";
import { FaUserAlt as User } from "react-icons/fa";

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
        <p>Bienvenido nuevamente</p>
        <hr />
      </div>
    <p className="info"> <br />
            Bienvenido a la interfaz de Seleccion de Usuario, porfavor selecciona el tipo de Usuario al cual eres poseedor, asegurate de seleccionar la opcion con tu tipo de cuenta e 
            todos tus datos correctamente
        </p>
<div className="boxs-wrap">
  <div className="boxs"><br/>
  <div className="title2">
  <Empre className="icons" /><br/>
    <p className="subtitle">Cuenta Empresarial</p>
    <hr/>
  </div>
  <br/>
  <p className="info2">si tu empresa aún no tiene una cuenta con nosotros, cotratala de manera segura, ágil y digital sin acudir a una oficina o un banco.</p>
    <div className="boton-position">
    <button class="custom-btn btn-15">Iniciar sesion</button>
    <button class="custom-btn btn-15">Registrarce</button>
    </div>
  </div>
  <div className="boxs"><br/>
  <div className="title2">
  <User className="icons" /><br/>
    <p className="subtitle">Cuenta Normal</p>
    <hr/>
  </div>
  <br/>
  <p className="info2">La mejor opcion en cuanto a administracion de tu estado bancario, todo desde la comodidad de tu hogar sin tener que ira un banco</p>
    <div className="boton-position">
    <button class="custom-btn btn-15">Iniciar sesion</button>
    <button class="custom-btn btn-15">Registrarce</button>
    </div>
  </div>
</div>

      <Footer />
    </>
  )
}
