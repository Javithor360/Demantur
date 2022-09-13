import "../assets/scss/accounts/acc_types.scss";
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

import { FaMoneyCheckAlt, FaFileInvoice, FaCreditCard } from "react-icons/fa";

// Translation
import { useTranslation } from "react-i18next";

export const CheckingAccount = () => {
  const {t}= useTranslation();
  return (
    <>
      <Navbar />

      <section className="accT_hero checking_hero">
        <div className="accT_hero-cont">
          <h1>{t("CheckingPage.tittle")}</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="accT_post-hero-container">
        <div className="accT_benefits-container">
          <p className="accT_main-title">{t("CheckingPage.subtittle")}</p>
          <hr />

          <div className="accT_benefits-grid">
            <div className="accT_benefits-card-cont accT-1">
              <FaMoneyCheckAlt className="accT_benefits-icon" />
              <p className="accT_benefits-title">
              {t("CheckingPage.benefit.1")}
              </p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont accT-2">
              <FaFileInvoice className="accT_benefits-icon" />
              <p className="accT_benefits-title">{t("CheckingPage.benefit.2")}</p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont accT-3">
              <FaCreditCard className="accT_benefits-icon" />
              <p className="accT_benefits-title">
              {t("CheckingPage.benefit.3")}
              </p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>
          </div>
        </div>

        <div className="accT_conditions-container">
          <p className="accT_main-title">{t("CheckingPage.requirements.tittle")}</p>
          <hr className="marg" />

          {Tabs("CheckingAccount")}
        </div>
        <div className="space-responsive">
          <br/><br/><br/>
        </div>
      </section>
      <Footer />
    </>
  );
};
