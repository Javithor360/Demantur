import React, { useState } from 'react'
import { DepositsHistory } from './DepositsHistory';
import { TransfersHistory } from './TransfersHistory';
import { WithdrawHistory } from './WithdrawHistory';
import '../../../assets/scss/accounts.scss';

export const AccountsHistory = ({ setActive, historyAcc }) => {

    const [BoxHandler, setBoxhanlder] = useState(1);

    const renderBox = () => {
        switch (BoxHandler) {
            case 1:
                return <DepositsHistory accNum={historyAcc} />
            case 2:
                return <WithdrawHistory accNum={historyAcc} />
            case 3:
                return <TransfersHistory accNum={historyAcc} />
            default:
                return <DepositsHistory accNum={historyAcc} />;
        }
    }

    const closeButton = () => {
        try {
            setActive(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className={`w-[90%] mx-auto h-[45rem] overflow-y-auto overflow-x-hidden`}>
            <p className='text-gray-500 text-center text-[28px] m-0 p-0'>Historial de la cuenta</p>
            <div className='dash_acc-nav-line w-[40%] mx-auto'></div>
            <div className='flex w-[100%] bg-[#f7f7f7] p-2 h-[3rem] rounded-sm shadow-sm justify-center mb-3 mt-3'>
                <div className={`dash_acc-nav-type ${BoxHandler === 1 && `dash_acc-nav-type-active`}`} onClick={() => { setBoxhanlder(1) }}>
                    <span>Dépositos</span>
                </div>
                <div className={`dash_acc-nav-type ${BoxHandler === 2 && `dash_acc-nav-type-active`}`} onClick={() => { setBoxhanlder(2) }}>
                    <span>Retiros</span>
                </div>
                <div className={`dash_acc-nav-type ${BoxHandler === 3 && `dash_acc-nav-type-active`}`} onClick={() => { setBoxhanlder(3) }}>
                    <span>Transferencias</span>
                </div>
            </div>
            <section className='w-[1000px]'>
                {renderBox()}
            </section>
        </div>
    )
}
