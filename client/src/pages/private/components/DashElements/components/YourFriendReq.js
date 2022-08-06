import React from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const YourFriendReq = () => {
    const { FriendRequest } = useDash()

    const FriendToAccept = () => {

    }

    const FriendToDecline = () => {

    }
    return (
        <>
            <p>SUS solicitudes pendientes:</p>
            {
                FriendRequest.length !== 0 ?
                    FriendRequest.map((el, i) => {
                        return (
                            <div key={i}>
                                nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                                <button onClick={FriendToAccept}>Aceptar</button>
                                <button onClick={FriendToDecline}>Rechazar</button>
                            </div>
                        )
                    })
                    :
                    'no hay'
            }
        </>
    )
}
