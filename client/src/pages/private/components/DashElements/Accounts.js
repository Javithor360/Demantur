import { BsPiggyBank } from "react-icons/bs";
import { useDash } from "../../../../context/DashboardContext";
import { GiMoneyStack } from "react-icons/gi";
import { AccountsHistory } from './components/AccountsHistory';
import Modal from '../Modal';
import '../../assets/scss/accounts.scss';
import { useEffect, useState } from "react";

export const Accounts = () => {
    const { Info, SavingAccounts } = useDash();

    const [historyAcc, setHistoryAcc] = useState('');

    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    useEffect(() => {
        if (active) {
            document.body.style.overflowY = "hidden";
        }
    }, [active])

    const handleButton = async (e) => {
        e.preventDefault();

        try {
            toggle();
            setHistoryAcc(e.target.value);
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <div className="w-[100%] flex justify-between h-[100%]  lg:inline-block">
                <div className=' rounded-[0.72rem]  p-[2rem] bg-white w-[99.8%] mx-[.11rem] h-[100%] shadow-lg'>
                    <h2 className='text-gray-500 text-center'>
                        Cuentas
                    </h2>
                    <div className="dash_acc-cards-container">
                        {
                            SavingAccounts.length !== 0 ?
                                SavingAccounts.map((el, i) => {
                                    return (
                                        <div key={i} className="dash_acc-card dash_acc-setter">
                                            <header className="savings">
                                                <div className="dash_acc-icon-cont">
                                                    <BsPiggyBank className="dash_acc-icon" />
                                                </div>
                                            </header>

                                            <h3>Cuenta de ahorros</h3>
                                            <div className="dash_acc-desc">
                                                <p className={el.activated === true ? "text-green-500" : "text-red-500"}>{el.activated === true ? "Activa" : "Inhabilitada"}</p>
                                                <p className="dash_acc-desc-text">N° cuenta: {el.accountNumber}</p>
                                                <p className="dash_acc-desc-text">Saldo: ${el.balance.toLocaleString()}</p>
                                                <p className="dash_acc-desc-text">Intereses: {el.interest}%</p>
                                                <p className="dash_acc-desc-text">Fecha de creación: {new Date(el.createdAt).toLocaleDateString()}</p>
                                                <button value={el.accountNumber} onClick={handleButton} className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">Historial</button>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div>Hola xd</div>
                        }
                    </div>
                    <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">Crear Cuenta</button>
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
                    <div className='h-[100%] w-[100%] flex items-center'>
                        {toggle &&
                            <Modal active={active} toggle={toggle} onRequestClose={toggle}>
                                <AccountsHistory setActive={setActive} historyAcc={historyAcc} />
                            </Modal>
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

