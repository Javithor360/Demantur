//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//icons
import { MdOutlineEmail, MdOutlinePhone, MdOutlineHome, MdOutlineBadge, MdPersonOutline, MdOutlineTag, MdOutlineHomeWork, MdOutlineEngineering } from "react-icons/md"

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

// Translation
import { useTranslation } from "react-i18next";

//images
const CreditCardsImages = require.context('../assets/img/credit_cards', true)

export const DebitCard = () => {
  const {t}=useTranslation();
  return (
    <>
      <Navbar />
        <div className="debit-card-hero-container">
          <div className="debit-card-hero-content">
            <div className="text-content">
              <p>{t("DebitCard.tittle")}</p>
              <p>{t("DebitCard.sub-tittle")}</p>
            </div>
            <div className="image-content">
              <img src={CreditCardsImages('./bank_cards_images/debitCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
          {t("DebitCard.desc")}
          </p>
        </div>

        <div className="debit-card-benefits-bg">
          <p className="card-benefits_tittle mgb-1">
            {t("DebitCard.benefit.tittle")}
          </p>
          <div className="debit-benefits-container">
            <div className="debit-benefit">
              <div className="debit-benefit-image-1"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>{t("DebitCard.benefit.1.tittle")}</p>
                  <hr />
                  <p>{t("DebitCard.benefit.1.desc")}</p>
                </div>
              </div>
            </div>
            <div className="debit-benefit">
              <div className="debit-benefit-image-2"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>{t("DebitCard.benefit.2.tittle")}</p>
                  <hr />
                  <p>{t("DebitCard.benefit.2.desc")}</p>
                </div>
              </div>
            </div>

            <div className="debit-benefit">
              <div className="debit-benefit-image-3"></div>
              <div className="debit-benefit-content">
                <div>
                  <p>{t("DebitCard.benefit.3.tittle")}</p>
                  <hr />
                  <p>{t("DebitCard.benefit.3.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {Tabs("DebitCard")}

        <div className="credit-card-tittle">
          <p>{t("DebitCard.benefit-banner.tittle")}</p>
          <hr />
        </div>
        
        <div className="debit-other-benefits-banner">
          <div className="debit-otb-content">
            <div className="debit-otb-icon">
              <img src={CreditCardsImages('./icons/points_icon_white.png')} alt="" />
            </div>
            <div className="debit-otb-text">
              <p>{t("DebitCard.benefit-banner.sub-tittle")}</p>
              <p>
              {t("DebitCard.benefit-banner.desc")}
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
                <div className="form-individual-element">
                  <div className="label-icon"><MdOutlineTag /></div>
                  <div className="form-input-container">
                      <input className="form-input-box" type="text" placeholder="Dirección"/>
                      <label className="form-label-box" htmlFor="">
                        {t("CardsPage-Form.account")}
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
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineHomeWork /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
                        <label className="form-label-box" htmlFor="">
                          {t("CardsPage-Form.address2")}
                        </label>
                    </div>
                </div>
                <div className="form-individual-element">
                    <div className="label-icon"><MdOutlineEngineering /></div>
                    <div className="form-input-container">
                        <input className="form-input-box" type="email" placeholder="Correo Electrónico"/>
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