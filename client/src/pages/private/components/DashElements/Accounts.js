import { BsPiggyBank } from "react-icons/bs";
import { useDash } from "../../../../context/DashboardContext";
import { BsArrowLeft } from 'react-icons/bs';
import { AccountsHistory } from './components/AccountsHistory';
import Modal from '../Modal';
import '../../assets/scss/accounts.scss';
import { useEffect, useState } from "react";
import { CreateSavingAccForm } from "../CreateSavingAccForm";
import { ScrollToTop } from "../../../../components/ScrollToTop";

export const Accounts = () => {
    const { Info, SavingAccounts } = useDash();

    const [historyAcc, setHistoryAcc] = useState('');

    const [active, setActive] = useState(false);
    const [DisplayDetails, setDisplayDetails] = useState(false);

    const isModal = false;

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
            {
                DisplayDetails === false ?
                    <div className="w-[100%] h-[100%]  lg:inline-block items">
                        <div className=' rounded-[0.72rem]  p-[2rem] bg-white w-[99.8%] mx-[.11rem] h-[100%] shadow-lg overflow-y-auto overflow-x-hidden flex flex-col'>
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
                                        <div>
                                            {/* AQUÍ SE PONE NO SÉ, ALGO QUE  */}
                                        </div>
                                }
                            </div>
                            {
                                SavingAccounts.length < 3 &&
                                <button onClick={(e) => { e.preventDefault(); setDisplayDetails(true) }} className="max-w-fit px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white">Crear Cuenta</button>
                            }
                            {toggle &&
                                <Modal active={active} toggle={toggle} onRequestClose={toggle}>
                                    <AccountsHistory setActive={setActive} historyAcc={historyAcc} />
                                </Modal>
                            }
                        </div>
                    </div>
                    :
                    <div className="w-[100%] flex justify-between h-[100%] lg:inline-block">
                        <ScrollToTop />
                        <div className='rounded-[0.72rem] bg-white w-[100%] h-[100%] shadow-lg overflow-y-auto overflow-x-hidden flex justify-center'>
                            <CreateSavingAccForm isModal={isModal} setDisplay={setDisplayDetails} />
                        </div>
                    </div>
            }
        </>
    );
};

