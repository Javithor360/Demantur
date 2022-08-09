import React from 'react'
import '../assets/scss/Transactions_main.scss'
import './TransactionsComponents/TransactionMessage'
import photoExample from '../assets/img/contact-user-profile.png'
import photoExample2 from '../assets/img/profile-photo2.jpg'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import TransactionMessage from './TransactionsComponents/TransactionMessage'

export const Transactions = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white rounded-xl shadow-md'>
        <div className='flex flex-row h-[85%]'>
            <div className='contacts-area  w-[25%] h-full rounded-l-xl flex flex-col items-center'>
                <div className='contacts-search-container w-[90%] h-[10%] rounded-tl-xl mt-[2rem] mb-3'>
                    <form className='searchbox w-full'>
                        <div role="search" className='searchbox-wrapper flex w-full'>
                            <button type="submit" title="" className='sbx-submit-btn'>
                                <AiOutlineSearch className='sbx-submit-btn-icon'/>
                            </button>
                            <input type="search" name="search" placeholder="Buscar..." autocomplete="off" className='sbx-input'/>
                            <button type="reset" title="" className="sbx-reset-btn">
                                <AiOutlineClose />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='contacts-names w-full h-[80%] rounded-bl-xl flex justify-center items-center'>
                    <div className='user-contacts-left-bar w-[90%] h-[100%] overflow-y-auto overflow-x-hidden flex flex-col items-center'>
                        <div className='individual-contact-container w-[100%] h-[5rem] flex flex-row items-center p-1 mb-2'>
                            <div className='contact-profile-img-container'>
                                <div className="lb-contact-img">
                                    <img src={photoExample} alt="" className="h-full w-full" />
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center ml-2'>
                                <div className='lol'>
                                    <p className=''>Daniel Ernesto Vásquez Ventura</p>
                                </div>
                                <div>
                                    <div className='flex flex-row items-center'>
                                        <span className='text-[#606470]'><GoPrimitiveDot /></span>
                                        <p className='m-0 text-[0.75rem]'>Desconectado</p>
                                    </div>
                                    {/* <div className='flex flex-row items-center'>
                                        <span className='text-[#0DC700]'><GoPrimitiveDot /></span>
                                        <p className='m-0 text-[0.75rem]'>En Línea</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='individual-contact-container w-full h-[5rem] flex flex-row items-center p-1 mb-7'>
                            <div className='contact-profile-img-container'>
                                <div className="lb-contact-img">
                                    <img src={photoExample2} alt="" className="h-full w-full" />
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center ml-2'>
                                <div className='lol'>
                                    <p className=''>Alvin Josué Meléndez Serrano</p>
                                </div>
                                <div>
                                    {/* <div className='flex flex-row items-center'>
                                        <span className='text-[#606470]'><GoPrimitiveDot /></span>
                                        <p className='m-0 text-[0.75rem]'>Desconectado</p>
                                    </div> */}
                                    <div className='flex flex-row items-center'>
                                        <span className='text-[#0DC700]'><GoPrimitiveDot /></span>
                                        <p className='m-0 text-[0.75rem]'>En Línea</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[75%] h-full rounded-r-xl flex flex-col'>
                <div className='header-contact-name h-[4.5rem] w-full rounded-tr-xl flex flex-row items-center p-2'>
                    <div className="header-contact-name-img">
                        <img src={photoExample} alt="" className="h-full w-full" />
                    </div>
                    <span className="contact-username text-[#323643] ml-3 my-0">Daniel Ernesto Vásquez Ventura</span>
                </div>
                <div className='transactions-msg-body w-full h-full flex flex-col overflow-x-hidden overflow-y-auto px-4 py-2'>
                    <TransactionMessage own={true}/>
                    <TransactionMessage />
                    <TransactionMessage own={true}/>
                    <TransactionMessage />
                </div>
            </div>
        </div>
        <div className='bottom-tools-bar h-[15%] w-full rounded-br-xl flex items-center'>
            <form action="" className='w-full h-full flex justify-between items-center py-2 px-4'>
                <div className='w-[70%] h-[4rem] flex flex-row'>
                    <div className='bg-[#D6D6D6] h-[3.9rem] w-[50%] rounded-xl flex flex-row'>
                        <input className='w-[60%] h-full bg-transparent border-none outline-none pl-5' type="text" placeholder='Ingresar Monto...'/>
                        <div className='vl2 w-[1%]'>
                            <hr />
                        </div>
                        <div className='w-[39%] flex flex-col items-center justify-center'>
                            <p className='m-0 text-center'>Saldo:</p>
                            <p className='m-0 text-center text-[1.2rem] text-[#27AE60]'>$1020.00</p>
                        </div>
                    </div>
                    <div className='acc-select-container bg-[#D6D6D6] h-[3.9rem] w-[30%] rounded-xl ml-5 px-2'>
                        <select name="" id="" className='acc-select outline-none border-none lol3 w-full h-full m-auto block bg-[#D6D6D6] cursor-pointer'>
                            <option>Selecionar Cuenta...</option>
                            <option>Cuenta 1</option>
                            <option>Cuenta 2</option>
                        </select>
                    </div>
                    
                </div>
                <div className='w-[20%] h-full flex justify-end items-center'>
                    <button type='submit' className='h-[3rem] w-[8rem] outline-none rounded-md border-none bg-[#323643] text-white'>
                        Transferir
                    </button>
                </div>                     
            </form>
        </div>
    </div>
  )
}
