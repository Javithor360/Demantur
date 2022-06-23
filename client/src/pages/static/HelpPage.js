// Estilos
import "./assets/scss/help.scss";

//Icons
import {BsSearch, BsCheck2Circle} from "react-icons/bs";

// Componentes
import { Navbar, Footer} from "../../components/";

const HelpImg = require.context('./assets/img/help', true);
    

export const HelpPage = () => {
    return (
        <> 
            <Navbar />  
             <div className="container-help">
                <div className="text-container">
                    <p className="text-title"> ¿Cómo podemos ayudarte?</p>
                    <p className="text-content"> A continuación, te presentamos algunas de las preguntas frecuentes que realizan nuestros usuarios.</p>    
                    <div className="container-input">
                       <input type="text" placeholder=" Tambien puedes realizar una búsqueda rápida sobre tu duda a consultar" maxLength={55}/>
                       <BsSearch className="icon-input"/>                    </div>
                </div>         
            </div>
            <img src={ HelpImg(`./imgHelp.jpg`) } alt="" className="imagen" /> 
            <div className="accordion-menu">
                <div className="acc">
                    <input type='checkbox' id='section1'></input>
                    <label for='section1'>
                        <p>¿Cuáles son los requisitos para abrir una cuenta bancaria?  </p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Para Abrir una cuenta bancaria necesitas cumplir con los siguientes requisitos:</p>
                         <br />
                         <div className="content1">    
                            <div className="sub-content1">
                                <img src={ HelpImg(`./carnet-identidad.png`)  } alt="" /> 
                                <p>Presentar tu DUI</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./pasaporte.png`) } alt="" /> 
                                <p>Si eres extranjero debes presentar tu pasaporte</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./dolar.png`) } alt=""  /> 
                                <p>Monto minimo de $...</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./chico.png`) } alt="" /> 
                                <p>Ser mayor de edad</p>  
                            </div>
                            
                         </div>
                     </div>
                </div>  
                <div className="acc">
                    <input type='checkbox' id='section2'></input>
                    <label for='section2'>
                        <p>Tarjeta robada o extraviada</p>
                    </label>
                    <div className="content">
                         <br />
                         <div className="content2">
                            <div className="sub-content2">
                                <img src={ HelpImg(`./crimen.png`) } alt="" />
                                <p>Si usted fue víctima de robo de su tarjeta de crédito o débito, le aconsejamos reportar inmediatamente, a traves de nuestra página contacto llenar todos los datos que se le piede, además digite el n°de su tarjeta para resolver el problema lo más pronto posible.</p>
                            </div>
                         </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section3'></input>
                    <label for='section3'>
                        <p>Consejos para realizar transacciones seguras en línea</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>A continuación te presentamos unos consejos que te pueden ayudar cuando realices transacciones en línea:</p>
                         <div className="content3">
                            <div className="sub-content3">
                                <img src={ HelpImg(`./sitio-web.png`) } alt="" />
                                <p>Debes de verificar que el sitio que estas visitando sea seguro.</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./dispositivo.png`) } alt="" />
                                <p>No realices transacciones en dispotivos que no sean tuyos o dispositivos públicos.</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./expediente.png`) } alt="" />
                                <p>	Nunca ingreses información personal a los sitios que son inseguros.</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./antivirus.png`) } alt="" />
                                <p>Utilizarantivirus para detectar y bloquear amenazas, para evitar que las vulnerabilidades de diseño no sean aprovechadas por algún código malicioso.</p>
                            </div>
                            
                         </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section4'></input>
                    <label for='section4'>
                        <p>Consejos sobre seguridad financiera</p>
                    </label>
                    <div className="content">
                         <br/>
                         <div className="content4">
                         <p>Te dejamos algunos consejos para mejorar tus finanzas y evitar gastos innecesarios.</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>Define metas financieras</span>:El primer paso para dar un buen manejo a tu dinero es saber qué es lo que quieres lograr con él. </p>
                           <p><BsCheck2Circle className="icon-content4"/><span>Haz una lista con todos tus gastos</span>:Hacer una lista de todos tus gastos es los más importantes, te ayuda a darte cuenta en qué estás gastando tu dinero y cuánto estás gastando.</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>Plantéate cómo reducir</span>:Por ejemplo, renta, luz, agua, etc. Gastar menos en los gastos fijos es posible, pues sólo debes hacerte consciente del uso que les das e identificar si puedes ahorrar un poco en ellos. </p>
                           <p><BsCheck2Circle className="icon-content4"/><span>No te endeudes para cubrir otras deudas</span>:Si ya tienes deudas, adquirir nuevas para pagar las viejas no es lo ideal. Existen métodos de refinanciación, pero deben ser las últimas opciones,además de tener en cuenta sus implicaciones. </p>
                           <p><BsCheck2Circle className="icon-content4"/><span>Compra sólo lo necesario</span>:Para evitar gastar de más y salirse del presupuesto lo recomendado es comprar solo lo necesario y planificar las compras.
                           </p>
                           <p><BsCheck2Circle className="icon-content4"/><span>Ahorra</span>:Probablemente uno de los consejos más importantes. Para que puedas alcanzar tus metas, debes contar con el respaldo de un buen ahorro que te permita disfrutar en el futuro.</p>
                         </div>                     
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section5'></input>
                    <label for='section5'>
                        <p>¿Como puede ver mi estado de cuenta?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section6'></input>
                    <label for='section6'>
                        <p>¿Cuáles son los requisitos para adquirir una cuenta de ahorro?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section7'></input>
                    <label for='section7'>
                        <p>¿Como solicitar una tarjeta crédito?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section8'></input>
                    <label for='section8'>
                        <p>Section 8</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section9'></input>
                    <label for='section9'>
                        <p>Section 9</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div>       
                <div className="acc">
                    <input type='checkbox' id='section10'></input>
                    <label for='section10'>
                        <p>Section 10</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section11'></input>
                    <label for='section11'>
                        <p>Section 11</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section12'></input>
                    <label for='section12'>
                        <p>Section 12</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor posuere bibendum. Suspendisse tempus velit quis ex vestibulum dapibus</p>
                     </div>
                </div> 
            </div> 
           
            
            <Footer />
        </>
       
            

    )
}
