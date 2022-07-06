//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium explicabo amet enim praesentium inventore, eius doloribus cumque ratione ad asperiores vero unde excepturi suscipit. Voluptates id corrupti neque tenetur veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi dolore temporibus facilis facere sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt esse facere doloremque perspiciatis culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="debit-benefit">
              <div className="debit-benefit-image-2"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>Seguridad y control</p>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt esse facere doloremque perspiciatis culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>

            <div className="debit-benefit">
              <div className="debit-benefit-image-3"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>Ahorro y eficiencia</p>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt esse facere doloremque perspiciatis culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia saepe nihil.
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