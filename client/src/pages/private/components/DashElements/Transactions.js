import React, { useRef } from 'react'
import '../assets/scss/Transactions_main.scss'
import './TransactionsComponents/TransactionMessage'
import photoExample from '../assets/img/contact-user-profile.png'
import no_contacts_icon from './TransactionsComponents/assets/icons/contacts_icon.png'
import select_contact_icon from './TransactionsComponents/assets/icons/select_contact_icon.png'
import no_transactions_icon from './TransactionsComponents/assets/icons/no_transactions_icon.png'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { ContactTransactionCard as ContactCard, TransactionMessage } from './TransactionsComponents/'
import { useDash } from '../../../../context/DashboardContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'
import Cleave from 'cleave.js/react'
// import { io } from 'socket.io-client'

export const Transactions = ({ OnlineUsers }) => {
    const [CharginComp, setCharginComp] = useState(true);
    const [AllTransfers, setAllTransfers] = useState([]);
    const [MyDui, setMyDui] = useState('');
    const [MyName, setMyName] = useState('');

    const [ArrivalMessage, setArrivalMessage] = useState(null);
    const [MontoTransfer, setMontoTransfer] = useState('');
    const [NumberAccount, setNumberAccount] = useState('');

    const [FormError, setFormError] = useState(false);

    const scrollRef = useRef();

    const { Contacts, CurrentChat, setCurrentChat, GlobalInfo, TransactionsArr, setTransactionsArr, MyTransfers, HimTranfers, Info, setMyTransfers, setHimTranfers, DoATransfer, socket, } = useDash()

    useEffect(() => {
        setFormError(false);
        socket.on('getTransfer', data => {
            let theMessage = data.transfer
            theMessage.createdAt = Date.now()
            setArrivalMessage({ SenderDui: data.SenderDui, transfer: theMessage })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (ArrivalMessage && ArrivalMessage.SenderDui === CurrentChat.Dui) {
            setAllTransfers((prev) => [...prev, ArrivalMessage.transfer])
        }
    }, [ArrivalMessage, CurrentChat]);

    useEffect(() => {
        setCurrentChat(null);
        setTimeout(() => {
            setCharginComp(false)
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setMyDui(Info.Dui)
        let Name = Info.FirstName.split(' ');
        let LastName = Info.LastName.split(' ');
        setMyName(`${Name[0]} ${LastName[0]}`)
    }, [Info]);

    useEffect(() => {
        setTransactionsArr(GlobalInfo.TransfersHistory);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GlobalInfo])

    useEffect(() => {
        let TwoArrays = MyTransfers.concat(HimTranfers);

        TwoArrays.sort((a, b) => {
            let D_A = new Date(a.createdAt).getTime()
            let D_B = new Date(b.createdAt).getTime()

            if (D_A < D_B) {
                return -1
            } else {
                return 1
            }
        })

        setAllTransfers(TwoArrays);
    }, [MyTransfers, HimTranfers]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [AllTransfers])


    const HandlerTransSubmit = async (e) => {
        e.preventDefault()
        // eslint-disable-next-line eqeqeq
        if (!MontoTransfer || !NumberAccount || MontoTransfer == 0) {
            setFormError(true);
        } else {
            setFormError(false)
            const transaction = {
                SenderDui: MyDui,
                ReciverDui: CurrentChat.Dui,
                Amount: MontoTransfer,
                AccountN: NumberAccount.split(' ')[1],
                Type: 'NormalTransfer',
                createdAt: new Date(),
            }

            socket.emit('DoingTransfer', {
                SenderDui: MyDui,
                ReceiverDui: CurrentChat.Dui,
                transfer: {
                    SenderDui: MyDui,
                    ReciverDui: CurrentChat.Dui,
                    Amount: transaction.Amount,
                    AccountN: transaction.AccountN,
                    createdAt: null,
                    Type: 'NormalTransfer',
                },
            })

            try {
                const res = await DoATransfer(localStorage.getItem('authToken'), transaction);

                GlobalInfo.TransfersHistory.Made.push(transaction)

                setAllTransfers([...AllTransfers, res.data.data])
            } catch (error) {
                console.log(error);
            }
        }
    }

    const FormTransfer = () => {
        return (
            <div className='bottom-tools-bar h-[15%] w-full rounded-br-xl flex items-center'>
                <form onSubmit={HandlerTransSubmit} className='w-full h-full flex justify-between items-center py-2 px-4'>
                    <div className='w-[70%] h-[4rem] flex flex-row'>
                        <div className='bg-[#D6D6D6] h-[3.9rem] w-[50%] rounded-xl flex flex-row'>
                            <Cleave type='text' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} className='w-[60%] h-full bg-transparent border-none outline-none pl-5' placeholder='Ingresar Monto...' onChange={(e) => setMontoTransfer(e.target.value)} value={MontoTransfer} autoComplete='off' />
                            <div className='vl2 w-[1%]'>
                                <hr />
                            </div>
                            <div className='w-[39%] flex flex-col items-center justify-center'>
                                <p className='m-0 text-center'>Saldo:</p>
                                <p className='m-0 text-center text-[1.2rem] text-[#27AE60]'>$1020.00</p>
                            </div>
                        </div>
                        <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-fit rounded-xl ml-5 px-2'>
                            <select name="" id="" className='acc-select outline-none border-none lol3 w-full h-full m-auto block bg-[#D6D6D6] cursor-pointer' onChange={(e) => setNumberAccount(e.target.value)} value={NumberAccount} >
                                <option>Selecionar Cuenta...</option>
                                <option>Nº 0001112223</option>
                                <option>Nº 0001112223</option>
                            </select>
                        </div>

                    </div>
                    <div className='w-[20%] h-full flex justify-end items-center'>
                        <button type='submit' className={`h-[3rem] w-[8rem] outline-none rounded-md border-none ${FormError ? 'bg-[#C90000]' : 'bg-[#323643]'} text-white`} >
                            Transferir
                        </button>
                    </div>
                </form>
            </div>
        )
    }


    return (
        <div className='flex flex-col w-full h-full bg-white rounded-xl shadow-md'>
            {
                CharginComp === true ?
                    <div className='flex justify-center items-center w-100 h-100'>
                        <IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' />
                    </div>
                    :
                    <>
                        {
                            Contacts.length !== 0 ?
                                <>
                                    <div className='flex flex-row h-[100%]'>
                                        <div className='contacts-area  w-[25%] h-full rounded-tl-xl flex flex-col items-center'>
                                            <div className='contacts-search-container w-[90%] h-[10%] rounded-tl-xl mt-[2rem] mb-3'>
                                                <h3 className='text-center'>Contactos</h3>
                                                <form className='searchbox w-full'>
                                                    <div role="search" className='searchbox-wrapper flex w-full'>
                                                        <button type="submit" title="" className='sbx-submit-btn'>
                                                            <AiOutlineSearch className='sbx-submit-btn-icon' />
                                                        </button>
                                                        <input type="search" name="search" placeholder="Buscar..." autoComplete="off" className='sbx-input' />
                                                        <button type="reset" title="" className="sbx-reset-btn">
                                                            <AiOutlineClose />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='contacts-names w-full h-[80%] rounded-bl-xl flex justify-center items-center pt-4'>
                                                <div className='user-contacts-left-bar w-[90%] h-[100%] overflow-x-hidden flex flex-col items-center'>
                                                    {
                                                        Contacts.map((Contact, index) => {
                                                            return (
                                                                <div onClick={() => {
                                                                    setCurrentChat(Contact)
                                                                    setMyTransfers(TransactionsArr.Made.filter((Transaction) => Transaction.ReciverDui === Contact.Dui));
                                                                    setHimTranfers(TransactionsArr.Received.filter((Transaction) => Transaction.SenderDui === Contact.Dui));
                                                                }}>
                                                                    <ContactCard key={index} Contact={Contact} TransactionsArr={TransactionsArr} OnlineUsers={OnlineUsers} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[75%] h-full rounded-r-xl flex flex-col'>

                                            {
                                                CurrentChat !== null ?
                                                    <>
                                                        <div className='header-contact-name h-[4.5rem] w-full rounded-tr-xl flex flex-row items-center p-2'>
                                                            <div className="header-contact-name-img">
                                                                <img src={photoExample} alt="" className="h-full w-full" />
                                                            </div>
                                                            <span className="contact-username text-[#323643] ml-3 my-0">{CurrentChat.Name}</span>
                                                        </div>
                                                        <div className='transactions-msg-body w-full h-full flex flex-col overflow-x-hidden overflow-y-auto px-4 py-2'>

                                                            {
                                                                AllTransfers.length !== 0 ?
                                                                    AllTransfers.map((tr, index) => (
                                                                        <div ref={scrollRef}>
                                                                            <TransactionMessage own={tr.SenderDui === MyDui} Transf={tr} CurrentChat={CurrentChat} MyName={MyName} key={index} />
                                                                        </div>
                                                                    ))
                                                                    :
                                                                    <div className='flex flex-col items-center justify-center w-100 h-100'>
                                                                        <img className='w-[180px] mb-3' src={no_transactions_icon} alt="" />
                                                                        <p className='text-[#606470] text-[1.125rem]'>No hay transferencias realizadas</p>
                                                                    </div>
                                                            }

                                                        </div>
                                                        {FormTransfer()}
                                                    </>
                                                    :
                                                    <div className='flex flex-col justify-center items-center h-[100%]'>
                                                        <img className='w-[180px] mb-3' src={select_contact_icon} alt="" />
                                                        <p className='text-[#606470] text-[1.125rem]'>Seleccione un contacto para transferir</p>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </>
                                :
                                <div className='flex flex-col justify-center items-center h-[100%]'>
                                    <img className='w-[270px] mb-3' src={no_contacts_icon} alt="" />
                                    <p className='text-[#606470] text-[1.25rem]'>No tiene contactos agregados</p>
                                </div>

                        }
                    </>
            }
        </div>
    )
}
