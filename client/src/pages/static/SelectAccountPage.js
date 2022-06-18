// Estilos
import "./assets/scss/SelectTypeAccount.scss"

// Componentes
import { Navbar, Footer } from "../../components";

// Assets (iconos)
import { BsFillCursorFill as Select } from "react-icons/bs";
import { Link } from "react-router-dom";
const CuentasImagenes = require.context('./assets/img/banner', true);

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
        <div className="content-cards">
  <div className="radio-btns" role="radiogroup">
    <Link to="" className="links">
    <div className="radio-btns__btn" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image one">
    <img className="img-card" src={CuentasImagenes('./usuario.jpg')} alt='' /><br/>
    <h3 className="subtitle">Cuenta cliente</h3>
    <p className="info2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, debitis. Dolore voluptatibus facilis ullam voluptas rerum, velit optio, in assumenda, perferendis itaque commodi labore libero magnam modi distinctio impedit consectetur?</p>
    </div>
    </Link>
    <Link to="" className="links">
    <div className="radio-btns__btn" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image two">
    <img className="img-card" src={CuentasImagenes('./empresario.jpg')} alt='' /><br/>
    <h3 className="subtitle">Cuenta Empresario</h3>
    <p className="info2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, debitis. Dolore voluptatibus facilis ullam voluptas rerum, velit optio, in assumenda, perferendis itaque commodi labore libero magnam modi distinctio impedit consectetur?</p>
    </div>
    </Link>
  </div>
</div>

      <Footer />
    </>
  )
}
