import "../assets/scss/accounts/acc_types.scss";
import { Navbar, Footer } from "../../../components";
import { Tabs } from "../assets/js/BannerTabCreator.js";

import { BsCreditCard2Back, BsArrowUpRightCircleFill } from "react-icons/bs";

import { FaClock } from 'react-icons/fa';

export const SavingsAccount = () => {
  return (
    <>
      <Navbar />

      <section className="accT_hero savings_hero">
        <div className="accT_hero-cont">
          <h1>Cuenta de Ahorros</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <section className="accT_post-hero-container">
        <div className="accT_benefits-container">
          <p className="accT_main-title">Disfruta de diversos beneficios</p>
          <hr />

          <div className="accT_benefits-grid">
            <div className="accT_benefits-card-cont">
              <FaClock className="accT_benefits-icon" />
              <p className="accT_benefits-title">
                Disponibilidad inmediata
              </p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont">
              <BsCreditCard2Back className="accT_benefits-icon" />
              <p className="accT_benefits-title">Tarjeta de débito Demantur</p>
              <p className="accT_benefits-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                imperdiet.
              </p>
            </div>

            <div className="accT_benefits-card-cont">
              <BsArrowUpRightCircleFill className="accT_benefits-icon" />
              <p className="accT_benefits-title">
                Controla tus movimientos 24/7
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

          {Tabs("SavingsAccount")}
        </div>
      </section>
      <Footer />
    </>
  );
};
