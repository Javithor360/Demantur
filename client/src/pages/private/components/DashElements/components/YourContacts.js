import React from 'react'
import { useDash } from '../../../../../context/DashboardContext';
import no_contacts_icon from '../../assets/img/contacts-icons/contacts_icon.png'

export const YourContacts = () => {
    const { Contacts, DeleteFriendReq } = useDash()

    const DeleteFriend = (el) => {
        DeleteFriendReq(localStorage.getItem('authToken'), el)
    }

    return (
        <div className='h-[100%]'>
            <span className='mt-5 text-[#606470] h-[100%]'>Sus contactos</span>
            {Contacts.length !== 0 ?
                Contacts.map((el, i) => {
                    return (
                        <div key={i}>
                            nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                            <button onClick={() => { DeleteFriend(el) }}>Eliminar</button>
                        </div>
                    );
                })
                :
                <div className='flex flex-col justify-center items-center h-[100%]'>
                    <img className='w-[200px] mb-3' src={no_contacts_icon} alt="" />
                    <p className='text-[#606470]'>No tiene contactos agregados</p>
                </div>
            }
        </div>
    )
}
