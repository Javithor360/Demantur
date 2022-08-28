import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import requests_icon from '../../assets/img/contacts-icons/contacts-request-icon.png'

// Translation
import { useTranslation } from "react-i18next";

export const YourFriendReq = () => {
    const {t}=useTranslation();

    const { FriendRequest, AcceptFriend, DeclineFriend, setFriendRequest, setReloadState, Contacts, setReloadStateTwo } = useDash()
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
            Photo: el.Photo,
        });
        setReloadState(true);
        setReloadComp(true);
        setReloadStateTwo(true);
    }

    const FriendToDecline = (el) => {
        DeclineFriend(localStorage.getItem('authToken'), el);
        setFriendRequest(filtArrayFriendreq(el));
        setReloadComp(true);
        setReloadStateTwo(true);
    }
    return (
        <>
            {
                FriendRequest.length !== 0 ?
                    FriendRequest.map((el, i) => {
                        return (
                            // <div key={i}>
                            //     nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                            //     <button onClick={() => { FriendToAccept(el) }}>Aceptar</button>
                            //     <button onClick={() => { FriendToDecline(el) }}>Rechazar</button>
                            // </div>
                            <div key={i} className="bg-[#FBFBFB] w-[90%] flex justify-between mt-4 ml-5 p-3 border border-[#707070] rounded-md">
                                <>
                                    <div className="flex">
                                        <div className="mr-7 flex items-center">
                                            {/* foto: {el.Photo} */}
                                            <div className='profile-img mr-3'>
                                                <img src={el.Photo} alt="" className="h-full w-full" />
                                            </div>
                                        </div>
                                        <div className="contact-data flex flex-col">
                                            <div className="contact-name mb-3 p-0">
                                                <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.YourFriendReq.name")} </span> <p className="m-0 p-0">{el.Name}</p>
                                            </div>
                                            <p className="m-0 p-0">
                                                <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.YourFriendReq.dui")} </span> <p className="m-0 p-0">{el.Dui}</p>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <button className="w-[6.5rem] px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white" onClick={() => { FriendToAccept(el) }}>{t("DashboardNormalUser.Contacts.YourFriendReq.button1")}</button>
                                        <button className="w-[6.5rem] px-3 py-2 outline-none border-none rounded-md bg-[#989398] text-white" onClick={() => { FriendToDecline(el) }}>{t("DashboardNormalUser.Contacts.YourFriendReq.button2")}</button>
                                    </div>
                                </>
                            </div>
                        )
                    })
                    :
                    <div className='flex flex-col justify-center items-center h-[90%] mt-2'>
                        <img className='w-[200px] mb-3' src={requests_icon} alt="" />
                        <p className='text-[#606470]'>{t("DashboardNormalUser.Contacts.YourFriendReq.desc")}</p>
                    </div>
            }
        </>
    )
}
