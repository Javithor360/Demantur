// Estilos
import "./assets/scss/help.scss";

//Icons
import {BsSearch, BsCheck2Circle} from "react-icons/bs";

// Componentes
import { Navbar, Footer} from "../../components/";

// Translation
import { useTranslation } from "react-i18next";

const HelpImg = require.context('./assets/img/help', true);
    

export const HelpPage = () => {
    const {t}= useTranslation();
    return (
        <> 
            <Navbar />  
             <div className="help-container">
                <div className="text-container">
                    <p className="text-title">{t("help_page.help.help_tittle")}</p>
                    <p className="text-content"> {t("help_page.help.help_desc")}</p>    
                    <div className="container-input">
                       <input type="Search" placeholder={t("help_page.help.help_search")} maxLength={55}/>
                       <BsSearch className="icon-input"/>                    </div>
                </div>         
            </div>
            <img src={ HelpImg(`./imgHelp.jpg`) } alt="" className="imagen" /> 
            <div className="accordion-menu">
                <div className="acc"> 
                    <input type='checkbox' id='section1'></input>
                    <label for='section1'>
                        <p>{t("help_page.accordion.1.tittle")} </p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.1.desc")}</p>
                         <br />
                         <div className="content1">    
                            <div className="sub-content1">
                                <img src={ HelpImg(`./carnet-identidad.png`)  } alt="" /> 
                                <p>{t("help_page.accordion.1.sub_desc1")}</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./pasaporte.png`) } alt="" /> 
                                <p>{t("help_page.accordion.1.sub_desc2")}</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./dolar.png`) } alt=""  /> 
                                <p>{t("help_page.accordion.1.sub_desc3")}</p>  
                            </div>
                            <div className="sub-content1">
                                <img src={ HelpImg(`./chico.png`) } alt="" /> 
                                <p>{t("help_page.accordion.1.sub_desc4")}</p>  
                            </div>
                            
                         </div>
                     </div>
                </div>  
                <div className="acc">
                    <input type='checkbox' id='section2'></input>
                    <label for='section2'>
                        <p>{t("help_page.accordion.2.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <div className="content2">
                            <div className="sub-content2">
                                <img src={ HelpImg(`./crimen.png`) } alt="" />
                                <p>{t("help_page.accordion.2.desc")}</p>
                            </div>
                         </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section3'></input>
                    <label for='section3'>
                        <p>{t("help_page.accordion.3.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.3.desc")}</p>
                         <div className="content3">
                            <div className="sub-content3">
                                <img src={ HelpImg(`./sitio-web.png`) } alt="" />
                                <p>{t("help_page.accordion.3.sub_desc1")}</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./dispositivo.png`) } alt="" />
                                <p>{t("help_page.accordion.3.sub_desc2")}</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./expediente.png`) } alt="" />
                                <p>{t("help_page.accordion.3.sub_desc3")}</p>
                            </div>
                            <div className="sub-content3">
                                <img src={ HelpImg(`./antivirus.png`) } alt="" />
                                <p className="sub-parrafo">{t("help_page.accordion.3.sub_desc4")}</p>
                            </div>
                            
                         </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section4'></input>
                    <label for='section4'>
                        <p>{t("help_page.accordion.4.tittle")}</p>
                    </label>
                    <div className="content">
                         <br/>
                         <div className="content4">
                         <p>{t("help_page.accordion.4.desc")}</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle1")}</span>{t("help_page.accordion.4.sub_desc1")} </p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle2")}</span>{t("help_page.accordion.4.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle3")}</span>{t("help_page.accordion.4.sub_desc3")}</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle4")}</span>{t("help_page.accordion.4.sub_desc4")}</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle5")}</span>{t("help_page.accordion.4.sub_desc5")}</p>
                           <p><BsCheck2Circle className="icon-content4"/><span>{t("help_page.accordion.4.sub_tittle6")}</span>{t("help_page.accordion.4.sub_desc6")}</p>
                         </div>                     
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section5'></input>
                    <label for='section5'>
                        <p>{t("help_page.accordion.5.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.5.desc")}</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.5.sub_desc1")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.5.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.5.sub_desc3")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.5.sub_desc4")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.5.sub_desc5")}</p>
                        </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section6'></input>
                    <label for='section6'>
                        <p>{t("help_page.accordion.6.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.6.desc")}</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.6.sub_desc1")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.6.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.6.sub_desc3")}</p>
                        </div>
                     </div>
                </div>   
                <div className="acc">
                    <input type='checkbox' id='section7'></input>
                    <label for='section7'>
                        <p>{t("help_page.accordion.7.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.7.desc")}</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.7.sub_desc1")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.7.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.7.sub_desc3")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.7.sub_desc4")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.7.sub_desc5")}</p>
                        </div>    
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section8'></input>
                    <label for='section8'>
                        <p>{t("help_page.accordion.8.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.8.desc")}</p>
                     </div>
                </div>
                <div className="acc">
                    <input type='checkbox' id='section9'></input>
                    <label for='section9'>
                        <p>{t("help_page.accordion.9.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.9.desc")}</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.9.sub_desc1")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.9.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.9.sub_desc3")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.9.sub_desc4")}</p>
                        </div>    
                     </div>
                </div>       
                <div className="acc">
                    <input type='checkbox' id='section10'></input>
                    <label for='section10'>
                        <p>{t("help_page.accordion.10.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.10.desc")}</p>
                         <div className="content4">
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.10.sub_desc1")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.10.sub_desc2")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.10.sub_desc3")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.10.sub_desc4")}</p>
                           <p><BsCheck2Circle className="icon-content4"/>{t("help_page.accordion.10.sub_desc5")}</p>

                        </div>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section11'></input>
                    <label for='section11'>
                        <p>{t("help_page.accordion.11.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.11.desc")}</p>
                     </div>
                </div> 
                <div className="acc">
                    <input type='checkbox' id='section12'></input>
                    <label for='section12'>
                        <p>{t("help_page.accordion.12.tittle")}</p>
                    </label>
                    <div className="content">
                         <br />
                         <p>{t("help_page.accordion.12.desc")}</p>
                     </div>
                </div> 
            </div> 
            <Footer />
        </>
    )
}
