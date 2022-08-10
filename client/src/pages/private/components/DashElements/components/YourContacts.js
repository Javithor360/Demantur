import React from 'react'
import { useDash } from '../../../../../context/DashboardContext';

export const YourContacts = () => {
    const { Contacts } = useDash()

    return (
        <div>
            SUS Contactos: 
            {Contacts.length !== 0 ? 
            Contacts.map((el, i) => {
                return (
                    <div key={i}>   
                        nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                    </div>
                );
            })
            :
            'no hay'
            }
        </div>
    )
}
