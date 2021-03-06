import "../assets/scss/accounts/acc_types.scss";
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

import { FaMoneyCheckAlt, FaFileInvoice, FaCreditCard } from "react-icons/fa";

export const CheckingAccount = () => {
  return (
    <>
      <Navbar />

      <section className="accT_hero checking_hero">
        <div className="accT_hero-cont">
          <h1>Cuenta Corriente</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="accT_post-hero-container">
        <div className="accT_benefits-container">
          <p className="accT_main-title">Disfruta de diversos beneficios</p>
          <hr />

          <div className="accT_benefits-grid">
            <div className="accT_benefits-card-cont">
              <FaMoneyCheckAlt className="accT_benefits-icon" />
              <p className="accT_benefits-title">
                Solicita tu chequera en Línea
              </p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont">
              <FaFileInvoice className="accT_benefits-icon" />
              <p className="accT_benefits-title">Estado de cuenta digital</p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont">
              <FaCreditCard className="accT_benefits-icon" />
              <p className="accT_benefits-title">
                Tarjeta de Débito internacional
              </p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>
          </div>
        </div>

        <div className="accT_conditions-container">
          <p className="accT_main-title">Requisitos y condiciones</p>
          <hr className="marg" />

          {Tabs("CheckingAccount")}
        </div>
      </section>
      <Footer />
    </>
  );
};
