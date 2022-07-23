//scss
import "../assets/scss/loans_styles/PersonalLoan.scss";

//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icon
import { TbReportMoney } from "react-icons/tb";

//translate
import { useTranslation } from "react-i18next";

//imgs
const LoanP = require.context("../assets/img/all_loans/Personal", true);

export const PersonalLoan = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="Personal-banner-container">
        <div className="Personal-banner-content">
          <TbReportMoney className="Money-icon" />
          <h1>{t("loans_pages.personal_loan_page.title")}</h1>
          <p>{t("loans_pages.personal_loan_page.subtitle")}</p>
        </div>
      </div>

      <div className="loansP-type-tittle">
        <p>{t("loans_pages.personal_loan_page.what's_it")} </p>
        <hr />
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="description_empresarial">
                <p>
                {t("loans_pages.personal_loan_page.personal_info")}
                </p>
              </div>
              <div className="description_personal">
                <p>
                {t("loans_pages.personal_loan_page.personal_info2")}
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_personal_image">
                <img
                  src={LoanP("./Warranty.jpg")}
                  alt="Prestamo empresa page"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {Tabs("rqrpersonal")}

      <div className="loans-type-tittle">
        <p>{t("loans_pages.personal_loan_page.Benefits")}</p>
        <hr />
      </div>

      <div className="business-other-interest-banner">
        <div className="business-otb-content">
          <div className="loan-otb-icon">
            <img src={LoanP("./Calendar_icon.jpg")} alt="icon" />
          </div>
          <div className="classic-otb-text">
            <p>{t("loans_pages.personal_loan_page.benefits_banner")}</p>
            <p>
            {t("loans_pages.personal_loan_page.benefits_banner2")}
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
};
