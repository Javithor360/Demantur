//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

// Translation
import { useTranslation } from "react-i18next";
import { use } from "i18next";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const BlackCard = () => {
  const {t}=useTranslation();
  return (
    <>
      <Navbar />
        <div className="black-card-hero-container">
          <div className="black-card-hero-content">
            <div className="text-content">
              <p>Mastercard Black</p>
              <p>{t("BlackCard.sub-tittle")}</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/blackCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            {t("BlackCard.desc")}
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
          {t("BlackCard.benefit.tittle")}
          </p>
          <div className="card-benefits_grid_row">
          <div className="grid_item">
              <img src={CreditCardsImages('./icons/lounge_access_icon.png')} alt=""></img>
              <p>{t("BlackCard.benefit.1.tittle")}</p>
              <p>
                {t("BlackCard.benefit.1.desc")}
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/extra_financing_icon.png')} alt=""></img>
                <p>{t("BlackCard.benefit.2.tittle")}</p>
                <p>
                  {t("BlackCard.benefit.2.desc")}
                </p>
              </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/travel_assist_icon.png')} alt=""></img>
                <p>{t("BlackCard.benefit.3.tittle")}</p>
                <p>
                  {t("BlackCard.benefit.3.desc")}
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
                <p>{t("BlackCard.benefit.4.tittle")}</p>
                <p>
                  {t("BlackCard.benefit.4.desc")}
                </p>
            </div>
            <div className="vl">
                <hr />
            </div>
            <div className="grid_item">
                <img src={CreditCardsImages('./icons/single_point_icon.png')} alt=""></img>
                <p>{t("BlackCard.benefit.5.tittle")}</p>
                <p>
                  {t("BlackCard.benefit.5.desc")} 
                </p>
            </div>
            <div className="vl">
                <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/money_security_icon.png')} alt=""></img>
              <p>{t("BlackCard.benefit.6.tittle")}</p>
              <p>
              {t("BlackCard.benefit.6.desc")} 
              </p>
            </div>
          </div>
        </div>

        {Tabs("BlackCard")}

        <div className="credit-card-tittle">
          <p>{t("BlackCard.benefit-banner.tittle")}</p>
          <hr />
        </div>

        <div className="black-other-benefits-banner">
          <div className="black-otb-content">
            <div className="black-otb-icon">
              <img src={CreditCardsImages('./icons/baggage_icon.png')} alt="" />
            </div>
            <div className="black-otb-text">
              <p>{t("BlackCard.benefit-banner.sub-tittle")}</p>
              <p>{t("BlackCard.benefit-banner.desc")}</p>
            </div>
          </div>
        </div>

        <div className="card-form-container">
          <div className="form-header">
            <p>{t("CardsPage-Form.tittle")}</p>
            <hr className="blue-underline smallest"></hr>
            <p>{t("CardsPage-Form.desc")}</p>
          </div>
          <form className="main-card-form">
            <div className="form-row-1">
              <div className="form-row-content">
                <div className="form-individual-element">
                  <div className="label-icon"><MdPersonOutline /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Nombre completo"/>
                      <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.name")}
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlinePhone /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="number" placeholder="Número de contacto"/>
                      <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.contact")}
                      </label>
                  </div>
                </div>
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlineHome /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Dirección"/>
                      <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.address")}
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
                          {t("CardsPage-Form.dui")}
                        </label>
                      </div>
                </div>
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineEmail /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
                        <label className="form-label-box" htmlFor="">
                          {t("CardsPage-Form.email")}
                        </label>
                    </div>
                </div> 
                <div className="form-flex-row">
                  <div className="card-form-select">
                    <select name="" id="">
                        <option>{t("CardsPage-Form.option")}</option>
                        <option>{t("CardsPage-Form.desc4")} $4,800 y $6,999</option>
                        <option>{t("CardsPage-Form.desc5")} $7,000</option>
                    </select> 
                  </div>
                  <div className="flex-row-input">
                      <input className="form-input-box" type="text" placeholder="Escriba su posición laboral"/>
                      <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.desc6")}
                      </label>
                  </div>
                </div>
              </div>
            </div>    
            <div className="form-row-2">
              <div className="input-files">
                <p>{t("CardsPage-Form.desc1")}</p>
                <label htmlFor="file1">{t("CardsPage-Form.button")}</label>
                <input type="file" name="" id="file1"></input>
              </div>
              <div className="input-files">
                <p>F{t("CardsPage-Form.desc2")}</p>
                <label htmlFor="file2">{t("CardsPage-Form.button")}</label>
                <input type="file" name="" id="file2"></input>
              </div>
              <div className="input-files">
                <p>{t("CardsPage-Form.desc3")}</p>
                <label htmlFor="file3">{t("CardsPage-Form.button")}</label>
                <input type="file" name="" id="file3"></input>
              </div>
            </div>
            <div className="form-row-3">
              <button className="card-submit-button" type="submit">{t("CardsPage-Form.button2")}</button>
            </div>
          </form>
        </div>
        <Footer />
    </>
  )
}
