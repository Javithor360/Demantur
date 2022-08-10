import React from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const YourFriendReq = () => {
    const { FriendRequest, AcceptFriend } = useDash()

    const FriendToAccept = (el) => {
        AcceptFriend(localStorage.getItem('authToken'), el);
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
                                <button onClick={() => { FriendToAccept(el) }}>Aceptar</button>
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
