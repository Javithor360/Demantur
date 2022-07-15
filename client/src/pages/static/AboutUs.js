import "./assets/scss/about.scss";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { FaMoneyCheckAlt, FaFileInvoice, FaCreditCard } from "react-icons/fa";

const AboutImg = require.context("./assets/img/", true);

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-hero">
        <div className="about-hero-cont">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur at
            leo ac ante tincidunt ultrices. Mauris nec lectus urna.
          </p>
        </div>
      </section>

      <section className="about-history-container">
        <div className="about-history-text">
          <h2>Nuestra historia</h2>
          <hr />
          <p className="about-history-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at leo ac ante tincidunt ultrices. Mauris nec lectus urna. Curabitur
            bibendum et lacus at pellentesque. Mauris posuere nibh ligula, sed
            consectetur diam vulputate eu. Integer eu nunc sit amet lacus tempus
            pulvinar. Sed euismod ac dolor at gravida. Duis posuere varius
            justo, vitae finibus massa imperdiet vitae. Duis id turpis feugiat,
            rhoncus tortor vitae, accumsan eros. Morbi ut justo nec mi tempus
            fringilla. Nunc purus nisl, sodales vitae est a, lacinia semper sem.
            Integer finibus sapien ipsum, ut sagittis massa varius eget. Quisque
            sapien odio, consequat ac velit in, posuere viverra tellus. Nulla
            ornare magna ligula, vel aliquam leo dapibus et. Aliquam hendrerit
            consequat ligula eu ultrices. Fusce non viverra ligula, nec luctus
            lectus. Ut quis risus ut eros laoreet imperdiet sit amet id lacus.
            Etiam viverra elementum maximus. Fusce ac lectus velit. Nullam
            congue mi sit amet lectus facilisis ornare. Vivamus dignissim neque
            ante. Proin aliquam, diam at placerat luctus, magna neque porta
            risus, id consectetur purus neque eget lorem. Aenean et velit
            tortor. Cras hendrerit, nibh sit amet vulputate scelerisque, turpis
            justo feugiat dolor, sit amet elementum sapien massa sit amet erat.
          </p>
        </div>
        <img
          src={AboutImg("./about-history.jpg")}
          alt="Nuestra historia"
          className="about-history-img"
        />
      </section>

      <section className="about-impact-container">
        <div className="about-impact-bg">
          <div className="about-impact-text">
            <h2>Nuestro impacto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at leo ac ante tincidunt ultrices. Mauris nec lectus urna.
              Curabitur bibendum et lacus at pellentesque. Mauris posuere nibh
              ligula, sed consectetur diam vulputate eu. Integer eu nunc sit
              amet lacus tempus pulvinar. Sed euismod ac dolor at gravida. Duis
              posuere varius justo, vitae finibus massa imperdiet vitae. Duis id
              turpis feugiat, rhoncus tortor vitae, accumsan eros.
            </p>
          </div>
        </div>
      </section>

      <section className="about-valors-container">
        <h2 className="about-valors-main-title">Nuestros valores</h2>
        <hr />

        <div className="about-valors-grid">
          <div className="about-valors-card-cont">
            <FaMoneyCheckAlt className="about-valors-icon" />
            <p className="about-valors-title">Valor #1</p>
            <p className="about-valors-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet.
            </p>
          </div>

          <div className="about-valors-card-cont">
            <FaFileInvoice className="about-valors-icon" />
            <p className="about-valors-title">Valor #2</p>
            <p className="about-valors-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet.
            </p>
          </div>

          <div className="about-valors-card-cont">
            <FaCreditCard className="about-valors-icon" />
            <p className="about-valors-title">Valor #3</p>
            <p className="about-valors-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
