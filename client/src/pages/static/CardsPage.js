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

//images
const CreditCardsImages = require.context('./assets/img/credit_cards', true)

export const CardsPage = () => {
    return (
        <>
            <Navbar />
            <div className='cards-banner-container'>
                <div className='cards-banner-content'>
                    <FaRegCreditCard className='ccard-icon' />
                    <h1>Tarjetas</h1>
                    <p>Encuentra la mejor solución que se adapte a tus necesidades</p>
                </div>
            </div>

            <div className="credit-card-tittle">
                <p>Tarjetas de crédito</p>
                <hr />
            </div>

            <div className='cards-flexbox'>
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image'>
                            <img src={CreditCardsImages('./bank_cards_images/classicCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Classic  <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                Recibe 500 puntos de bienvenida acumulables
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                Obten cuotas de hasta 36 meses
                            </p>
                            <p>
                                <span><TbShoppingCartDiscount /></span>
                                Descuentos en comercios seleccionados
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                Tasa de interes inicial de hasta un 48%
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/classic" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image'>
                            <img src={CreditCardsImages('./bank_cards_images/platinumCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Platinum <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                Recibe 5,000 puntos de bienvenida acumulables
                            </p>
                            <p>
                                <span><FaStar /></span>
                                Gana 1 punto por cada dolar gastado en compras
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                Cuotas con una tasa de interés del 32%
                            </p>
                            <p>
                                <span><TbShoppingCartDiscount /></span>
                                Descuentos y beneficios especiales en comercios seleccionados
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/platinum" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image'>
                            <img src={CreditCardsImages('./bank_cards_images/goldCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Demantur Gold  <span className='registered-icon'>&reg;</span> </p>
                            <p>Visa &reg;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                Recibe 10,000 puntos de bienvenida acumulables
                            </p>
                            <p>
                                <span><FaStar /></span>
                                Gana 1 punto por cada dolar gastado en compras
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                Cuotas con una tasa de interés desde el 26%
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                Cobertura de hasta 100,000 dólares
                            </p>
                            <p>
                                <span><IoAirplaneOutline /></span>
                                Canjea tus puntos por viajes aéreos
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/gold" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image'>
                            <img src={CreditCardsImages('./bank_cards_images/blackCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Mastercard Black  <span className='registered-icon'>&reg;</span> </p>
                            <p>Mastercard &trade;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                Recibe 80,000 puntos de bienvenida acumulables
                            </p>
                            <p>
                                <span><FaStar /></span>
                                Gana 2 puntos por cada dolar gastado en compras
                            </p>
                            <p>
                                <span><BsCardChecklist /></span>
                                Cuotas con una tasa de interés desde el 12%
                            </p>
                            <p>
                                <span><MdAttachMoney /></span>
                                Extrafinanciamiento y cobertura de hasta $230,000
                            </p>
                            <p>
                                <span><IoAirplaneOutline /></span>
                                Canjea tus puntos por viajes aéreos
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/black" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="credit-card-tittle">
                <p>Tarjetas de débito</p>
                <hr />
            </div>

            <div className="cards-flexbox">
                <div className='individual-card-container'>
                    <div className='card-information'>
                        <div className='card-image'>
                            <img src={CreditCardsImages('./bank_cards_images/debitCard.png')} alt='' />
                        </div>
                        <div className='card-tittle'>
                            <p>Débito Clásica {/*<span className='registered-icon'>&reg;</span>*/} </p>
                            <p>Mastercard &trade;</p>
                        </div>
                        <div className='card-details'>
                            <p>
                                <span><FaRegStar /></span>
                                Obtén puntos por tus compras
                            </p>
                            <p>
                                <span><FaRegMoneyBillAlt /></span>
                                Retira efectivo cuando quieras
                            </p>
                            <p>
                                <span><AiOutlineLock /></span>
                                Seguridad con tus compras
                            </p>
                            <p>
                                <span><GrAtm /></span>
                                Utiliza los kioskos para pagar tus recibos
                            </p>
                        </div>
                        <div className='card-button'>
                            <Link to="/cards/debito" className="more-details-bt">
                                <span >Más detalles</span>
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

