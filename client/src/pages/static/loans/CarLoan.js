//scss
import "../assets/scss/loans_styles/CarLoan.scss";

//componets
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

//icon
import { IoCarSportOutline } from "react-icons/io5";

//translate
import { useTranslation } from "react-i18next";

//imgs
const LoanC = require.context("../assets/img/all_loans/autoDemantur", true);

export const CarLoan = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="Car-banner-container">
        <div className="Personal-banner-content">
          <IoCarSportOutline className="Money-icon" />
          <h1>{t("loans_pages.Demantur_car.title")}</h1>
          <p>{t("loans_pages.Demantur_car.subtitle")}</p>
        </div>
      </div>

      <div className="loansP-type-tittle">
        <p>{t("loans_pages.Demantur_car.what's_it")} </p>
        <hr />
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="description_empresarial">
                <p>
                {t("loans_pages.Demantur_car.car_info")}
                </p>
              </div>
              <div className="description_personal">
                <p>
                {t("loans_pages.Demantur_car.car_info2")}
                </p>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <div className="about_personal_image">
                <img
                  src={LoanC("./CarModel.jpg")}
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
        <p>{t("loans_pages.Demantur_car.benefits")}</p>
        <hr />
      </div>

      <div className="car-other-interest-banner">
        <div className="business-otb-content">
          <div className="car-otb-icon">
            <img src={LoanC("./Fast.png")} alt="icon" />
          </div>
          <div className="classic-otb-text">
            <p>{t("loans_pages.Demantur_car.benefits_bannerc")}</p>
            <p>
            {t("loans_pages.Demantur_car.benefits_bannerc2")}
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
};
