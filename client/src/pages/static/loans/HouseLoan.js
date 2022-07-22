//scss
import "../assets/scss/loans_styles/HouseLoan.scss";

//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icon
import { GiHouse } from "react-icons/gi";

//translate
import { useTranslation } from "react-i18next";

//imgs
const LoanH = require.context("../assets/img/all_loans/House", true);

export const HouseLoan = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="House-banner-container">
        <div className="House-banner-content">
          <GiHouse className="Home-icon" />
          <h1>{t("loans_pages.housing_page.title")}</h1>
          <p>{t("loans_pages.housing_page.subtitle")}</p>
        </div>
      </div>

      <div className="loansH-type-tittle">
        <p>{t("loans_pages.housing_page.what's_it")}</p>
        <hr />
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="House_description">
                <p>
                {t("loans_pages.housing_page.housing_info")}
                </p>
              </div>
              <div className="House_description">
                <p>
                {t("loans_pages.housing_page.housing_info2")}
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_personal_image">
                <img
                  src={LoanH("./House_key.jpg")}
                  alt="Home loan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {Tabs("rqrHouse")}

      <div className="loans-type-tittle">
        <p>{t("loans_pages.housing_page.benefits")}</p>
        <hr />
      </div>

      <div className="House-other-interest-banner">
        <div className="House-otb-content">
          <div className="loan-otb-icon">
            <img src={LoanH("./BenefitsIcon.png")} alt="icon" />
          </div>
          <div className="classic-otb-text">
            <p>{t("loans_pages.housing_page.benefits_bannerh")}</p>
            <p>
            {t("loans_pages.housing_page.benefits_bannerh2")}
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
};
