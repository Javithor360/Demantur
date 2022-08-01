import React from 'react'
import '../assets/scss/Transactions_main.scss'
import photoExample from '../assets/img/contact-user-profile.png'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export const Transactions = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl shadow-md flex flex-row'>
        <div className='contacts-area  w-[25%] h-full rounded-l-xl flex flex-col justify-center items-center'>
            <div className='contacts-search-container w-[80%] h-[20%] rounded-tl-xl'>
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
            <div className='w-full h-[80%] rounded-bl-xl'>

            </div>
        </div>
        <div className='w-[75%] h-full rounded-r-xl flex flex-col'>
            <div className='header-contact-name h-[12%] w-full rounded-tr-xl flex flex-row items-center p-2'>
                <div className="header-contact-name-img">
                    <img src={photoExample} alt="" className="h-full w-full" />
                </div>
                <span className="contact-username text-[#323643] ml-3 my-0">Daniel Ernesto Vásquez Ventura</span>
            </div>
            <div className='transactions-msg-body h-[76%] w-full'>

            </div>
            <div className='bottom-tools-bar h-[12%] w-full rounded-br-xl'>

            </div>
        </div>
    </div>
    
  )
    

}
