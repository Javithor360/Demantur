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