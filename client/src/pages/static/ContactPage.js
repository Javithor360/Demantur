import axios from "axios";
//scss
import "./assets/scss/ContactPage_main.scss"
//icons
import { BiLoaderAlt } from 'react-icons/bi'
//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

//images
import ContactIconBg from './assets/img/contact/contact_bg_icon.png'
import { useState, useEffect } from "react";
// Translation
import { useTranslation } from "react-i18next";
import Cleave from "cleave.js/react";

//hooks

//Aqui van los hooks

export const ContactPage = () => {
    const {t}= useTranslation();
    const [Error, setError] = useState('')
    const [name, setName] = useState('')
    const [dui, setDui] = useState('')
    const [mail, setMail] = useState('')
    const [cellnum, setCellnum] = useState('')
    const [TextMessage, setTextMessage] = useState('')
    const [Chargin, setChargin] = useState(false);
    
    const handleForm = async(e) => {
        e.preventDefault();

        try {
            const PrivateConfig = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("authToken"),
                },
            };

            const ContactFormData = {
                name: name,
                dui: dui,
                mail: mail,
                cellnum: cellnum,
                TextMessage: TextMessage
            }

            const ContactForm = new FormData();

            setChargin(true);

            for (let key in ContactFormData) {
                ContactForm.append(key, ContactFormData[key]);
            }

            await axios.post(
                "http://localhost:4000/api/contact/contact-data",
                ContactForm,
                PrivateConfig
            );

            setTimeout(() => {
                setChargin(false)
                setName('')
                setDui('')
                setMail('')
                setCellnum('')
                setTextMessage('')
            }, 1500);
        
            
        } catch (error) {
            setChargin(false)
            setError(error.response.data.error);
        }
    }
    return (
        <>
            <Navbar />
            <div className="banner-container">
                <div className="banner-content">
                    <img src={ContactIconBg} alt='' />
                    <h1>{t("ContactPage.banner.tittle")}</h1>
                    <p>
                        {t("ContactPage.banner.desc")}                   
                    </p>
                </div>
            </div>
            <main>
                <p className="tittle">{t("ContactPage.tittle")} </p>
                <div className="underline">
                    <hr />
                </div>

                <p className="contact-information">
                    {t("ContactPage.desc")} 
                </p>
                <div className="contact-form-container">
                    <form onSubmit={handleForm} className="" action="">
                        <div className="form-element">
                            <div className="input-container">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Nombre completo"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.name")} 
                                </label>
                            </div>
                        </div>
                        <div className="form-element">
                            <div className="input-container">
                                <Cleave
                                    className="input-box"
                                    placeholder="Número de DUI"
                                    options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }}
                                    onChange={(e) => setDui(e.target.value)}
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.dui")} 
                                </label>
                            </div>
                        </div>
                        <div className="form-element">
                            <div className="input-container">
                                <input
                                    className="input-box"
                                    placeholder="Correo electrónico"
                                    onChange={(e) => setMail(e.target.value)}
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.email")} 
                                </label>
                            </div>
                        </div>
                        <div className="form-element">
                            <div className="input-container">
                                <Cleave
                                    className="input-box"
                                    placeholder="Telefono de contacto"
                                    options={{ blocks: [4, 4], numericOnly: true }}
                                    onChange={(e) => setCellnum(e.target.value)}
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.contact")} 
                                </label>
                            </div>
                        </div>
                        <textarea
                            className="contact-textarea"
                            placeholder={t("ContactPage.form.desc")}
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            defaultValue={""}
                            onChange={(e) => setTextMessage(e.target.value)}
                            
                        />
                        <span className='text-[16px] text-[red] mt-7'>{Error !== '' && Error}</span>
                        <button className="contact-submit-button" type="submit" disabled={Chargin}>
                        {
                            Chargin === true ?
                                <>
                                    <BiLoaderAlt className="animate-spin" />
                                </>
                                :
                                <>
                                    <span>{t("ContactPage.form.button")}</span>
                                </>
                        }
                        </button>
                        
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
