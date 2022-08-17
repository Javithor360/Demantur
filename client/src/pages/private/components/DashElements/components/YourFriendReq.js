import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import requests_icon from '../../assets/img/contacts-icons/contacts-request-icon.png'

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
            <span className='mt-5 text-[#606470]'>Sus solicitudes pendientes</span>
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
                    <div className='flex flex-col justify-center items-center h-[100%]'>
                        <img className='w-[200px] mb-3' src={requests_icon} alt="" />
                        <p className='text-[#606470]'>No tiene solicitudes pendientes</p>
                    </div>
            }
        </>
    )
}
