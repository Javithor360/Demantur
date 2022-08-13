import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const YourFriendReq = () => {
    const { FriendRequest, AcceptFriend, DeclineFriend, setFriendRequest, setReloadState, Contacts } = useDash()
    const [ReloadComp, setReloadComp] = useState(false);

    useEffect(() => {
        setReloadComp(false)
    }, [ReloadComp])

    const filtArrayFriendreq = (el) => {
        return FriendRequest.filter((SingleReq) => el.Dui !== SingleReq.Dui)
    }

    const FriendToAccept = (el) => {
        AcceptFriend(localStorage.getItem('authToken'), el);
        setFriendRequest(filtArrayFriendreq(el));
        Contacts.push({
            Name: el.Name,
            Dui: el.Dui,
            Photo: 'Foto link',
        });
        setReloadState(true);
        setReloadComp(true);
    }

    const FriendToDecline = (el) => {
        DeclineFriend(localStorage.getItem('authToken'), el);
        setFriendRequest(filtArrayFriendreq(el));
        setReloadComp(true);
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
                                <button onClick={() => { FriendToDecline(el) }}>Rechazar</button>
                            </div>
                        )
                    })
                    :
                    'no hay'
            }
        </>
    )
}
