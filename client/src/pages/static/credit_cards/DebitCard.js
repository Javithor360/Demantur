//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline, MdOutlineTag, MdOutlineHomeWork, MdOutlineEngineering } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DebitCard = () => {
  return (
    <>
      <Navbar />
        <div className="debit-card-hero-container">
          <div className="debit-card-hero-content">
            <div className="text-content">
              <p>Débito Clásica</p>
              <p>Mantén el control de tu dinero y ahorra</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/debitCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            Con la tarjeta de Débito Clásica de Demantur obtienes el control de gastos que necesitas, podrás pagar en los diferentes servicios y comercios sin necesidad de cargar efectivo, pero además, también podrás acceder por medio de los cajeros automáticos al efectivo si es que lo necesitas. Por otro lado, no dudes en tener siempre los beneficios especiales que te ofrece Demantur, te invitamos a seguir viendo los demás detalles a continuación.
          </p>
        </div>

        <div className="debit-card-benefits-bg">
          <p className="card-benefits_tittle mgb-1">
            Disfruta de los mejores beneficios que te ofrece esta tarjeta
          </p>
          <div className="debit-benefits-container">
            <div className="debit-benefit">
              <div className="debit-benefit-image-1"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>Paga fácil y rapido</p>
                  <hr />
                  <p>La tarjeta Débito Clásica te brinda esa facilidad de pagar siempre aunque no lleves efectivo contigo, es más práctico si prefieres cargar siempre la tarjeta en vez de grandes cantidades de efectivo</p>
                </div>
              </div>
            </div>
            <div className="debit-benefit">
              <div className="debit-benefit-image-2"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>Seguridad y control</p>
                  <hr />
                  <p>Al no cargar efectivo tienes la seguridad de no perderlo, y si en caso extravíes la tarjeta, puedes cancelarla y evitar la pérdida de los fondos que tienes almacenados en ella</p>
                </div>
              </div>
            </div>

            <div className="debit-benefit">
              <div className="debit-benefit-image-3"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>Ahorro y eficiencia</p>
                  <hr />
                  <p>Al hacer uso de tus propios fondos no debes pagar intereses ni cuotas mes a mes y en ningún momento acumulas deuda con ella, ahorras más y mantén la eficiencia de tu dinero en todo momento cuando la uses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {Tabs("DebitCard")}

        <div className="credit-card-tittle">
          <p>Beneficios Especiales</p>
          <hr />
        </div>
        
        <div className="debit-other-benefits-banner">
          <div className="debit-otb-content">
            <div className="debit-otb-icon">
              <img src={CreditCardsImages('./icons/points_icon_white.png')} alt="" />
            </div>
            <div className="debit-otb-text">
              <p>Obtén puntos por cada una de tus compras</p>
              <p>
                Obtén 1 punto por cada $2.00 que gastes con tu tarjeta de débito
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
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlineTag /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Dirección"/>
                      <label className="form-label-box" htmlFor="">
                        Número de cuenta a la que vinculará la tarjeta
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
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineHomeWork /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
                        <label className="form-label-box" htmlFor="">
                          Dirección de entrega de la tarjeta
                        </label>
                    </div>
                </div>
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineEngineering /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
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
                <p>Constancia de lugar de residencia</p>
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