import React from 'react'
import { useDash } from '../../../../../context/DashboardContext';
import no_contacts_icon from '../../assets/img/contacts-icons/contacts_icon.png'

export const YourContacts = () => {
    const { Contacts, DeleteFriendReq } = useDash()

    const DeleteFriend = (el) => {
        DeleteFriendReq(localStorage.getItem('authToken'), el)
    }
    const HeaderImages = require.context('../../assets/img/', true);
    return (
        <div className='h-[100%]'>
            <span className='mt-5 ml-5 text-[#606470] h-[100%]'>Sus contactos</span>
            {Contacts.length !== 0 ?
                Contacts.map((el, i) => {
                    return (
                        // <div key={i}>
                        //     nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                        //     <button onClick={() => { DeleteFriend(el) }}>Eliminar</button>
                        // </div>
                        <div key={i} className="bg-[#FBFBFB] w-[90%] flex justify-between mt-4 ml-5 p-3 border border-[#707070] rounded-md">
                            <>
                                <div className="flex">
                                    <div className="mr-7 flex items-center">
                                        {/* foto: {el.Photo} */}
                                        <div className='profile-img mr-3'>
                                            <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="contact-data flex flex-col">
                                        <div className="contact-name mb-3 p-0">
                                            <span className="font-semibold text-[#606470]">Nombre: </span> <p className="m-0 p-0">{el.Name}</p> 
                                        </div>
                                        <p className="m-0 p-0">
                                            <span className="font-semibold text-[#606470]">DUI: </span> <p className="m-0 p-0">{el.Dui}</p>
                                        </p> 
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <button className="px-3 py-2 outline-none border-none rounded-md bg-[#989398] text-white" onClick={() => { DeleteFriend(el) }}>Eliminar</button>
                                </div>
                            </>
                        </div>
                    );
                })
                :
                <div className='flex flex-col justify-center items-center h-[90%] mt-2'>
                    <img className='w-[200px] mb-3' src={no_contacts_icon} alt="" />
                    <p className='text-[#606470]'>No tiene contactos agregados</p>
                </div>
            }
        </div>
    )
}
