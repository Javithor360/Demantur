//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

// Translation
import { useTranslation } from "react-i18next";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DemanturClassic = () => {
  const {t}= useTranslation();
  return (
    <>
      <Navbar />
        <div className="classic-card-hero-container">
          <div className="classic-card-hero-content">
            <div className="text-content">
              <p>Classic</p>
              <p>{t("ClassicPage.sub-tittle")}</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/classicCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            {t("ClassicPage.desc")}
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">
            {t("ClassicPage.benefit.tittle")}
          </p>
          <div className="card-benefits_grid_row">
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/points_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.1.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.1.desc")}
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/fee_payment_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.2.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.2.desc")}
              </p>
            </div>
            <div className="vl">
              <hr />
            </div>
            <div className="grid_item">
              <img src={CreditCardsImages('./icons/cash_icon.png')} alt=""></img>
              <p>{t("ClassicPage.benefit.3.tittle")}</p>
              <p>
              {t("ClassicPage.benefit.3.desc")}
              </p>
            </div>
          </div>
        </div>

        {Tabs("ClassicCard")}

        <div className="credit-card-tittle">
          <p>{t("ClassicPage.benefit-banner.tittle")}</p>
          <hr />
        </div>
        
        <div className="classic-other-benefits-banner">
          <div className="classic-otb-content">
            <div className="classic-otb-icon">
              <img src={CreditCardsImages('./icons/discount_icon.png')} alt="" />
            </div>
            <div className="classic-otb-text">
              <p>{t("ClassicPage.benefit-banner.sub-tittle")}</p>
              <p>
                {t("ClassicPage.benefit-banner.desc")}
              </p>
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
                        <option>{t("CardsPage-Form.desc4")} $450 y $499</option>
                        <option>{t("CardsPage-Form.desc4")} $500 y $999</option>
                        <option>{t("CardsPage-Form.desc4")} $1,000 y $1,999</option>
                        <option>{t("CardsPage-Form.desc4")} $2,000 y $3,999</option>
                        <option>{t("CardsPage-Form.desc4")} $4,000 y $5,999</option>
                        <option>{t("CardsPage-Form.desc4")} $6,000</option>
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
                <p>{t("CardsPage-Form.desc2")}</p>
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