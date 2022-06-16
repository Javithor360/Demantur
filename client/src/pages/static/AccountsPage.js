import "./assets/scss/acc_main.scss";
// componentes
import { Navbar, Footer } from "../../components/";

// hooks
import { Link } from "react-router-dom";

// Assets
import { BsPiggyBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

export const AccountsPage = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-cont">
          <BsPiggyBank size="4.375rem" color="#fff" />
          <h1>Cuentas</h1>
          <p>Conoce nuestra gama de posibilidades</p>
        </div>
      </section>
      <div className="product-nav-container">
        <ul className="product-nav-list">
          <Link to="#" className="product-nav-element">
            Corriente
          </Link>
          <Link to="#" className="product-nav-element">
            Ahorros
          </Link>
        </ul>
      </div>
      <section className="acc_main-cards-container">
        <h2 className="post-nav-title">
          Echa un vistazo a cada tipo de cuenta
        </h2>
        <div className="cards-container">
          <div className="card">
            <h2>Cuenta Corriente</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada orci dui, ac maximus ante laoreet id. Aliquam interdum
              nibh mauris, eu euismod sem scelerisque vitae. Duis pellentesque
              urna vitae lectus sodales dapibus. Proin eu odio non lacus
              tincidunt ultricies. Maecenas sagittis sodales arcu.
            </p>
            <Link to="/accounts/checking">
              <span className="view-text">Ver más</span>
              <FaAngleRight />
            </Link>
          </div>

          <div className="card">
            <h2>Cuenta de Ahorros</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada orci dui, ac maximus ante laoreet id. Aliquam interdum
              nibh mauris, eu euismod sem scelerisque vitae. Duis pellentesque
              urna vitae lectus sodales dapibus. Proin eu odio non lacus
              tincidunt ultricies. Maecenas sagittis sodales arcu.
            </p>
            <Link to="/accounts/savings">
              <span className="view-text">Ver más</span>
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
