//hooks
import { Link } from "react-router-dom";

const OfferL = require.context("../assets/img/Offer_Loan", true);

export const ActLoans = () => {
    return (
        <>
        <div className=" h-100 flex justify-between h-[100%] ">
            <div className=' rounded-[0.72rem]  p-[1rem] bg-white w-[66%] mx-[-3.5rem] h-[100%] shadow-lg'>
                <h2 className='text-gray-500 text-center '>Préstamos</h2>
                {/* personal */}

                <div className=" bg-white rounded-lg shadow-xl md:flex mt-[4.5rem] min-w-full max-w-md mx-auto  transform hover:scale-105 duration-500 ease-in-out ">
                    <img src={OfferL("./personal_loan.jpg")} alt="personal" className="md:w-2/4 rounded-t-lg md:rounded-l-lg md:rounded-t-none max-w-full h-auto"/>
                    <div className="p-6 ">
                        <h1 className=" md:text-[1.2rem] mb-2 text-gray-700 mx-[8rem] mt-[-.6rem] text-center">
                            Crédito personal
                        </h1>
                            <span className=" text-sm text-black text-justify flex">
                                Disfruta tu nueva vida con las mejores condiciones. Facilitamos los trámites para 
                                que consolides tus deudas o realices tu proyectos con nuestro Crédito Personal.
                            </span>
                    </div>
                    <div className="bg-black hover:bg-gray-800 py-3 px-8 rounded-lg text-gray- border-b-4 transition duration-300 m-5 h-[3rem] mt-[6rem] flex" >
                    <Link className="text-white mt-[-.4rem]" to="/loans/PersonalLoan">
                        <span className="mt-[-3rem]">Aplicar</span>
                    </Link>
                    </div>
                </div>

                {/* Business loan */}
                
                <div className=" bg-white rounded-lg shadow-xl md:flex mt-[4.5rem] min-w-full max-w-full Flex transform hover:scale-105 duration-500 ease-in-out ">
                    <img src={OfferL("./business_loan.jpg")} alt="personal" className="md:w-2/4 rounded-t-lg md:rounded-l-lg md:rounded-t-none max-w-full h-auto "/>
                    <div className="p-6 ">
                        <h1 className=" md:text-[1.2rem] mb-2 text-gray-700 mx-[8rem] mt-[-.6rem] text-center">
                            Crédito Empresarial
                        </h1>
                            <span className=" text-sm text-black text-justify flex">
                            Si trabajas en tu propio negocio, este este préstamo es para ti, 
                            realiza tus nuevos proyectos, pagas deudas pendientes o  mejores las condiciones 
                            de tu empresa o emprendimiento.
                            </span>
                    </div>
                    <div className="bg-black hover:bg-gray-800 py-3 px-8 rounded-lg text-gray- border-b-4 transition duration-300 m-5 h-[3rem] mt-[6rem] flex" >
                    <Link className="text-white mt-[-.4rem]" to="/loans/PersonalLoan">
                        <span className="mt-[-3rem]">Aplicar</span>
                    </Link>
                    </div>
                </div>

                {/* Housing demantue */}
                <div className=" bg-white rounded-lg shadow-xl md:flex mt-[4.5rem] min-w-full max-w-full Flex transform hover:scale-105 duration-500 ease-in-out">
                    <img src={OfferL("./House.jpg")} alt="personal" className="md:w-2/4 rounded-t-lg md:rounded-l-lg md:rounded-t-none max-w-full h-auto "/>
                    <div className="p-6 ">
                        <h1 className=" md:text-[1.2rem] mb-2 text-gray-700 mx-[8rem] mt-[-.6rem] text-center">
                            Housing Demantur
                        </h1>
                            <span className=" text-sm text-black text-justify flex">
                                Disfruta tu nueva vida con las mejores condiciones. Facilitamos los trámites para 
                                que consolides tus deudas o realices tu proyectos con nuestro Crédito Personal.
                            </span>
                    </div>
                    <div className="bg-black hover:bg-gray-700 py-3 px-8 rounded-lg text-gray- border-b-4 transition duration-300 m-5 h-[3rem] mt-[6rem] flex" >
                    <Link className="text-white mt-[-.4rem]" to="/loans/PersonalLoan">
                        <span className="mt-[-3rem]">Aplicar</span>
                    </Link>
                    </div>
                </div>

                {/* prestamos activos */}
            </div>
            <div className='p-[1rem] py-4 bg-white rounded-[0.75rem] shadow-lg shadow-gray-900 w-[36%] h-[75%] mt-[5rem] '>
                <h2 className='text-gray-500 text-center'>
                    Préstamos activos 
                </h2>   
                <div className="py-4 md:py-11">
                    <div className="container px-3 mx-auto">
                    <div className="px-2 md:w-1/3 mt-6 md:mt-[-.5em] h-[30rem]">
                        <div className="text-center w-[28.5rem] p-4 md:p-6 max-w-lg mx-auto border-2 border-solid border-black rounded md:h-full items-center content-center ">
                            <div className="text-justify w-[25rem] p-4 md:p-6 max-w-lg mx-auto border-2  rounded md:h-full items-center content-center ">
                                <p>
                                    <b>Tipo de Préstamo:</b>    Personal
                                </p>
                                <p className="mt-5">
                                    <b>Monto a pagar:</b>       $ 5000
                                </p>
                                <p className="mt-5">
                                    <b>Monto restante:</b>      $ 1250
                                </p>
                                <p className="mt-5">
                                    <b>próximo pago:</b>        30/07/2022
                                </p>
                                <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-[1rem] items-center content-center mt-24 ml-20">
                                    Ejecutar pago
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

