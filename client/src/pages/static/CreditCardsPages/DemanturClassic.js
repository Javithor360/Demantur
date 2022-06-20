//scss
import "../assets/scss/CreditCards_Styles/demantur_classic_main.scss";

//components
import { Navbar, Footer } from "../../../components/";
import TabsClassicCard from "../assets/js/TabsClassicCard";

//images
const ClassicCardImages = require.context('../assets/img/credit_cards/classic', true);

export const DemanturClassic = () => {
  return (
    <>
      <Navbar />

        <div className="classic-card-hero-container">
          <div className="classic-card-hero-content">
            <div className="text-content">
              <p>Classic</p>
              <p>Todo lo que necesitas a tu alcance</p>
            </div>
            <div className="image-content">
              <img src={ClassicCardImages('./classicCard.png')} alt='' ></img>
            </div>
          </div>
        </div>

        <div className="card-description">
          <p>
            La tarjeta de crédito Demantur Classic te brinda los beneficios necesarios para tu día a día, con ella dispones de un medio de pago seguro para usarlo en comercios, compras en línea etc. Además, dispones de retiro inmediato de efectivo en cajeros nacionales, encuentra información más detallada a continuación.
          </p>
        </div>

        <div className="card-benefits_container">
          <p className="card-benefits_tittle">Disfruta de los mejores beneficios que te ofrece esta tarjeta</p>

          <div className="card-benefits_grid_row">

            <div className="grid_item vl">
              <img src={ClassicCardImages('./points_icon.png')} alt=""></img>
              <p>Puntos Acumulables</p>
              <p>Recibe 500 puntos por tu primera 
                  compra, luego acumula 1 punto 
                  cada 5 dólares que gastes
              </p>
              <hr />
            </div>
            
            <div className="grid_item vl">
              <img src={ClassicCardImages('./fee_payment_icon.png')} alt=""></img>
              <p>Pagos en cuotas</p>
              <p>
                Paga en cuotas de hasta 36 
                meses según tus posibilidades 
                con una tasa de interés fija
              </p>

              <hr />
            </div>

            <div className="grid_item">
              <img src={ClassicCardImages('./cash_icon.png')} alt=""></img>
              <p>Retiro de efectivo</p>
              <p>
              Retira efectivo con tu tarjeta 
              cuando lo necesites en todos 
              nuestros cajeros a nivel nacional
              </p>
            </div>

          </div>
        </div>
        <TabsClassicCard />

        <div className="credit-card-tittle">
            <p>Beneficios Especiales</p>
            <hr />
        </div>

        <div className="other-benefits-banner">
          <div className="otb-content">
            <div className="otb-icon">
              <img src={ClassicCardImages('./discount_icon.png')} alt="" />
            </div>
            <div className="otb-text">
              <p>Descuentos en Comercios Seleccionados</p>
              <p>Obtén muchas ofertas y promociones en productos al pagar con tu tarjeta de crédito</p>
            </div>
          </div>
        </div>

        <div className="card-form-container">
          <div className="form-header">
            <p>¿Ya te has decidido?</p>
            <hr className="blue-underline smallest"></hr>
            <p>Solicita tu tarjeta ahora</p>
          </div>
          <form className="classic-card-form">
          </form>
        </div>
        <Footer />
    </>
  )
}