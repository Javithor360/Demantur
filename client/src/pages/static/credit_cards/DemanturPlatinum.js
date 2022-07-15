//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"
//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DemanturPlatinum = () => {
  return (
    <>
      <Navbar />
        <div className="platinum-card-hero-container">
          <div className="platinum-card-hero-content">
            <div className="text-content">
              <p>Platinum</p>
              <p>Llega lejos, donde apuntan tus sueños</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/platinumCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            ¿Estás en busca de una tarjeta que te permita disfrutar de grandes beneficios en cualquier lugar y en todo momento?, pues si es así, La tarjeta Demantur Platinum es para ti, obtén numerosos beneficios que se adaptan a tus necesidades con una gran flexibilidad. Puedes viajar, comprar lo que quieras y tener la seguridad que necesitas por cada una de tus compras, revisa muchos más beneficios a continuación. 
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
                Recibe 5,000 puntos de bienvenida después de usar por primera vez tu tarjeta sin importar el monto. 
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/single_point_icon.png')} alt=""></img>
              <p>Gana puntos</p>
              <p>
                Acumula puntos por cada dolár que gastes, 1 dolár equivale a 1 punto más acumulado.
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/cash_bag_icon.png')} alt=""></img>
              <p>Canjea por efectivo</p>
              <p>
                Puedes canjear por efectivo tus puntos en cualquier momento.
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
                <img src={CreditCardsImages('./icons/fee_payment_icon.png')} alt=""></img>
                <p>Pagos en cuotas</p>
                <p>
                  Obtén cuotas de hasta 48 meses sin intereses, puedes elegir el plazo que más te convenga.
                </p>
              </div>
              <div className="vl">
                <hr />
              </div>
              <div className="grid_item mgt_1">
                <img src={CreditCardsImages('./icons/money_security_icon.png')} alt=""></img>
                <p>Seguro de compras</p>
                <p>
                  Obtén un reembolso en caso de que el artículo esté dañado, ya sea para cambiarlo o repararlo. 
                </p>
              </div>
              <div className="vl">
                <hr />
              </div>
              <div className="grid_item mgt_1">
                <img src={CreditCardsImages('./icons/shop_bag_icon.png')} alt=""></img>
                <p>Precios Especiales</p>
                <p>
                  Disfruta de precios especiales en productos de tiendas seleccionadas al pagar con tu tarjeta. 
                </p>
              </div>
          </div>
        </div>

        {Tabs("PlatinumCard")}

        <div className="credit-card-tittle">
          <p>Beneficios Especiales</p>
          <hr />
        </div>

        <div className="platinum-other-benefits-banner">
          <div className="platinum-otb-content">
            <div className="platinum-otb-icon">
              <img src={CreditCardsImages('./icons/airplane_icon.png')} alt="" />
            </div>
            <div className="platinum-otb-text">
              <p>Utiliza tus puntos para viajar</p>
              <p>Puedes canjear tus puntos acumulados por boletos aéreos a destinos seleccionados</p>
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
