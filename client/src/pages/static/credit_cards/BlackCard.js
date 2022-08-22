import { Link } from "react-router-dom";
//scss
import "../assets/scss/credit_cards/individual_cards_pages_main.scss";

//components
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

// Translation
import { useTranslation } from "react-i18next";
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

        <div className="w-[100%] h-[] mx-5 my-7">
          <p className="text-[35px]">{t("CardsPage-Form.tittle")}</p>
          <hr className="blue-underline smallest"></hr>
          <p>{t("CardsPage-Form.desc")}</p>
        </div>
        {
           (localStorage.getItem('authToken')) ?
          <>
            <div className="h-full ml-10 mb-10">
              <Link to="/dashboard" className="">
                <button type='submit' className='h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#323643] text-white' >
                  Solicitar
                </button>
              </Link>
            </div>
          </>
          :
          <>
            <div>
              <div className="h-full ml-10 mb-10">
                <Link to="/auth/normal-user/login" className="">
                  <button type='submit' className='h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#323643] text-white' >
                    Iniciar Sesión
                  </button>
                </Link>
              </div>
            </div>
          </>
        }
        <Footer />
    </>
  )
}
