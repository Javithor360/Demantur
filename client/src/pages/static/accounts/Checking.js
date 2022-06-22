import "../assets/scss/accounts/acc_checking.scss";
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

import { FaMoneyCheckAlt, FaFileInvoice, FaCreditCard } from "react-icons/fa";
export const CheckingAccount = () => {
  return (
    <>
      <Navbar />

      <section className="check_hero">
        <div className="check_hero-cont">
          <h1>Cuenta Corriente</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="check_post-hero-container">
        <div className="check_benefits-container">
          <p className="check_main-title">Disfruta de diversos beneficios</p>
          <hr />

          <div className="check_benefits-grid">
            <div className="check_benefits-card-cont">
              <FaMoneyCheckAlt className="check_benefits-icon" />
              <p className="check_benefits-title">
                Solicita tu chequera en Línea
              </p>
              <p className="check_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="check_benefits-card-cont">
              <FaFileInvoice className="check_benefits-icon" />
              <p className="check_benefits-title">Estado de cuenta digital</p>
              <p className="check_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="check_benefits-card-cont">
              <FaCreditCard className="check_benefits-icon" />
              <p className="check_benefits-title">
                Tarjeta de Débito internacional
              </p>
              <p className="check_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>
          </div>
        </div>

        <div className="check_conditions-container">
          <p className="check_main-title">Requisitos y condiciones</p>
          <hr className="marg" />

          {Tabs("CheckingAccount")}
        </div>

        
      </section>
      <Footer />
    </>
  );
};
