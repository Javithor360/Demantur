import axios from "axios";
//scss
import "./assets/scss/ContactPage_main.scss"

//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

//images
import ContactIconBg from './assets/img/contact/contact_bg_icon.png'
import { useState } from "react";
// Translation
import { useTranslation } from "react-i18next";

//hooks

//Aqui van los hooks

export const ContactPage = () => {
    const {t}= useTranslation();

    const [name, setName] = useState('')
    const [dui, setDui] = useState('')
    const [mail, setMail] = useState('')
    const [cellnum, setCellnum] = useState('')

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
                cellnum: cellnum
            }

            const ContactForm = new FormData();

            for (let key in ContactFormData) {
                ContactForm.append(key, ContactFormData[key]);
            }

            await axios.post(
                "http://localhost:4000/api/contact/contact-data",
                ContactForm,
                PrivateConfig
            );
            
        } catch (error) {
            console.log(error);
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
                                    required="required"
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
                                <input
                                    className="input-box"
                                    type="number"
                                    required="required"
                                    placeholder="Número de DUI"
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
                                    type="email"
                                    required="required"
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
                                <input
                                    className="input-box"
                                    type="number"
                                    required="required"
                                    placeholder="Telefono de contacto"
                                    onChange={(e) => setCellnum(e.target.value)}
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.contact")} 
                                </label>
                            </div>
                        </div>
                        <div className="form-element">
                            <div className="input-container">
                                <input
                                    className="input-box"
                                    type="number"
                                    required="required"
                                    placeholder="Número de gestión (Si tienes)"
                                />
                                <label className="form-label" htmlFor="">
                                    {t("ContactPage.form.management")} 
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
                        />
                        <button className="contact-submit-button" type="submit">
                            {t("ContactPage.form.button")}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
