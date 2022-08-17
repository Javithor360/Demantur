import { Navbar, Footer } from "../../components";
import "./assets/scss/HelpAccount.scss"
import { AiOutlineSafety as Empre } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const FotoRegister = require.context("./assets/img/register", true);
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
        <p>{t("selectpage.body.tittle3")}</p>
        <hr />
      </div>
      <p className="">
        <ol>
        <div className="img-register">
        <img src={FotoRegister("./paso1.png")} alt=""/>
        </div>
          <div className="content-info">
            <br/><br/><br/>
          <li>{t("selectpage.info.1.first")}
            <ul>
            <br/>
              <li>{t("selectpage.info.1.1")}</li>
              <li>{t("selectpage.info.1.2")}</li>
              <li>{t("selectpage.info.1.3")}</li>
              <li>{t("selectpage.info.1.4")}</li>
            </ul>
            <br/>
            <span>{t("selectpage.info.1.note")}</span><br/><p>{t("selectpage.info.1.info")}</p>
          </li>
          </div>
          <div className="img-register">
        <img src={FotoRegister("./paso2.png")} alt=""/>
        </div>
          <div className="content-info">
          <br/><br/><br/>
          <li>{t("selectpage.info.2.first")}
          <ul>
          <br/>
              <li>{t("selectpage.info.2.1")}</li>
              <li>{t("selectpage.info.2.2")}</li>
              <li>{t("selectpage.info.2.3")}</li>
              <li>{t("selectpage.info.2.4")}</li>
            </ul>
            <br/>
            <span>{t("selectpage.info.1.note")}</span><br/><p>{t("selectpage.info.1.info")}</p>
          </li>
          </div>
          <div className="img-register">
        <img src={FotoRegister("./paso3.png")} alt=""/>
        </div>
          <div className="content-info">
          <br/><br/><br/>
          <li>{t("selectpage.info.3.first")}
            <ul>
            <br/>
              <li>{t("selectpage.info.3.1")}</li>
              <li>{t("selectpage.info.3.2")}</li>
              <li>{t("selectpage.info.3.3")}</li>
              <li>{t("selectpage.info.3.4")}</li>
            </ul>
            <br/>
            <span>{t("selectpage.info.3.note")}</span><br/><p>{t("selectpage.info.3.info")}</p>
          </li>
          </div>
          <div className="img-register">
        <img src={FotoRegister("./paso4.png")} alt=""/>
        </div>
          <div className="content-info">
          <br/><br/><br/>
          <li>{t("selectpage.info.4.first")}
            <ul>
            <br/>
              <li>{t("selectpage.info.4.1")}</li>
              <li>{t("selectpage.info.4.2")}</li>
              <li>{t("selectpage.info.4.3")}</li>
              <li>{t("selectpage.info.4.4")}</li>
            </ul>
            <br/>
            <span>{t("selectpage.info.4.note")}</span><br/><p>{t("selectpage.info.4.info")}</p>
          </li>
          </div>
          <div className="img-register">
        <img src={FotoRegister("./paso5.png")} alt=""/>
        </div>
          <div className="content-info">
          <br/><br/><br/>
          <li>{t("selectpage.info.5.first")}
          <br/><br/>
            <span>{t("selectpage.info.5.note")}</span><br/><p>{t("selectpage.info.3.info")}</p>
          </li>
          </div>
          
        </ol>
      </p>
      
    <Footer />
    </>
  )
}
