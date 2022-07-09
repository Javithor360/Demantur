//hooks
import { useState } from "react";
import { Link } from "react-router-dom";
//scss
import "../scss/credit_cards/cards-tabs-style.scss";
//images
const IndividualCardImages = require.context("../img/credit_cards/", true);
const Infoimagenes = require.context("../img/banner", true);
const AccountsImages = require.context("../img/acc/", true);

function Tabs(type) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  if (type === "ClassicCard") {
    return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={IndividualCardImages("./requirements_bg.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={IndividualCardImages("./limitations_bg.jpg")} alt=""></img>
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
                                Constancia de ingresos vigente firmada por la empresa, copia de
                                boletas de pago o constancia de AFP de los últimos 6 meses
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Los 500 puntos de bienvenida se otorgarán despues de gastar un mínimo $30 con la tarjeta</p>
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
  } else if (type === "PlatinumCard"){
     return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={IndividualCardImages("./requirements_bg.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={IndividualCardImages("./limitations_bg.jpg")} alt=""></img>
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
                            <p>Ingresos mínimos de $1,000 mensuales</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estabilidad laboral; 6 meses con experiencia en tarjeta o 12 meses sin experiencia en tarjeta</p>
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
                            <p>El límite de puntos acumulables es de 100,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El reembolso que te ofrece el seguro de compras será igual al monto que originalmente el producto tiene</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Las cuotas sin intereses estarán sujetas a las condiciones del lugar donde obtengas tu crédito, y en ocasiones no estarán disponibles</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Para utilizar tus puntos por viajes no deberás tener ningún pago atrasado en los últimos 6 meses</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                La cantidad máxima de efectivo que puedes canjear por tus puntos es de $7,500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
  } else if (type === "GoldCard"){
    return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={IndividualCardImages("./requirements_bg.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={IndividualCardImages("./limitations_bg.jpg")} alt=""></img>
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
                            <p>Ingresos minimos mensuales de $2,800</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estabilidad laboral comprobable; 12 meses de experiencia con tarjeta</p>
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
                            <p>El límite de puntos acumulables es de 600,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La protección de compra le reembolsará los gastos para que el artículo cubierto sea reparado o compensará el valor original del artículo</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El artículo cubierto por la garantía deberá tener una garantía original del fabricante mínima de 3 meses hasta tres años</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                La cobertura máxima de efectivo podrá solicitarse siempre y cuando no tengas más de 2 pagos atrasados con tu tarjeta
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  } else if (type === "BlackCard"){
    return(
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={IndividualCardImages("./requirements_bg.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={IndividualCardImages("./limitations_bg.jpg")} alt=""></img>
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
                            <p>Ingresos minimos mensuales de $4,800</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estabilidad laboral comprobable; 12 meses de experiencia con tarjeta</p>
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
                            <p>El límite de puntos acumulables es de 1 000,000,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La protección de equipaje le reembolsará hasta $3000 por equipaje perdido definitivamente y hasta $600 por demoras de más de 4 horas.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El artículo cubierto por la garantía deberá tener una garantía original y en este caso el tiempo brindado se duplicará pagando un beneficio de hasta US$2,500 por ocurrencia y un total anual de US$5,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                El banco ofrece el extrafianciamiento para esta tarjeta, pero la oferta puede variar dependiendo el historial crediticio, además el plazo se aplica dependiendo de lo anteriormente dicho
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }else if (type === "DebitCard"){
    return(
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={IndividualCardImages("./requirements_bg.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={IndividualCardImages("./limitations_bg.jpg")} alt=""></img>
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
                            <p>Fotocopia de DUI y NIT (revés y derecho)</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Tener una cuenta de ahorros o una cuenta corriente en Demantur</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Documento o constancia para la verificación de lugar de residencia</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Llenar el formulario web y firmar el contrato en físico</p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Para contar con el servicio de alerta de compra con tu tarjeta deberás contratarlo posteriormente con un cargo extra una única vez</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El costo de reposisión de tarjeta en caso de robo o extravío es de $4.85 + IVA</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La comisión por retiro de efectivo en cajeros a partir de la sexta transacción es de $0.65 + IVA</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La comisión por retiro de efectivo en cajeros de otra red local es de $2.65 + IVA por transacción</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  } else if (type === "CheckingAccount") {
    return(
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className="tab-bg-image tab-bg-image-active">
                        <img src={AccountsImages("./acc_requirements.jpg")} alt=""></img>
                    </div>
                </div>

                <div className="tab-content">
                    <div className="tabs-selection">
                        <button className="tab-button tab-selection-active">
                        Requisitos
                        </button>
                    </div>

                    <div className="content-text  active-content-text">
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>NIT en buen estado</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>DUI, carné de residente ó pasaporte con información actualizada, vigente y en buen estado.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Apertura mínima desde $200.</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>Solicitar</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  } else if(type === "SavingsAccount") {
    return(
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className="tab-bg-image tab-bg-image-active">
                        <img src={AccountsImages("./acc_conditions.jpg")} alt=""></img>
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
                            <p>Apertura mínima desde US$25.00</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>DUI, carné de residente ó pasaporte con información actualizada, vigente y en buen estado</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>NIT</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>Solicitar</span>
                            </div>
                        </Link>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Aplica para persona natural</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Monto mínimo de apertura: $25.00</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Tasa de interés de acuerdo a tabla publicada el 1 de cada mes</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>Solicitar</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} else if (type === "InfoEmpre") {
    return(
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={Infoimagenes("./trato.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={AccountsImages("./acc_conditions.jpg")} alt=""></img>
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
                            <p>Fotocopia de DUI y NIT del Representante Legal de la Empresa; en el caso de persona extranjera, pasaporte vigente y carnet de residente.</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de la Escritura de Constitución inscrita en el Registro de Comercio.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de la Certificación del Punto de Acta, cuando se requiera aprobación de Junta Directiva para la apertura o contratación.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de NIT de la Empresa.</p>
                        </div><div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de la Credencial de Representante Legal inscrita en el Registro de Comercio.</p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El monto inicial de saldo debe ser al menos de $200.00 dólares</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
  } else {
    return <div>Parámetro no encontrado.</div>;
  }
}

export { Tabs };
