import React from 'react'
import { useDash } from '../../../../../context/DashboardContext';

export const YourContacts = () => {
    const { Contacts, DeleteFriendReq } = useDash()

    const DeleteFriend = (el) => {
        DeleteFriendReq(localStorage.getItem('authToken'), el)
    }

    return (
        <div>
            SUS Contactos:
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
                'no hay'
            }
        </div>
    )
}
