import React from 'react'

export const YourContacts = ({ Contacts }) => {
    return (
        <div>
            SUS Contactos: {Contacts.length === 0 ? "nohay" : Contacts}
        </div>
    )
}
