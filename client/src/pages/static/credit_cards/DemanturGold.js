//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DemanturGold = () => {
  return (
    <>
      <Navbar />
        <div className="gold-card-hero-container">
          <div className="gold-card-hero-content">
            <div className="text-content">
              <p>Gold</p>
              <p>Vive al máximo, no te limites y cumple tus objetivos</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/goldCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            Obtén muchas más posibilidades, beneficios superiores y un mayor nivel de compra y efectivo con la tarjeta Demantur Gold, con ella siempre tendrás ese respaldo de calidad y una mayor seguridad, confianza y ese respaldo que mereces. La Demantur Gold está pensada para aquellas personas como tú, que siempre buscan esa exigencia y buen nivel en una tarjeta de crédito, descubre más beneficios a continuación.
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
            Disfruta de los mejores beneficios que te ofrece esta tarjeta
          </p>
          <div className="card-benefits_grid_row">
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/money_security_icon.png')} alt=""></img>
              <p>Seguro de compras</p>
              <p>
                Recibe un reembolso de protección contra daños, robos o accidentes por cada producto que compres con la tarjeta. 
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/single_point_icon.png')} alt=""></img>
              <p>Gana puntos</p>
              <p>
                Obtén 10,000 puntos acumulables de bienvenida después de usar tu tarjeta por primera vez sin importar el monto que gastes. 
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/airplane_black_icon.png')} alt=""></img>
              <p>Canjea por viajes</p>
              <p>
                Puedes canjear tus puntos acumulados por boletos aéreos a destinos seleccionados y disfruta de explorar el mundo.
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
            <div className="grid_item mgt_1">
                <img src={CreditCardsImages('./icons/guarantee_icon.png')} alt=""></img>
                <p>Garantia Extendida</p>
                <p>
                  Recibe una protección adicional que extenderá el tiempo de garantía hasta un año más adicional a la garantía que ofrece el fabricante.
                </p>
              </div>
              <div className="vl">
                <hr />
              </div>
              <div className="grid_item mgt_1">
                <img src={CreditCardsImages('./icons/fee_payment_icon.png')} alt=""></img>
                <p>Tasas de interés bajas</p>
                <p>
                 Tus cuotas tendrán un tasa de interés del 8%, e incluso puede bajar según tu historial crediticio o el plazo
                </p>
              </div>
              <div className="vl">
                <hr />
              </div>
              <div className="grid_item mgt_1">
                <img src={CreditCardsImages('./icons/max_money_icon.png')} alt=""></img>
                <p>Cobertura máxima</p>
                <p>
                  Dispondrás de una cobertura de efectivo hasta de $50,000 en retiro inmediato para que lo puedas usar.
                </p>
              </div>
          </div>
        </div>
        {Tabs("GoldCard")}

        <div className="credit-card-tittle">
          <p>Beneficios Especiales</p>
          <hr />
        </div>

        <div className="gold-other-benefits-banner">
          <div className="gold-otb-content">
            <div className="gold-otb-icon">
              <img src={CreditCardsImages('./icons/emergency_cash_icon.png')} alt="" />
            </div>
            <div className="gold-otb-text">
              <p>Desembolso de efectivo de emergencia</p>
              <p>Este beneficio te ayudará a obtener efectivo en caso de que tu tarjeta se pierda o la roben</p>
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
                        <option>Entre $450 y $499</option>
                        <option>Entre $500 y $999</option>
                        <option>Entre $1,000 y $1,999</option>
                        <option>Entre $2,000 y $3,999</option>
                        <option>Entre $4,000 y $5,999</option>
                        <option>Mayor a $6,000</option>
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
