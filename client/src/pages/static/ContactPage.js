//scss
import "./assets/scss/ContactPage_main.scss"

//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

//images
import ContactIconBg from './assets/img/contact/contact_bg_icon.png'

// Translation
import { useTranslation } from "react-i18next";

//hooks
//Aqui van los hooks

export const ContactPage = () => {
    const {t}= useTranslation();
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
                    <form className="" action="">
                        <div className="form-element">
                            <div className="input-container">
                                <input
                                    className="input-box"
                                    type="text"
                                    required="required"
                                    placeholder="Nombre completo"
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
