//hooks
import { useState } from "react";
import { Link } from "react-router-dom";

//scss
import "../scss/credit_cards/cards-tabs-style.scss";

//translate
import { useTranslation } from "react-i18next";
//images
const IndividualCardImages = require.context("../img/credit_cards/", true);
const Infoimagenes = require.context("../img/banner", true);
const AccountsImages = require.context("../img/acc/", true);
const LoansImages = require.context("../img/all_loans/", true);


function Tabs(type) {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useTranslation();
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
                        {t("ClassicPage.requirements.tittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("ClassicPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.requirements.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.requirements.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("ClassicPage.requirements.5")}
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.conditions.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("ClassicPage.conditions.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("ClassicPage.conditions.5")}
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
                        {t("PlatinumPage.requirements.tittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("PlatinumPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.requirements.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.requirements.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("PlatinumPage.requirements.5")}
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.conditions.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("PlatinumPage.conditions.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("PlatinumPage.conditions.5")}
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
                        {t("GoldPage.requirements.tittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("GoldPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p> {t("GoldPage.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("GoldPage.requirements.5")}
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("GoldPage.conditions.4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  } else if (type === "BlackCard"){
    return(
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
                        {t("GoldPage.requirements.tittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("GoldPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.requirements.4")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("GoldPage.requirements.desc5")}
                            </p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("GoldPage.conditions.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("GoldPage.conditions.4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }else if (type === "DebitCard"){
    return(
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
                        {t("DebitCard.requirements.tittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("GoldPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.requirements.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.requirements.4")}</p>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.conditions.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("DebitCard.conditions.4")}</p>
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
                        {t("CheckingPage.requirements.subtittle")}
                        </button>
                    </div>

                    <div className="content-text  active-content-text">
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("CheckingPage.requirements.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p></p>{t("CheckingPage.requirements.2")}
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("CheckingPage.requirements.3")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("CheckingPage.requirements.button")}</span>
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
                        {t("SavingPage.requirements.subtittle")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("SavingPage.conditions.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.requirements.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.requirements.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.requirements.3")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("SavingPage.button")}</span>
                            </div>
                        </Link>
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.conditions.1")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.conditions.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("SavingPage.conditions.3")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("SavingPage.button")}</span>
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
                        {t("bannertab.tittle")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("bannertab.1")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("bannertab.2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("bannertab.3")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("bannertab.4")}</p>
                        </div><div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("bannertab.5")}</p>
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
                        {t("loans_pages.business_loan_page.business_tab.1.requeriments")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("loans_pages.business_loan_page.business_tab.2.commissions")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p> {t("loans_pages.business_loan_page.business_tab.1.authorization")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.1.payroll")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.1.state")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.1.state2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("loans_pages.business_loan_page.business_tab.1.flow")}
                            </p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("loans_pages.business_loan_page.business_tab.1.rent")}
                            </p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.2.study")}</p>
                        </div>
                    
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.2.management")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.business_loan_page.business_tab.2.discovery")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("loans_pages.personal_loan_page.apply_for")}</span>
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
                        {t("loans_pages.personal_loan_page.personal_tab.1.requeriments")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("loans_pages.personal_loan_page.personal_tab.2.conditions")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.1.elderly")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.1.dui")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	{t("loans_pages.personal_loan_page.personal_tab.1.request")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	{t("loans_pages.personal_loan_page.personal_tab.1.income")}<br/>
                                {t("loans_pages.personal_loan_page.personal_tab.1.income2")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("loans_pages.personal_loan_page.personal_tab.1.receipts")}</p>
                        </div>
                        
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.2.bills")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.2.amount")}<br/>
                            {t("loans_pages.personal_loan_page.personal_tab.2.up_to")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.2.sure")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.personal_loan_page.personal_tab.2.commission")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("loans_pages.personal_loan_page.apply_for")}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }else if(type === "rqrHouse") {
    return (
        <div className="information-tabs">
            <div className="information-tabs-flex">
                <div className="tab-images-container">
                    <div className={toggleState === 1 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(1)}>
                        <img src={LoansImages("./RequerimentsH.jpg")} alt=""></img>
                    </div>

                    <div className={toggleState === 2 ? "tab-bg-image tab-bg-image-active" : "tab-bg-image"} onClick={() => toggleTab(2)}>
                        <img src={LoansImages("./ConditionsH.jpg")} alt=""></img>
                    </div>
                </div>

                <div className="tab-content">
                    <div className="tabs-selection">
                        <button className={ toggleState === 1 ? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(1)}>
                        {t("loans_pages.housing_page.housing_tab.1.requeriments")}
                        </button>
                        <button className={toggleState === 2? "tab-button tab-selection-active" : "tab-button"} onClick={() => toggleTab(2)}>
                        {t("loans_pages.housing_page.housing_tab.2.conditions")}
                        </button>
                    </div>

                    <div className={toggleState === 1 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p> {t("loans_pages.housing_page.housing_tab.1.income")}</p>
                            </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.housing_page.housing_tab.1.stability")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>	{t("loans_pages.housing_page.housing_tab.1.ages")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>{t("loans_pages.housing_page.housing_tab.1.record")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p>
                            {t("loans_pages.housing_page.housing_tab.1.constancy")}</p>
                            
                        </div>
                       
                    </div>
                    <div className={toggleState === 2 ? "content-text  active-content-text" : "content-text"}>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p><b>{t("loans_pages.housing_page.housing_tab.2.term")}</b>
                                <br/>{t("loans_pages.housing_page.housing_tab.2.living_place")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p><b>{t("loans_pages.housing_page.housing_tab.2.warranty")}</b>
                            <br/>{t("loans_pages.housing_page.housing_tab.2.value")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p><b>{t("loans_pages.housing_page.housing_tab.2.insurance")}</b>
                            <br/>{t("loans_pages.housing_page.housing_tab.2.bills")}</p>
                        </div>
                        <div className="individual-text">
                            <p>&#10003;</p>
                            <p><b>{t("loans_pages.housing_page.housing_tab.2.commission")}</b>
                            <br/>{t("loans_pages.housing_page.housing_tab.2.amount")}</p>
                        </div>
                        <Link to="/accounts/form">
                            <div className="check_form-button">
                            <span>{t("loans_pages.personal_loan_page.apply_for")}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }else{
    <div><h1>El elemento que solicitaste no existe</h1></div>
  }
}

export { Tabs };
