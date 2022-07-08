//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DemanturClassic = () => {
  return (
    <>
      <Navbar />
        <div className="classic-card-hero-container">
          <div className="classic-card-hero-content">
            <div className="text-content">
              <p>Classic</p>
              <p>Todo lo que necesitas a tu alcance</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/classicCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            La tarjeta de crédito Demantur Classic te brinda los beneficios necesarios para tu día a día, con ella dispones de un medio de pago seguro para usarlo en comercios, compras en línea, etc. Además, dispones de retiro inmediato de efectivo en cajeros nacionales, encuentra información más detallada a continuación.
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
            Disfruta de los mejores beneficios que te ofrece esta tarjeta
          </p>
          <div className="card-benefits_grid_row">
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/points_icon.png')} alt=""></img>
              <p>Puntos Acumulables</p>
              <p>
                Recibe 500 puntos por tu primera compra, luego acumula 1 punto cada 5 dólares que gastes
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/fee_payment_icon.png')} alt=""></img>
              <p>Pagos en cuotas</p>
              <p>
                Paga en cuotas de hasta 36 meses según tus posibilidades con una tasa de interés fija
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/cash_icon.png')} alt=""></img>
              <p>Retiro de efectivo</p>
              <p>
                Retira efectivo con tu tarjeta cuando lo necesites en todos nuestros cajeros a nivel nacional
              </p>
            </div>
          </div>
        </div>

        {Tabs("ClassicCard")}

        <div className="credit-card-tittle">
          <p>Beneficios Especiales</p>
          <hr />
        </div>
        
        <div className="classic-other-benefits-banner">
          <div className="classic-otb-content">
            <div className="classic-otb-icon">
              <img src={CreditCardsImages('./icons/discount_icon.png')} alt="" />
            </div>
            <div className="classic-otb-text">
              <p>Descuentos en Comercios Seleccionados</p>
              <p>
                Obtén muchas ofertas y promociones en productos al pagar con tu tarjeta de crédito
              </p>
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