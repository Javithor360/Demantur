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
const Images = require.context('../assets/img/credit_cards/debito',true)


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
              <div className="debit-benefit-image-1">
                <img src={Images('./benefit_1.jpg')}/>
              </div>
              <div className="debit-benefit-content">
                <div>
                  <p className="debit-benefit-content1">{t("DebitCard.benefit.1.tittle")}</p>
                  <hr />
                  <p>{t("DebitCard.benefit.1.desc")}</p>
                </div>
              </div>
            </div>
            <div className="debit-benefit">
              <div className="debit-benefit-image-2">
                <img src={Images('./benefit_2.jpg')}/>
              </div>
              <div className="debit-benefit-content">
                <div>
                  <p className="debit-benefit-content2">{t("DebitCard.benefit.2.tittle")}</p>
                  <hr />
                  <p>{t("DebitCard.benefit.2.desc")}</p>
                </div>
              </div>
            </div>

            <div className="debit-benefit">
              <div className="debit-benefit-image-3">
                <img src={Images('./benefit_3.jpg')}/>
              </div>
              <div className="debit-benefit-content">
                <div>
                  <p className="debit-benefit-content3">{t("DebitCard.benefit.3.tittle")}</p>
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