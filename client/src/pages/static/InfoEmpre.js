import { Navbar, Footer } from "../../components";
import "./assets/scss/HelpAccount.scss"
import { AiFillPieChart as Empre } from "react-icons/ai";
import { Tabs } from "./assets/js/BannerTabCreator.js";
import { BiLock,BiWallet } from "react-icons/bi"
import { useTranslation } from "react-i18next";
export const InfoEmpre = () => {
  const { t } = useTranslation();
  return (
    <>
    <Navbar />
    <div className="baners">
        <div className="baners-content">
        <Empre className="arrow" />
          <h1 className="title">{t("bussinesPage.hero.tittle")}</h1>
          <p className="subtitles">{t("bussinesPage.hero.desc")}</p>
        </div>
      </div>
      <div className="title2">
        <p>{t("bussinesPage.body.tittle")}</p>
        <hr />
      </div>
      <br/>
      <p className="infor">{t("bussinesPage.body.text")}</p>
        <br/><br/>
        <div className="title2">
        <p>{t("bussinesPage.body.subtittle")}</p>
        <hr />
      </div>
      <div className="accT_benefits-containers">
          <div className="accT_benefits-grids">
            <div className="accT_benefits-card-conts">
            <BiLock className="ico" />
              <p className="accT_benefits-titles">
              {t("bussinesPage.benefits.content.1")}
              </p>
            </div>

            <div className="accT_benefits-card-conts">
            <BiWallet className="ico" />
              <p className="accT_benefits-titles">{t("bussinesPage.benefits.content.2")}</p>
            </div>

            <div className="accT_benefits-card-conts">
            <BiWallet className="ico" />
              <p className="accT_benefits-titles  ">
              {t("bussinesPage.benefits.content.3")}
              </p>
            </div>
          </div>
        </div>
      <br/><br/><br/><br/><br/><br/>
       
      {Tabs("InfoEmpre")}
      
    <Footer />
    </>
  )
}
