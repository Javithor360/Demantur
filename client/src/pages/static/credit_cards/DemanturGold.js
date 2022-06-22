//scss
import "../assets/scss/credit_cards/demantur_gold_main.scss";
//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"
//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//images
const GoldCardImages = require.context('../assets/img/credit_cards/gold', true);

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
              <img src={GoldCardImages('./goldCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor sem at sem tincidunt, sed maximus velit dignissim. Maecenas venenatis laoreet orci, ut cursus purus consectetur et. Proin non mauris pharetra, condimentum dui et, finibus turpis. Phasellus vel justo ante. Integer id risus porta, feugiat lorem eu, posuere dui.
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">Disfruta de los mejores beneficios que te ofrece esta tarjeta</p>

          <div className="card-benefits_grid_row">

            <div className="grid_item vl">
              <img src={GoldCardImages('./money_security_icon.png')} alt=""></img>
              <p>Seguro de compras</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat eros     mauris, a imperdiet sapien tristique.
              </p>
              <hr />
            </div>
            
            <div className="grid_item vl">
              <img src={GoldCardImages('./single_point_icon.png')} alt=""></img>
              <p>Gana puntos</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat eros mauris, a imperdiet sapien tristique.
              </p>

              <hr />
            </div>

            <div className="grid_item">
              <img src={GoldCardImages('./airplane_black_icon.png')} alt=""></img>
              <p>Canjea por viajes</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat eros mauris, a imperdiet sapien tristique.
              </p>
            </div>
          </div>
          <div className="card-benefits_grid_row">
            <div className="hl"><hr /></div>
            <div className="hl"><hr /></div>
            <div className="hl"><hr /></div>
          </div>
          <div className="card-benefits_grid_row">
            <div className="grid_item vl mgt_1">
                
                <img src={GoldCardImages('./guarantee_icon.png')} alt=""></img>
                <p>Garantia Extendida</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu erat felis. Suspendisse viverra sapien velit.
                </p>
                <hr />
              </div>
              
              <div className="grid_item vl mgt_1">
                <img src={GoldCardImages('./fee_payment_icon.png')} alt=""></img>
                <p>Cuotas Adaptables</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non erat quis quam gravida eleifend. Curabitur.
                </p>

                <hr />
              </div>

              <div className="grid_item mgt_1">
                <img src={GoldCardImages('./max_money_icon.png')} alt=""></img>
                <p>Cobertura máxima</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non erat quis quam gravida eleifend. Curabitur.
                </p>
              </div>
          </div>
        </div>
        {Tabs("ClassicCard")}

        <div className="credit-card-tittle">
            <p>Beneficios Especiales</p>
            <hr />
        </div>

        <div className="gold-other-benefits-banner">
          <div className="gold-otb-content">
            <div className="gold-otb-icon">
              <img src={GoldCardImages('./emergency_cash_icon.png')} alt="" />
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

          <form className="classic-card-form">
            <div className="form-column-1">
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

            <div className="form-column-2">
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
          </form>
        </div>
        <Footer />
    </>
  )
}
