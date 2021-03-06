//hooks
import { useState } from "react";
import { Link } from "react-router-dom";

//scss
import "../scss/credit_cards/cards-tabs-style.scss";
//images
const IndividualCardImages = require.context("../img/credit_cards/", true);
const Infoimagenes = require.context("../img/banner", true);
const AccountsImages = require.context("../img/acc/", true);
const LoansImages = require.context("../img/all_loans/", true);

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
                            <p>Ingresos m??nimos de $400 mensuales</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Solicitud llena, ya sea f??sico o formulario web</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de DUI y NIT (rev??s y derecho)</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Constancia de ingresos vigente firmada por la empresa, copia de
                                boletas de pago o constancia de AFP de los ??ltimos 6 meses
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Los 500 puntos de bienvenida se otorgar??n despues de gastar un m??nimo $30 con la tarjeta</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El l??mite de puntos acumulables es de 20,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El plazo de financiamiento no debe ser mayor a 60 meses</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Las tasas de inter??s se establecer??n de acuerdo a la cantidad del finaciamiento, pero no ser??n menores a un 15%</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Cuota de cargo del 4% del l??mite de la tarjeta ($7,500)
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
                            <p>Ingresos m??nimos de $1,000 mensuales</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estabilidad laboral; 6 meses con experiencia en tarjeta o 12 meses sin experiencia en tarjeta</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Solicitud llena, ya sea f??sico o formulario web</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de DUI y NIT (rev??s y derecho)</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Constancia de ingresos vigente firmada por la empresa copia de
                                boletas de pago o constancia de AFP de los ??ltimos 6 meses
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El l??mite de puntos acumulables es de 100,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El reembolso que te ofrece el seguro de compras ser?? igual al monto que originalmente el producto tiene</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Las cuotas sin intereses estar??n sujetas a las condiciones del lugar donde obtengas tu cr??dito, y en ocasiones no estar??n disponibles</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Para utilizar tus puntos por viajes no deber??s tener ning??n pago atrasado en los ??ltimos 6 meses</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                La cantidad m??xima de efectivo que puedes canjear por tus puntos es de $7,500
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
                            <p>Solicitud llena, ya sea f??sico o formulario web</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de DUI y NIT (rev??s y derecho)</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Constancia de ingresos vigente firmada por la empresa copia de
                                boletas de pago o constancia de AFP de los ??ltimos 6 meses
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El l??mite de puntos acumulables es de 600,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La protecci??n de compra le reembolsar?? los gastos para que el art??culo cubierto sea reparado o compensar?? el valor original del art??culo</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El art??culo cubierto por la garant??a deber?? tener una garant??a original del fabricante m??nima de 3 meses hasta tres a??os</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                La cobertura m??xima de efectivo podr?? solicitarse siempre y cuando no tengas m??s de 2 pagos atrasados con tu tarjeta
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
                            <p>Solicitud llena, ya sea f??sico o formulario web</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de DUI y NIT (rev??s y derecho)</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Constancia de ingresos vigente firmada por la empresa copia de
                                boletas de pago o constancia de AFP de los ??ltimos 6 meses
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El l??mite de puntos acumulables es de 1 000,000,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La protecci??n de equipaje le reembolsar?? hasta $3000 por equipaje perdido definitivamente y hasta $600 por demoras de m??s de 4 horas.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El art??culo cubierto por la garant??a deber?? tener una garant??a original y en este caso el tiempo brindado se duplicar?? pagando un beneficio de hasta US$2,500 por ocurrencia y un total anual de US$5,000</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                El banco ofrece el extrafianciamiento para esta tarjeta, pero la oferta puede variar dependiendo el historial crediticio, adem??s el plazo se aplica dependiendo de lo anteriormente dicho
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
                            <p>Fotocopia de DUI y NIT (rev??s y derecho)</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Tener una cuenta de ahorros o una cuenta corriente en Demantur</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Documento o constancia para la verificaci??n de lugar de residencia</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Llenar el formulario web y firmar el contrato en f??sico</p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Para contar con el servicio de alerta de compra con tu tarjeta deber??s contratarlo posteriormente con un cargo extra una ??nica vez</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>El costo de reposisi??n de tarjeta en caso de robo o extrav??o es de $4.85 + IVA</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La comisi??n por retiro de efectivo en cajeros a partir de la sexta transacci??n es de $0.65 + IVA</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>La comisi??n por retiro de efectivo en cajeros de otra red local es de $2.65 + IVA por transacci??n</p>
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
                            <p>DUI, carn?? de residente ?? pasaporte con informaci??n actualizada, vigente y en buen estado.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Apertura m??nima desde $200.</p>
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
                            <p>Apertura m??nima desde US$25.00</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>DUI, carn?? de residente ?? pasaporte con informaci??n actualizada, vigente y en buen estado</p>
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
                            <p>Monto m??nimo de apertura: $25.00</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Tasa de inter??s de acuerdo a tabla publicada el 1 de cada mes</p>
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
                            <p>Fotocopia de la Escritura de Constituci??n inscrita en el Registro de Comercio.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Fotocopia de la Certificaci??n del Punto de Acta, cuando se requiera aprobaci??n de Junta Directiva para la apertura o contrataci??n.</p>
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
                            <p>El monto inicial de saldo debe ser al menos de $200.00 d??lares</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
  }  else if(type === "rqrBusiness") {
    return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={LoansImages("./requirements_loans.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={LoansImages("./Benefits_loans.jpg")} alt=""></img>
                    </div>
                </div>

                <div className="tab-content">
                    <div className="tabs-selection">
                        <button className={ toggleState === 1 ? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(1)}>
                        Requisitos
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        Comisiones
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p> Autorizaci??n para investigaci??n dentro del sistema financiero</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>N??mina de accionistas actuales de la empresa</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estados financieros auditados de los tres ??ltimos a??os</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estados financieros de comprobaci??n a la fecha m??s reciente con su comparativo del mismo mes del a??o anterior</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Flujo de caja proyectado a un a??o de forma mensual
                            </p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Declaraciones de renta de los ??ltimos dos a??os
                            </p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisi??n de estudio</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisi??n de estudio</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisi??n de administraci??n</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisi??n de descubierto en cuenta corriente</p>
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
    );
  }else if(type === "rqrpersonal") {
    return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={LoansImages("./RequerimentsP.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={LoansImages("./comisionP.jpg")} alt=""></img>
                    </div>
                </div>

                <div className="tab-content">
                    <div className="tabs-selection">
                        <button className={ toggleState === 1 ? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(1)}>
                        Requisitos
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        Comisiones
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Ser mayor de 21 a??os y menor de 65 a??os.</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	Presentar DUI y NIT.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	Solicitud Firmada.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	Ingresos (seg??n perfil):<br></br>Asalariados: $400.00</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Comprobantes de constancia de ingresos, y en el caso de comerciantes independientes presentar declaraci??n de impuesto de renta e IVA y estados financieros.</p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisi??n por servicios en la estructuraci??n de cr??ditos m??nima de $99.00 d??lares de los Estados Unidos de Am??rica + IVA, y m??xima 2.50% sobre el monto otorgado + IVA. Comisi??n por pr??rroga y/o modificaciones al cr??dito del 0.25% sobre el saldo del cr??dito otorgado + IVA.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Recargo por incumplimiento de pago autom??tico de cuota de pr??stamos por insuficiencia de fondos: $6.50 + IVA por cada pago (sin cobro los 2 primeros intentos). Recargo aplicable ??nicamente al producto de Tasa Fija: Hasta 3% sobre el monto pagado en exceso de la amortizaci??n normal, mayor a $100.00, con un monto m??nimo de recargo de $10.00.</p>
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
    );
  }else{
    <div><b>Elemento requerido no encontrado</b></div>
  }
}

export { Tabs };
