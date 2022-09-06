import React, { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext';
import no_withdraw from '../../assets/img/accounts-icons/no_withdraw.png'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const WithdrawHistory = ({ accNum }) => {
    const { getAccountsHistory } = useDash();
    const [accountHistory, setAccountHistory] = useState([]);

    const [CharginIco, setCharginIco] = useState(true);

    setTimeout(() => {
        setCharginIco(false);
    }, 2500);

    useEffect(() => {
        (async () => {
            const res = await getAccountsHistory(localStorage.getItem('authToken'), accNum);
            setAccountHistory(res.data.data[1][0].Withdraws)
        })()
    }, []);

    return (
        <>
            {
                CharginIco === true ? 
                <>
                    <div className='flex justify-center items-center w-full h-full bg-white rounded-lg'><AiOutlineLoading3Quarters className='loading-icon animate-spin-custom h-[5rem] w-[5rem]' /></div>
                </>
                :
                <>
                    <div className='h-full flex flex-col justify-between text-center mx-auto'>
                        {
                            accountHistory.length !== 0 ?
                                accountHistory.map((el, i) => {
                                    return (

                                        <div className='flex flex-row w-[90%] h-[5rem] border-cover-2 rounded-lg mb-4 mx-auto'>
                                            <div className='w-[10%] h-full'>
                                                <div className='bg-[#D6D6D6] h-[40%] table mb-0 rounded-tl-lg'>
                                                    <span className='table-cell align-middle'>N°</span>
                                                </div>
                                                <div className='h-[60%] table mb-0'>
                                                    <span className='table-cell align-middle text-[1.3rem]'>{i + 1}</span>
                                                </div>
                                            </div>
                                            <div className='w-[45%] h-full border-left-division'>
                                                <div className='bg-[#D6D6D6] h-[40%] table mb-0'>
                                                    <span className='table-cell align-middle'>Monto</span>
                                                </div>
                                                <div className='h-[60%] table mb-0'>
                                                    <span className='table-cell align-middle'>${el.Amount}</span>
                                                </div>
                                            </div>
                                            <div className='w-[45%] h-full border-left-division'>
                                                <div className='bg-[#D6D6D6] h-[40%] table mb-0 rounded-tr-lg'>
                                                    <span className='table-cell align-middle'>Fecha de realización</span>
                                                </div>
                                                <div className='h-[60%] table mb-0'>
                                                    <span className='table-cell align-middle'>{new Date(el.Date).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className='my-auto h-full w-full bg-white rounded-xl flex flex-col items-center justify-center'>
                                    <img src={ no_withdraw } alt="" className='w-[200px] mb-3'/>
                                    <p className='text-[#606470] text-[1.2rem]'>Aún no hay historial de retiros realizados</p>
                                </div>
                        }
                    </div>
                </>
            }
        </>
    )
}
