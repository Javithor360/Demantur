// import { Link } from "react-router-dom";
import "../assets/scss/OfferLoans.scss";
const OfferL = require.context("../assets/img/Offer_Loan", true);

export const ActLoans = () => {
    return (
        <div className="flex flex-row justify-between w-full h-full bg-transparent">
            <div className="left-credits-container w-[49%] h-[100%] bg-white rounded-xl shadow-md flex flex-col items-center overflow-x-hidden overflow-y-auto py-4">
            <p className="text-[24px] text-[#323643] text-center p-2 mb-4">
                Créditos que te ofrecemos
            </p>
            {/* primer prestamo */}
                <div className="dash-credits-info w-[90%] rounded-xl relative flex flex-row items-center">
                    <div className="flex items-center justify-center h-full w-fit">
                        <img src={OfferL('./personal_loan.jpg')} alt='prestamo personal'
                        className="dash-left-credits-img rounded-md"/>
                    </div>
                    <div className="dash-credits-info-content">
                    <div className="content-text">
                    <p className="text-[1.375rem] text-[#606470]">Credito personal</p>
                        <p className="text-[0.875rem] text-[#606470]">
                            Te facilitamos los trámites para que consolides tus deudas o
                            realices tu proyectos con nuestro Crédito Personal.
                        </p>
                    </div>
                    <div className="flex items-center justify-center  text-center credit-info-btn">
                    <button class="text-center rounded-lg px-2 mb-2 text-lg  bg-[#323643] text-white hover:bg-slate-800 duration-300 h-[2.5rem]">
                        Aplicar
                    </button>
                    </div>
                </div>
            </div>
            {/* segundo prestamo */}
            <div className="dash-credits-info w-[90%] rounded-xl relative flex flex-row items-center">
                    <div className="flex items-center justify-center h-full w-fit">
                        <img src={OfferL('./business_loan.jpg')} alt='prestamo personal'
                        className="dash-left-credits-img rounded-md"/>
                    </div>
                    <div className="dash-credits-info-content">
                    <div className="content-text">
                    <p className="text-[1.375rem] text-[#606470]">Credito empresarial</p>
                        <p className="text-[0.875rem] text-[#606470]">
                        Te lo facilitamos con condiciones especiales para que consolides 
                        tus deudas o realices tus nuevos proyectos o mejores las condiciones de 
                        tu empresa o emprendimiento.
                        </p>
                    </div>
                    <div className="flex items-center justify-center  text-center credit-info-btn">
                    <button class="text-center rounded-lg px-2 mb-2 text-lg  bg-[#323643] text-white hover:bg-slate-800 duration-300 h-[2.5rem]">
                        Aplicar
                    </button>
                    </div>
                </div>
            </div>
            {/* Housing demanture */}
            <div className="dash-credits-info w-[90%] rounded-xl relative flex flex-row items-center">
                    <div className="flex items-center justify-center h-full w-fit">
                        <img src={OfferL('./House.jpg')} alt='prestamo personal'
                        className="dash-left-credits-img rounded-md"/>
                    </div>
                    <div className="dash-credits-info-content">
                    <div className="content-text">
                    <p className="text-[1.375rem] text-[#606470]">Housing Demantur</p>
                        <p className="text-[0.875rem] text-[#606470]">
                        Solicita los creditos que necesites para poder realizar la compra de tu vivienda nueva o usada en El Salvador.
                        </p>
                    </div>
                    <div className="flex items-center justify-center  text-center credit-info-btn">
                    <button class="text-center rounded-lg px-2 mb-2 text-lg  bg-[#323643] text-white hover:bg-slate-800 duration-300 h-[2.5rem]">
                        Aplicar
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

