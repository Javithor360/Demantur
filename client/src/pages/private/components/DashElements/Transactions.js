import React, { useRef } from 'react'
import '../assets/scss/Transactions_main.scss'
import './TransactionsComponents/TransactionMessage'
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
import Modal from '../Modal';
import { ModalTransaction } from './TransactionsComponents/ModalTransaction'
// import { io } from 'socket.io-client'
import '../../assets/scss/DropdownTr.scss'
import { IoMdArrowDropdown as ArrowDown } from 'react-icons/io'

// Translation
import { useTranslation } from "react-i18next";
// import { DashboardNormalUser } from '../../DashboardNormalUser'

export const Transactions = ({ OnlineUsers }) => {
    const { t } = useTranslation();
    const [CharginComp, setCharginComp] = useState(true);
    const [AllTransfers, setAllTransfers] = useState([]);
    const [MyDui, setMyDui] = useState('');
    const [MyName, setMyName] = useState('');
    const [Saldo, setSaldo] = useState(null);

    const [activeModal, setActiveModal] = useState(false);

    const [ArrivalMessage, setArrivalMessage] = useState(null);
    const [MontoTransfer, setMontoTransfer] = useState(null);
    const [NumberAccount, setNumberAccount] = useState('');
    const [HimNumberAcc, setHimNumberAcc] = useState('')


    const [FormError, setFormError] = useState(false);
    const [ModalValidate, setModalValidate] = useState(false);
    const [InputSearch, setInputSearch] = useState('');
    const [ContactsTS, SetContactsTS] = useState([]);
    const [EveryAccount, setEveryAccount] = useState(null);
    const [CurrentAccs, setCurrentAccs] = useState(null);

    const [IsSelect, setIsSelect] = useState(false);
    const [IsSelect2, setIsSelect2] = useState(false);

    const scrollRef = useRef();

    const { Contacts, CurrentChat, setCurrentChat, GlobalInfo, TransactionsArr, setTransactionsArr, MyTransfers, HimTranfers, Info, setMyTransfers, setHimTranfers, DoATransfer, socket, getGlobalInfo, SavingAccounts, setSavingAccounts, setClientBalance, getEveryAcc } = useDash()

    const toggle = () => {
        setActiveModal(!activeModal)
    }

    useEffect(() => {
        console.log(CurrentAccs);
    }, [CurrentAccs]);

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflowY = 'hidden'
        }
    }, [activeModal])

    useEffect(() => {
        socket.on('getTransfer', data => {
            setArrivalMessage(null);
            let theMessage = data.transfer
            theMessage.createdAt = Date.now()

            // === === === === === === ===
            setArrivalMessage({ SenderDui: data.SenderDui, transfer: theMessage })

            // === === === === === === ===

            if (TransactionsArr.length !== 0) {
                let newTransArr = TransactionsArr;
                newTransArr.Received.push(theMessage);
                setTransactionsArr(newTransArr);
            }

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [TransactionsArr]);

    useEffect(() => {
        if (ArrivalMessage && CurrentChat?.Dui === ArrivalMessage.SenderDui) {
            setAllTransfers((prev) => [...prev, ArrivalMessage.transfer])
            setClientBalance(prev => (parseFloat(prev) + parseFloat(ArrivalMessage.transfer.Amount)).toFixed(2))
            let auxAccounts = SavingAccounts;
            auxAccounts.forEach(element => {
                // eslint-disable-next-line eqeqeq
                if (element.accountNumber == ArrivalMessage.transfer.AccountReceiver) {
                    element.balance = (parseFloat(element.balance) + parseFloat(ArrivalMessage.transfer.Amount)).toFixed(2);
                }
                setSavingAccounts(auxAccounts);
            });
            setMontoTransfer('');
            setNumberAccount('');
            setSaldo(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ArrivalMessage, CurrentChat]);

    useEffect(() => {
        getGlobalInfo(localStorage.getItem('authToken'));
        setFormError(false);
        setCurrentChat(null);
        setSaldo(null);
        SetContactsTS(Contacts);
        (async () => {
            const res = await getEveryAcc(localStorage.getItem('authToken'))
            setEveryAccount(res.data.data);
        })()
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


    useEffect(() => {
        (async () => {
            if (ModalValidate) {
                setModalValidate(false)
                const transaction = {
                    SenderDui: MyDui,
                    ReciverDui: CurrentChat.Dui,
                    Amount: MontoTransfer,
                    AccountN: NumberAccount,
                    AccountReceiver: HimNumberAcc,
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
                        AccountReceiver: HimNumberAcc,
                        createdAt: null,
                        Type: 'NormalTransfer',
                    },
                })


                let auxAccounts = SavingAccounts;
                auxAccounts.forEach(element => {
                    // eslint-disable-next-line eqeqeq
                    if (element.accountNumber == transaction.AccountN) {
                        element.balance = (parseFloat(element.balance) - parseFloat(transaction.Amount)).toFixed(2);
                    }
                    setSavingAccounts(auxAccounts);
                });

                setClientBalance(prev => (parseFloat(prev) - parseFloat(transaction.Amount)).toFixed(2))
                setMontoTransfer('');
                setNumberAccount('');
                setHimNumberAcc('');
                setSaldo(null);
                try {
                    const res = await DoATransfer(localStorage.getItem('authToken'), transaction);

                    GlobalInfo.TransfersHistory.Made.push(transaction)
                    setAllTransfers([...AllTransfers, res.data.data])
                } catch (error) {
                    console.log(error);
                }
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalValidate, SavingAccounts]);

    useEffect(() => {
        if (InputSearch.length > 4) {
            SetContactsTS(ContactsTS.filter((c) => `${c.Name.toLowerCase()}`.includes(InputSearch.toLowerCase())))
        } else if (InputSearch === '') {
            SetContactsTS(Contacts)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [InputSearch]);


    const HandlerTransSubmit = async (e) => {
        e.preventDefault()
        let Monto = MontoTransfer;
        if (MontoTransfer && typeof MontoTransfer === 'string') {
            Monto = parseFloat(MontoTransfer.replace(/,/g, ''))
        }
        if (!MontoTransfer || !NumberAccount || Monto === 0 || Saldo === null) {
            setFormError(true);
        } else if (NumberAccount === 'Selecionar Cuenta...' || HimNumberAcc === '' || Monto > parseFloat(Saldo)) {
            setFormError(true);
        } else {
            setMontoTransfer(Monto.toFixed(2))
            toggle()
            setFormError(false);
        }
    }

    const FormTransfer = () => {
        return (
            <>
                {toggle &&
                    <Modal active={activeModal} toggle={toggle} onRequestClose={toggle} padtop={'p-52'}>
                        <ModalTransaction Name={CurrentChat.Name}
                            Dui={CurrentChat.Dui}
                            Monto={MontoTransfer}
                            NumberAccount={NumberAccount}
                            setModalValidate={setModalValidate}
                            toggle={toggle}
                        />
                    </Modal>
                }

                <div className='bottom-tools-bar h-[15%] w-full rounded-br-xl flex items-center'>
                    <form onSubmit={HandlerTransSubmit} className='w-full h-full flex justify-between items-center py-2 px-4'>
                        <div className='w-[80%] h-[4rem] flex flex-row'>
                            <div className='bg-[#D6D6D6] h-[3.9rem] w-[50%] rounded-xl flex flex-row'>
                                <Cleave type='text' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} className='w-[60%] h-full bg-transparent border-none outline-none pl-5' placeholder={t("DashboardNormalUser.Transfers.form.placeholder")} onChange={(e) => setMontoTransfer(e.target.value)} value={MontoTransfer} autoComplete='off' />
                                <div className='vl2 w-[1%]'>
                                    <hr />
                                </div>
                                <div className='w-[39%] flex flex-col items-center justify-center'>
                                    <p className='m-0 text-center'>Saldo:</p>
                                    <p className='m-0 text-center text-[1.2rem] text-[#27AE60]'>$ {Saldo !== null ? parseFloat(Saldo).toFixed(2) : '?'}</p>
                                </div>

                            </div>

                            <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-[25rem] rounded-xl ml-5 px-2'>
                                <div className='dropdown-tr'>
                                    <div className="dropdown-button-tr" onClick={e => setIsSelect(!IsSelect)}>{NumberAccount === '' ? <span>Cuenta Emisora</span> : NumberAccount} <ArrowDown /></div>
                                    {IsSelect && (
                                        <div className={`dropdown-box-content-tr top-[-${(SavingAccounts.length * 3.3) + 3.3}rem]`}>
                                            <div className="dropdown-box-item-tr" onClick={e => { setNumberAccount(''); setIsSelect(false); setSaldo(null) }} >
                                                Seleccionar
                                            </div>
                                            {SavingAccounts.map((element, i) => {
                                                console.log((SavingAccounts.length * 3.3) + 3.3)
                                                return (
                                                    <div
                                                        className="dropdown-box-item-tr"
                                                        onClick={e => {
                                                            setNumberAccount(element.accountNumber)
                                                            setIsSelect(false)
                                                            setSaldo(element.balance)
                                                        }}
                                                        key={i}
                                                    >
                                                        {element.accountNumber}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-[25rem] rounded-xl ml-5 px-2'>
                                <div className='dropdown-tr'>
                                    <div className="dropdown-button-tr" onClick={e => setIsSelect2(!IsSelect2)}>{HimNumberAcc === '' ? <span>Cuenta a transferir</span> : HimNumberAcc} <ArrowDown /></div>
                                    {IsSelect2 && (
                                        <div className={`dropdown-box-content-tr top-[-${(CurrentAccs.length * 3.3) + 3.3}rem]`}>
                                            <div className="dropdown-box-item-tr" onClick={e => { setHimNumberAcc(''); setIsSelect2(false) }} >
                                                Seleccionar
                                            </div>
                                            {CurrentAccs.map((element, i) => {
                                                return (
                                                    <div
                                                        className="dropdown-box-item-tr"
                                                        onClick={e => {
                                                            setHimNumberAcc(element.accountNumber)
                                                            setIsSelect2(false)
                                                        }}
                                                        key={i}
                                                    >
                                                        {element.accountNumber}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className='w-[20%] h-full flex justify-end items-center'>
                            <button type='submit' className={`h-[3rem] w-[8rem] outline-none rounded-md border-none ${FormError ? 'bg-[#C90000]' : 'bg-[#323643]'} text-white`} >
                                {t("DashboardNormalUser.Transfers.form.button")}
                            </button>
                        </div>
                    </form>
                </div>
            </>
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
                                                <h3 className='text-center'>{t("DashboardNormalUser.Transfers.tittle")}</h3>
                                                <form className='searchbox w-full'>
                                                    <div role="search" className='searchbox-wrapper flex w-full'>
                                                        <button type="submit" title="" className='sbx-submit-btn'>
                                                            <AiOutlineSearch className='sbx-submit-btn-icon' />
                                                        </button>
                                                        <input type="search" name="search" placeholder={t("DashboardNormalUser.Transfers.input")} autoComplete="off" className='sbx-input' onChange={(e) => setInputSearch(e.target.value)} value={InputSearch} />
                                                        <button type="reset" title="" className="sbx-reset-btn">
                                                            <AiOutlineClose />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='contacts-names w-full h-[80%] rounded-bl-xl flex justify-center items-center'>
                                                <div className='user-contacts-left-bar w-[90%] h-[100%] overflow-x-hidden flex flex-col items-center'>
                                                    {
                                                        ContactsTS.map((Contact, index) => {
                                                            return (
                                                                <div onClick={() => {
                                                                    setCurrentChat(Contact)
                                                                    setCurrentAccs(EveryAccount.filter((Acc) => Acc.Dui === Contact.Dui))
                                                                    setMyTransfers(TransactionsArr.Made.filter((Transaction) => Transaction.ReciverDui === Contact.Dui));
                                                                    setHimTranfers(TransactionsArr.Received.filter((Transaction) => Transaction.SenderDui === Contact.Dui));
                                                                }}>
                                                                    <ContactCard Contact={Contact} TransactionsArr={TransactionsArr} key={index} OnlineUsers={OnlineUsers} />
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
                                                                <img src={CurrentChat.Photo} alt="" />
                                                            </div>
                                                            <span className="contact-username text-[#323643] ml-3 my-0">{CurrentChat.Name}</span>
                                                        </div>
                                                        <div className='transactions-msg-body w-full h-full flex flex-col overflow-x-hidden overflow-y-auto px-4 py-2'>

                                                            {
                                                                AllTransfers.length !== 0 ?
                                                                    AllTransfers.map((tr, index) => (
                                                                        <div ref={scrollRef} key={index}>
                                                                            <TransactionMessage own={tr.SenderDui === MyDui} Transf={tr} CurrentChat={CurrentChat} MyName={MyName} key={index} />
                                                                        </div>
                                                                    ))
                                                                    :
                                                                    <div className='flex flex-col items-center justify-center w-100 h-100'>
                                                                        <img className='w-[180px] mb-3' src={no_transactions_icon} alt="" />
                                                                        <p className='text-[#606470] text-[1.125rem]'>{t("DashboardNormalUser.Transfers.desc2")}</p>
                                                                    </div>
                                                            }

                                                        </div>
                                                        {FormTransfer()}
                                                    </>
                                                    :
                                                    <div className='flex flex-col justify-center items-center h-[100%]'>
                                                        <img className='w-[180px] mb-3' src={select_contact_icon} alt="" />
                                                        <p className='text-[#606470] text-[1.125rem]'>{t("DashboardNormalUser.Transfers.desc")}</p>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </>
                                :
                                <div className='flex flex-col justify-center items-center h-[100%]'>
                                    <img className='w-[270px] mb-3' src={no_contacts_icon} alt="" />
                                    <p className='text-[#606470] text-[1.25rem]'>{t("DashboardNormalUser.Transfers.desc3")}</p>
                                </div>

                        }
                    </>
            }
        </div>
    )
}