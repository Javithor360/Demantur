//hooks
import { useState } from "react";
//scss
import "../scss/CreditCards_Styles/cards-tabs-style.scss";
//images
const ClassicCardImages = require.context("../img/credit_cards/classic", true);

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="information-tabs">
        <div className="information-tabs-flex">
            <div className="tab-images-container">
                <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                    <img src={ClassicCardImages("./requirements_bg.jpg")} alt=""></img>
                </div>

                <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                    <img src={ClassicCardImages("./limitations_bg.jpg")} alt=""></img>
                </div>
            </div>

            <div className="tab-content">
                <div className="tabs-selection">
                    <button className={ toggleState === 1 ? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(1)}>
                    Requisitos
                    </button>
                    <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                    Condiciones
                    </button>
                </div>

                <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Estabilidad laboral</p>
                        </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Ingresos mínimos de $400 mensuales</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Solicitud llena, ya sea físico o formulario web</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Fotocopia de DUI y NIT (revés y derecho)</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>
                            Constancia de ingresos vigente firmada por la empresa copia de
                            boletas de pago o constancia de AFP de los últimos 6 meses
                        </p>
                    </div>
                </div>
                <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Los 500 puntos de bienvenida se otorgarán despues de gastar un minimo $30 con la tarjeta</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>El límite de puntos acumulables es de 20,000</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>El plazo de financiamiento no debe ser mayor a 60 meses</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>Las tasas de interés se establecerán de acuerdo a la cantidad del finaciamiento, pero no serán menores a un 15%</p>
                    </div>
                    <div className="individual-text">
                        <p>&#10003;</p>
                        <p>
                            Cuota de cargo del 4% del límite de la tarjeta ($7,500)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Tabs;
