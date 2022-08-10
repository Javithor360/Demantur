//scss
import "./assets/scss/CardsPage_main.scss";

//components
import { Navbar, Footer } from "../../components/";


//icons
import { FaRegCreditCard, FaAngleRight, FaRegStar, FaStar, FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { BsCardChecklist } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { IoAirplaneOutline } from 'react-icons/io5';
import { AiOutlineLock } from 'react-icons/ai'
import { GrAtm } from 'react-icons/gr';

//hooks
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

//images
const CreditCardsImages = require.context('./assets/img/credit_cards', true)


export const CardsPage = () => {
    const {t}= useTranslation();
    return (
        <>
            <Navbar />
            <div className='cards-banner-container'>
                <div className='cards-banner-content'>
                    <FaRegCreditCard className='ccard-icon' />
                    <h1>{t("cards_page.tittle")}</h1>
                    <p>{t("cards_page.sub-tittle")}</p>
                </div>
            </div>

            <div className="credit-card-tittle">
                <p>{t("cards_page.tittle2")}</p>
                <hr />
            </div>

            <div className='cards-flexbox'>
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image classicCard'>
                            <img src={CreditCardsImages('./bank_cards_images/classicCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Classic  <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                {t("cards_page.1.desc1")}
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                {t("cards_page.1.desc2")}
                            </p>
                            <p>
                                <span><TbShoppingCartDiscount /></span>
                                {t("cards_page.1.desc3")}
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                {t("cards_page.1.desc4")}
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/classic" className="more-details-bt">
                                <span>{t("cards_page.button")}</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image platinumCard'>
                            <img src={CreditCardsImages('./bank_cards_images/platinumCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Platinum <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                {t("cards_page.2.desc1")}
                            </p>
                            <p>
                                <span><FaStar /></span>
                                {t("cards_page.2.desc2")}
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                {t("cards_page.2.desc3")}
                            </p>
                            <p>
                                <span><TbShoppingCartDiscount /></span>
                                {t("cards_page.2.desc4")}
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/platinum" className="more-details-bt">
                                <span >{t("cards_page.button")}</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image goldCard'>
                            <img src={CreditCardsImages('./bank_cards_images/goldCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Gold  <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                {t("cards_page.3.desc1")}
                            </p>
                            <p>
                                <span><FaStar /></span>
                                {t("cards_page.3.desc2")}
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                {t("cards_page.3.desc3")}
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                {t("cards_page.3.desc4")}
                            </p>
                            <p>
                                <span><IoAirplaneOutline /></span>
                                {t("cards_page.3.desc5")}
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/gold" className="more-details-bt">
                                <span >{t("cards_page.button")}</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image blackCard'>
                            <img src={CreditCardsImages('./bank_cards_images/blackCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Mastercard Black  <span className='registered-icon'>&reg;</span> </p>
                            <p>Mastercard &trade;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                {t("cards_page.4.desc1")}
                            </p>
                            <p>
                                <span><FaStar /></span>
                                {t("cards_page.4.desc1")}
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                {t("cards_page.4.desc2")}
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                {t("cards_page.4.desc3")}
                            </p>
                            <p>
                                <span><IoAirplaneOutline /></span>
                                {t("cards_page.4.desc4")}
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/black" className="more-details-bt">
                                <span >{t("cards_page.button")}</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="credit-card-tittle">
                <p>{t("cards_page.tittle3")}</p>
                <hr />
            </div>

            <div className="cards-flexbox">
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image debitCard'>
                            <img src={CreditCardsImages('./bank_cards_images/debitCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p className="tittleDebit">{t("cards_page.tittle4")} {/*<span className='registered-icon'>&reg;</span>*/} </p>
                            <p>Mastercard &trade;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                {t("cards_page.5.desc1")}
                            </p>
                            <p>
                                <span><FaRegMoneyBillAlt /></span>
                                {t("cards_page.5.desc2")}
                            </p>
                            <p>
                                <span><AiOutlineLock /></span>
                                {t("cards_page.5.desc3")}
                            </p>
                            <p>
                                <span><GrAtm /></span>
                                {t("cards_page.5.desc4")}
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/debito" className="more-details-bt">
                                <span >{t("cards_page.button")}</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

