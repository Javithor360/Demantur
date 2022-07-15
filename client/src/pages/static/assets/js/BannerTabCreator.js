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
                            <p>Estabilidad laboral de 6 meses con experiencia en tarjeta o 12 meses sin experiencia en tarjeta</p>
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
                            <p>El reeembolso que te ofrece el seguro de compras será igual al monto que originalmente el producto tiene</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Las cuotas sin intereses estarán sujetas a las condiciones del lugar donde obtengas tu crédito, y en ocaciones no estarán disponibles</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Para utilizar tus puntos por viajes no deberás tener ningun pago atrasado en los últimos 6 meses.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ducimus vitae.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit atque dignissimos autem.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
                            </p>
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
                            <p> Autorización para investigación dentro del sistema financiero</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Nómina de accionistas actuales de la empresa</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estados financieros auditados de los tres últimos años</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Estados financieros de comprobación a la fecha más reciente con su comparativo del mismo mes del año anterior</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Flujo de caja proyectado a un año de forma mensual
                            </p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Declaraciones de renta de los últimos dos años
                            </p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisión de estudio</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisión de estudio</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisión de administración</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisión de descubierto en cuenta corriente</p>
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
                            <p>Ser mayor de 21 años y menor de 65 años.</p>
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
                            <p>	Ingresos (según perfil):<br></br>Asalariados: $400.00</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            Comprobantes de constancia de ingresos, y en el caso de comerciantes independientes presentar declaración de impuesto de renta e IVA y estados financieros.</p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Comisión por servicios en la estructuración de créditos mínima de $99.00 dólares de los Estados Unidos de América + IVA, y máxima 2.50% sobre el monto otorgado + IVA. Comisión por prórroga y/o modificaciones al crédito del 0.25% sobre el saldo del crédito otorgado + IVA.</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>Recargo por incumplimiento de pago automático de cuota de préstamos por insuficiencia de fondos: $6.50 + IVA por cada pago (sin cobro los 2 primeros intentos). Recargo aplicable únicamente al producto de Tasa Fija: Hasta 3% sobre el monto pagado en exceso de la amortización normal, mayor a $100.00, con un monto mínimo de recargo de $10.00.</p>
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
