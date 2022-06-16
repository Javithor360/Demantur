//scss
import "./assets/scss/CardsPage_main.scss";

//components
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

//icons
import { FaRegCreditCard, FaAngleRight, FaRegStar, FaStar } from 'react-icons/fa'
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { BsCardChecklist } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { IoAirplaneOutline } from 'react-icons/io5';

//images
import classicCard from "./assets/img/credit_cards/classicCard.png";
import goldCard from "./assets/img/credit_cards/goldCard.png";
import platinumCard from "./assets/img/credit_cards/platinumCard.png";

//hooks
import { Link } from "react-router-dom";

export const CardsPage = () =>{
    return(
        <>
            <Navbar />
            
            <div className='cards-banner-container'>
                <div className='cards-banner-content'>
                    <FaRegCreditCard className='ccard-icon'/>
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
                            <img src={classicCard} alt='' />
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
                                <span><MdAttachMoney/></span>
                                Tasa de interes de hasta un 30%
                            </p>
                        </div>

                        <div className='card-button'>
                            <Link to="/cards/classic" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon'/>
                            </Link>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>

                        <div className='card-image'>
                            <img src={platinumCard} alt='' />
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
                                Obten cuotas de hasta 48 meses sin intereses
                            </p>
                            <p>
                                <span><TbShoppingCartDiscount /></span>
                                Descuentos y beneficios especiales en comercios seleccionados
                            </p> 
                        </div>

                        <div className='card-button'>
                            <Link to="/cards/platinum" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon'/>
                            </Link>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='individual-card-container'>
                    <div className='card-information'>

                        <div className='card-image'>
                            <img src={goldCard} alt='' />
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
                            Obten cuotas ajustables sin intereses
                        </p>
                        <p>
                            <span><MdAttachMoney /></span>
                            Cobertura de hasta 100,000 dólares
                        </p>
                        <p>
                            <span><IoAirplaneOutline /></span>
                            Canjea tus puntos por viajes aereos
                        </p> 
                        </div>

                        <div className='card-button'>
                            <Link to="/cards/gold" className="more-details-bt">
                                <span >Más detalles</span>
                                <FaAngleRight className='more-details-bt-icon'/>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
           
            <Footer />
        
        </>
    );
};

