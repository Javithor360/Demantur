import "./assets/scss/help.scss";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";


export const HelpPage = () => {
    return (
        <>
            <Navbar />
            <p className="tittle">¿Como podemos ayudarte?</p>
            <div className=" text">
                <p>A continuación, te presentamos algunas de las preguntas frecuentes que realizan nuestros usuarios.</p>
                <p>Si por alguna razón tu problema es algo mayor puedes ponerte en contacto con nosotros haciendo <Link to='/'>¡Click Aquí!</Link></p>
            </div>
            <div className="container-accordion">
                <div className="accordion">
                    <div ref="contentBx">
                        <div className="label">¿Cómo abro una cuenta bancaria?</div>
                        <div className="content">
                            <p>Para Abrir una cuenta bancaria necesitas cumplir con los siguientes requisitos:</p>
                            <ul>
                                <li><p>Presentar DUI o NIT</p></li>
                                <li><p>Si eres extranjero debes presentar tu pasaporte</p></li>
                                <li><p>Ser mayor de 18 años</p></li>
                                <li><p>Monto minimo de $20</p></li>
                                <li><p>Presentar el nombre del titular</p></li>
                            </ul>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">Tarjeta robada o extraviada</div>
                        <div className="content">
                            <p>Si usted fue víctima de robo de su tarjeta de crédito o débito, le aconsejamos reportar inmediatamente, a traves de nuestra página contacto e escribir su n°de tarjeta para resolver el problema lo más pronto posible.</p>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">Ver estados de cuenta</div>
                        <div className="content">
                            <p>Revisar los estados de cuenta cuenta bancaria es una excelente práctica para tener un excelente control financiero.Esta información, le permite estar informado sobre cómo usa su dinero, ver pagos, depósitos o detectar movimientos que no reconozca.</p>
                            <p>A continuación le explicamos pasa a paso como puede ver su estado de cuenta:</p>
                            <ul>
                                <li><p>Primero debe Iniciar sesión</p></li>
                                <li><p>Primero debe Iniciar sesión</p></li>
                                <li><p>Y por ultimo dar click en ver su estado de cuenta</p></li>
                            </ul>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">¿Cómo pagar mi tarjeta de crédito?</div>
                        <div className="content">
                            <p>Ahorre tiempo y pague sus tarjetas de crédito a través de nuestra Banca en Línea,  puede realizar el pago de sus tarjetas de crédito o las de un tercero.</p>
                            <p>Pasos para pagar su tarjeta de credito:</p>
                            <ul>
                                <li><p>Primero debe acceder a su cuenta bancaria</p></li>
                                <li><p>Luego dirigirse al apartado de tarjetas de crédito</p></li>
                                <li><p>Digite el número de la tarjeta a pagar</p></li>
                                <li><p>El sistema verificará el número de la tarjeta de crédito</p></li>
                                <li><p>El sistema verificará el número de la tarjeta de crédito</p></li>
                                <li><p>Seleccione o digite el monto a pagar</p></li>
                                <li><p>Luego de haber completado todos los campos haga click en pagar tarjeta</p></li>
                                <li><p>Una vez su pago sea exitoso, se le enviara un comprobante de pago a su correo electronico</p></li>

                            </ul>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">¿Como solicitar una tarjeta crédito?</div>
                        <div className="content">
                            <p>A continuación le explicaremos como puede solitar una tarjeta de credtio</p>
                            <ul>
                                <li><p>Primero debe acceder a su cuenta bancaria</p></li>
                                <li><p>Dirijase al apartado de tarjetas de crédito</p></li>
                                <li><p>Luego seleccione la tarjeta a seleccionar, recuerde que cada tarjeta tiene un monto minimo para solicitarla</p></li>
                                <li><p>Luego seleccione la tarjeta a seleccionar, recuerde que cada tarjeta tiene un monto minimo para solicitarla</p></li>
                                <li><p>Luego de haberlo enviado, espere unos días para ver si su solicitud fue aprobada exitosamenter</p></li>
                            </ul>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">List</div>

                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facilis fugiat cupiditate, doloribus at enim maxime tenetur ipsa autem sed vero nisi beatae reiciendis minus provident ratione eos consequatur rerum.</p>
                        </div>
                    </div>
                    <div className="contentBx">
                        <div className="label">List</div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facilis fugiat cupiditate, doloribus at enim maxime tenetur ipsa autem sed vero nisi beatae reiciendis minus provident ratione eos consequatur rerum.</p>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">List</div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facilis fugiat cupiditate, doloribus at enim maxime tenetur ipsa autem sed vero nisi beatae reiciendis minus provident ratione eos consequatur rerum.</p>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">List</div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facilis fugiat cupiditate, doloribus at enim maxime tenetur ipsa autem sed vero nisi beatae reiciendis minus provident ratione eos consequatur rerum.</p>
                        </div>
                    </div>
                    <div ref="contentBx">
                        <div className="label">List</div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facilis fugiat cupiditate, doloribus at enim maxime tenetur ipsa autem sed vero nisi beatae reiciendis minus provident ratione eos consequatur rerum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}