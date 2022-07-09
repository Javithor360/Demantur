//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const BlackCard = () => {
  return (
    <>
      <Navbar />
        <div className="black-card-hero-container">
          <div className="black-card-hero-content">
            <div className="text-content">
              <p>Mastercard Black</p>
              <p>Disfruta el mundo como solo tú lo mereces</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/blackCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            Cuando hablamos de la tarjeta Mastercard Black estamos concientes que es algo superior, obtén ese prestigio, reconocimiento, exclusividad y obviamente unos maravillosos beneficios que solo esta tarjeta es capaz de darte, vive un mundo lleno de posibilidades y sueños, viajes, extrafinanciameitos, protecciones, asistencias, salas VIP, entre otras muchas cosas con las que disfrutar de la vida al máximo, revisa a continuacion más información.
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
            Disfruta de los mejores beneficios que te ofrece esta tarjeta
          </p>
          <div className="card-benefits_grid_row">
          <div className="grid_item">
              <img src={CreditCardsImages('./icons/lounge_access_icon.png')} alt=""></img>
              <p>Acceso a Salas VIP</p>
              <p>
                Disfruta de acceso a las salas Lounge Key y obten ofertas adaptadas a tus necesidades en restaurantes, spas y tiendas en los aeropuertos
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/extra_financing_icon.png')} alt=""></img>
                <p>Extrafinanciamiento</p>
                <p>
                 Puedes obtener esa línea extra de financiamiento a tu tarjeta de crédito y disponer de efectivo de una forma rapida y sencilla
                </p>
              </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/travel_assist_icon.png')} alt=""></img>
                <p>Asistencia de Viajes</p>
                <p>
                    Proporcionamos ayuda de viaje cuando estés fuera, puedes obtener información acerca del destino, emergencias, identificaciones, etc
                </p>
            </div>
          </div>
          <div className="card-benefits_grid_row__2">
            <div className="hl"><hr /></div>
            <div></div>
            <div className="hl"><hr /></div>
            <div></div>
            <div className="hl"><hr /></div>
          </div>
          <div className="card-benefits_grid_row">
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/guarantee_icon.png')} alt=""></img>
                <p>Garantia Extendida</p>
                <p>
                    Recibe una protección adicional que extenderá el tiempo de garantía hasta un año más adicional a la garantía que ofrece el fabricante.
                </p>
            </div>
            <div className="vl">
                <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/single_point_icon.png')} alt=""></img>
                <p>Gana puntos</p>
                <p>
                    Obtén 80,000 puntos acumulables de bienvenida después de usar tu tarjeta por primera vez sin importar el monto que gastes. 
                </p>
            </div>
            <div className="vl">
                <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/money_security_icon.png')} alt=""></img>
              <p>Seguro de compras</p>
              <p>
                Recibe un reembolso de protección contra daños, robos o accidentes por cada producto que compres con la tarjeta. 
              </p>
            </div>
          </div>
        </div>

        {Tabs("BlackCard")}

        <div className="credit-card-tittle">
          <p>Beneficios Especiales</p>
          <hr />
        </div>

        <div className="black-other-benefits-banner">
          <div className="black-otb-content">
            <div className="black-otb-icon">
              <img src={CreditCardsImages('./icons/baggage_icon.png')} alt="" />
            </div>
            <div className="black-otb-text">
              <p>Protección de equipaje en el aeropuerto</p>
              <p>Este beneficio te reembolsará en dado caso pierdas tu equipaje registrado para viajar</p>
            </div>
          </div>
        </div>

        <div className="card-form-container">
          <div className="form-header">
            <p>¿Ya te has decidido?</p>
            <hr className="blue-underline smallest"></hr>
            <p>Solicita tu tarjeta ahora</p>
          </div>
          <form className="main-card-form">
            <div className="form-row-1">
              <div className="form-row-content">
                <div className="form-individual-element">
                  <div className="label-icon"><MdPersonOutline /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Nombre completo"/>
                      <label className="form-label-box" htmlFor="">
                          Nombre completo
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlinePhone /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="number" placeholder="Número de contacto"/>
                      <label className="form-label-box" htmlFor="">
                          Número de contacto
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlineHome /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Dirección"/>
                      <label className="form-label-box" htmlFor="">
                          Dirección
                      </label>
                  </div>
                </div>
              </div>
              <div className="form-row-content">
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineBadge /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="number" placeholder="Número de DUI"/>
                        <label className="form-label-box" htmlFor="">
                          Número de DUI
                        </label>
                      </div>
                </div>
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineEmail /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
                        <label className="form-label-box" htmlFor="">
                          Correo Electrónico
                        </label>
                    </div>
                </div> 
                <div className="form-flex-row">
                  <div className="card-form-select">
                    <select name="" id="">
                        <option>Rango Salarial</option>
                        <option>Entre $4,800 y $6,999</option>
                        <option>Mayor a $7,000</option>
                    </select> 
                  </div>
                  <div className="flex-row-input">
                      <input className="form-input-box" type="text" placeholder="Escriba su posición laboral"/>
                      <label className="form-label-box" htmlFor="">
                          Escriba su posición laboral
                      </label>
                  </div>
                </div>
              </div>
            </div>    
            <div className="form-row-2">
              <div className="input-files">
                <p>Fotocopia de DUI (revés y derecho)</p>
                <label htmlFor="file1">Seleccionar Archivo</label>
                <input type="file" name="" id="file1"></input>
              </div>
              <div className="input-files">
                <p>Fotocopia de NIT</p>
                <label htmlFor="file2">Seleccionar Archivo</label>
                <input type="file" name="" id="file2"></input>
              </div>
              <div className="input-files">
                <p>Adjunta tu constancia de salario</p>
                <label htmlFor="file3">Seleccionar Archivo</label>
                <input type="file" name="" id="file3"></input>
              </div>
            </div>
            <div className="form-row-3">
              <button className="card-submit-button" type="submit">Solicitar</button>
            </div>
          </form>
        </div>
        <Footer />
    </>
  )
}
