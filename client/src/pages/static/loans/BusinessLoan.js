//Scss
import "../assets/scss/loans_styles/Business.scss";
//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icons
import { BiBuildings } from "react-icons/bi";
//translate
import { useTranslation } from "react-i18next";
//images
const BusinessI = require.context("../assets/img/all_loans/Business", true);


export const BusinessLoan = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="buss-banner-container">
        <div className="buss-banner-content">
          <BiBuildings className="Build-icon" />
          <h1>{t("loans_pages.business_loan_page.title")}</h1>
          <p>{t("loans_pages.business_loan_page.subtitle")}</p>
        </div>
      </div>

      <div className="loans-type-tittle">
        <p>{t("loans_pages.business_loan_page.what's_it")} </p>
        <hr />
      </div>
      <div className="Bpage-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="description_empresarial">
                <p>
                {t("loans_pages.business_loan_page.business_info")}
                </p>
              </div>
              <div className="description_empresarial">
                <p>
                {t("loans_pages.business_loan_page.business_info2")}
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_businnes_image">
                <img src={BusinessI("./Business_page_img.jpg")} alt="Prestamo empresa page" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

     
      <br></br>

      {Tabs("rqrBusiness")}

      <div className="loans-type-tittle">
        <p>{t("loans_pages.business_loan_page.benefits")}</p>
        <hr />
      </div>

      <div className="business-other-interest-banner">
          <div className="business-otb-content">
            <div className="loan-otb-icon">
              <img src={BusinessI("./Client_.png")} alt="icon" />
            </div>
            <div className="classic-otb-text">
              <p>{t("loans_pages.business_loan_page.benefitsb_banner")}</p>
              <p>
              {t("loans_pages.business_loan_page.benefitsb_banner2")}
              </p>
            </div>
          </div>
        </div>
        <br></br>

      <Footer />
    </>
  );
};
