//Scss
import "./assets/scss/LoansPage_main.scss"

//Component
import { Navbar, Footer } from "../../components";

//Icons
import { FaHandshake } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//hooks
import { Link } from "react-router-dom";

//Imagenes
const LoansImage = require.context('./assets/img/all_loans', true)

export const LoansPage =()=>{
    return(
        <>
         <Navbar />
         <div className='loans-banner-container'>
                <div className='loans-banner-content'>
                <FaHandshake className='ccard-icon' />
                    <h1>Prestamos</h1>
                    <p>Encuentra una solución para financiar tus futuros proyectos</p>
                </div>
            </div>


            <div className="loans-type-tittle">
                <p>Tipos de Prestamos</p>
                <hr/>
            </div>

      <div className='page-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 py-3'>
              <div className='subhead'>Prestamos personales</div>
              <h2 className='title-section'>
                ¿Qué son los
                <span className='fg-primary'>préstamos Personales?</span>
              </h2>
              <p>
                Estos préstamos se son aquiridos para financiar tus necesidades
                concretas en un momento determinado.
              </p>

              {/*boton para mas info de las paginas"*/}
              <div className="acc-btn">
              <Link to="/loans/businessLoan">
                <span>Más información</span>
                <FaAngleRight color="#fff" />
              </Link>
            </div>

            </div>
            <div className='col-lg-6 py-3'>
              <div className='about-img'>
              <img src={LoansImage('./personal_loan.jpg')} alt='Prestamo personal' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='page-section2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 py-3'>
              <div className='subhead'>Prestamos para Empresas</div>
              <h2 className='title-section'>
                ¿Qué son los
                <span className='fg-primary'>para Empresas?</span>
              </h2>
              <p>
                Te apoyamos con créditos a mediano y largo plazo para la
                adquisición del equipo que sea de interés para la gestión de
                negocios de tu empresa.
              </p>
              {/*boton para mas info de las paginas"*/}
                <div className="acc-btn">
                 <Link to="/loans/businessLoan">
                 <span>Más información</span>
                <FaAngleRight color="#fff" />
              </Link>
            </div>

            </div>
            <div className='col-lg-6 py-3'>
              <div className='about-img'>
              <img src={LoansImage('./business_loan.jpg')} alt='Prestamo Empresa' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Hero banner contact*/}
      
      <div className="hero">
        <div className="text">
          <h1>¿Tienes algúna duda?</h1>
          <div className="acc-btn">
                 <Link to="/contact">
                 <span>Contactanos</span>
                <FaAngleRight color="#fff" />
              </Link>
            </div>
        </div>
      </div>
      
            <Footer/>
        </>
    );
};