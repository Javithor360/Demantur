import { Link } from "react-router-dom";
import { BsPiggyBank } from "react-icons/bs";
import { useDash } from "../../../../context/DashboardContext";
import { GiMoneyStack } from "react-icons/gi";
import '../../assets/scss/accounts.scss';

export const Accounts = () => {
    const { Info, SavingAccounts } = useDash();

    const cardSetter = () => {
        for (let index = 0; index < SavingAccounts.length; index++) {
            <div>a</div>
            
        }
    }

    return (
        <>
            <div className="w-[100%] flex justify-between h-[100%]  lg:inline-block">
                <div className=' rounded-[0.72rem]  p-[2rem] bg-white w-[99.8%] mx-[.11rem] h-[100%] shadow-lg'>
                    <h2 className='text-gray-500 text-center'>
                        Cuentas
                    </h2>
                    <div className="dash_cards-container">
                        {cardSetter()}
                    </div>
                    {/* <div className=" p-[2.5rem] px-[11rem] flex gap-3 my-1">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex py-20 ">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b w-[29rem] lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg transform hover:scale-105 duration-500 ease-in-out ">
                                <div className="mb-8">
                                    <p className="text-gray-900 font-bold text-xl mb-2 items-center text-center">
                                        <BsPiggyBank className="mr-[2rem] h-8 w-8" />
                                        Cuenta de ahorro
                                    </p>
                                    <div className="border-solid border-slate-400" />
                                    <p className="text-gray-800 text-base grid">
                                        <div className="py-3">N° de Cuenta: 81204</div>
                                        <div className="py-3">Saldo:  $9999</div>
                                        <div className="py-2">E-mail:{`${Info.FirstName} ${Info.LastName}`}</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm w-full lg:max-w-full lg:flex py-20 px-[8rem] ">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b w-[29rem] lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg transform hover:scale-105 duration-500 ease-in-out ">
                                <div className="mb-8">
                                    <p className="text-gray-900 font-bold text-xl mb-2 items-center text-center">
                                        <GiMoneyStack className="mr-[2rem] h-8 w-8" />
                                        Cuenta de corriente
                                    </p>
                                    <div className="border-solid border-slate-400" />
                                    <p className="text-gray-800 text-base grid">
                                        <div className="py-3">N° de Cuenta: 81206</div>
                                        <div className="py-3">Saldo:  $9989</div>
                                        <div className="py-2">E-mail: {`${Info.FirstName} ${Info.LastName}`}</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[6rem] flex justify-center text-2xl space-x-8">
                        <div className="bg-slate-200 hover:bg-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500">
                            <Link to="#" className="text-slate-600">
                                <span> Crear Cuenta</span>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

