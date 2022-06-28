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
             <div className="help-container">
                <div className="text-container">
                    <p className="text-title">¿Cómo podemos ayudarte?</p>
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
                                <p>Monto mínimo de $25</p>  
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
                                <p>Si usted fue víctima de robo de su tarjeta de crédito o débito, le aconsejamos reportar inmediatamente, a través de nuestra página contacto llenar todos los datos que se le pide, además digite el n°de su tarjeta para resolver el problema lo más pronto posible.</p>
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
                                <p>No realices transacciones en dispositivos que no sean tuyos o dispositivos públicos.</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./expediente.png`) } alt="" />
                                <p>	Nunca ingreses información personal a los sitios que son inseguros.</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./antivirus.png`) } alt="" />
                                <p className="sub-parrafo">Utilizar antivirus para detectar y bloquear amenazas, para evitar que las vulnerabilidades de diseño no sean aprovechadas por algún código malicioso.</p>
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
                           <p><BsCheck2Circle className="icon-content4"/><span>No te endeudes para cubrir otras deudas</span>:Si ya tienes deudas, adquirir nuevas para pagar las viejas no es lo ideal. Existen métodos de refinanciación, pero deben ser las últimas opciones, además de tener en cuenta sus implicaciones. </p>
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
                         <p>¿Necesitas ver tu estado de cuenta?, a continuación, te explicamos de un manera fácil y sencilla como poder visualizarlo0:</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>Como primer paso debes dirigirte a nuestra barra de navegación, y ubicarte donde dice Acceder </p>
                           <p><BsCheck2Circle className="icon-content4"/>Luego deberás iniciar sesión con tu correo electrónico y contraseña. </p>
                           <p><BsCheck2Circle className="icon-content4"/>Una vez iniciado sesión debes dirigirte al apartado de Cuentas</p>
                           <p><BsCheck2Circle className="icon-content4"/>Ya estando ahi tienes que dar click en Estado de cuenta digital </p>
                           <p><BsCheck2Circle className="icon-content4"/>Ahora ya podrás ver tu estado de cuenta y todas tus transacciones realizadas </p>
                        </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section6'></input>
                    <label for='section6'>
                        <p>¿Cuáles son los requisitos para adquirir una cuenta de ahorro?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Los requisitos para poder abrir una cuenta de ahorro son:</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>Apertura mínima desde US$25.00 </p>
                           <p><BsCheck2Circle className="icon-content4"/>Presentar su DUI, en caso de ser extranjero deberá presentar carné de residente ó pasaporte con información actualizada, vigente y en buen estado</p>
                           <p><BsCheck2Circle className="icon-content4"/>Prentar NIT</p>
                        </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section7'></input>
                    <label for='section7'>
                        <p>¿Como solicitar una tarjeta crédito o débito?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Para poder solicitar un tarjeta de credito o débito a continuación te explicamos como hacerlo </p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>Como primer paso debes dirigirte a nuestra barra de navegación, y ubicarte donde dice Tarjetas </p>
                           <p><BsCheck2Circle className="icon-content4"/>Esta le ve a transladar a otra página que te muestra las tarjetas que posee nuestro banco.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Estando en esa página deberás escoger la tarjeta que quieres, recuerda cada una tiene diferentes requisitos, elija la que mejor le puede favorecer</p>
                           <p><BsCheck2Circle className="icon-content4"/>Luego de haber elegido la tarjeta debera llenar un formulario para poder solicitar dicha tarjeta.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Luego de haber llenado el formulario y haberlo enviado, nos comunicaremos con usted para notificarle si su tarjeta fue aceptada o denegada.</p>
                        </div>    
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section8'></input>
                    <label for='section8'>
                        <p>¿Cómo abrir una cuenta de ahorro para un menor de edad?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Un menor de edad entre 16 y 18 años, puede abrir una cuenta de ahorro particular como titular con un
                        monto mínimo de $25.00, además debera presentar su carnet de minoridad en buen estado.</p>
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section9'></input>
                    <label for='section9'>
                        <p>¿Cuáles son los requisitos para un prestamo personal?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Para poder solicitar un presentamo personal deberás cumplir con los siguientes requisitos: </p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>Ser mayor de 21 años y menor de 70 años.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Presentar DUI y NIT.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Comprobantes de constancia de ingresos.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Contar con un margen de al menos $300.</p>
                        </div>    
                     </div>
                </div>       
                <div className="acc">
                    <input type='checkbox' id='section10'></input>
                    <label for='section10'>
                        <p>¿Cuáles son los requisitos para un prestamo empresarial?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Para poder solicitar un presentamo personal deberás cumplir con los siguientes requisitos: </p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>Ser una empresa formal o persona física con actividad empresarial.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Contar con antecedentes favorables en el buró de crédito.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Al menos dos años de antigüedad.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Comprobar la suficiente generación de flujos para hacer frente al financiamiento.</p>
                           <p><BsCheck2Circle className="icon-content4"/>Presentar toda la documentación solicitada por el banco.</p>

                        </div>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section11'></input>
                    <label for='section11'>
                        <p>¿Puede otra persona depositar en una cuenta, sin ser el titular de la misma?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Sí, otra persona que no es titular de la cuenta puede depositar en la misma al presentar su DUI y el número
                         de la cuenta a la que desea realizar el depósito.</p>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section12'></input>
                    <label for='section12'>
                        <p>¿Puede un extranjero optar por un crédito personal?</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>Si, pueden realizarlo aquellos que cuenten con residencia permanente en el país. Para lo cual deben presentar pasaporte vigente, carnet de residente permanente, NIT, recibos de colectores y comprobar ingresos en el país.</p>
                     </div>
                </div> 
            </div> 
            <Footer />
        </>
    )
}
