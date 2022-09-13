/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDash } from "../../../../../context/DashboardContext"
import pending_icon from '../../assets/img/contacts-icons/contacts-pending-icon.png'
import '../../assets/scss/Contacts_main.scss'

// Translation
import { useTranslation } from "react-i18next";

export const PendingReq = () => {
    const { t } = useTranslation();

    const { PedingFriendReq, ReloadState, setReloadState, cancelFriendReq, setPedingFriendReq, setReloadStateTwo, PendingFr, getMyFriendReq, socket, Info } = useDash()
    useEffect(() => {
        setReloadState(false)
    }, [ReloadState, PedingFriendReq])

    useEffect(() => {
        PendingFr(localStorage.getItem('authToken'));
        getMyFriendReq(localStorage.getItem('authToken'));
    }, []);

    const CancelFriendReq = (el) => {
        socket.emit('CancelFriendReq', { element: el, By: { Name: `${Info.FirstName} ${Info.LastName}`, Dui: Info.Dui, Photo: Info.PerfilPhoto.url } })
        cancelFriendReq(localStorage.getItem('authToken'), el)
        setPedingFriendReq(PedingFriendReq.filter((SingleReq) => SingleReq.Dui !== el.Dui));
        setReloadState(false);
        setReloadStateTwo(true);
    }
    return (
        <>
            {
                PedingFriendReq.length !== 0 ?
                    PedingFriendReq.map((el, i) => {
                        return (
                            <div key={i} className="bg-[#FBFBFB] w-[90%] flex justify-between mt-4 ml-5 p-3 border border-[#707070] rounded-md">
                                <>
                                    <div className="flex">
                                        <div className="mr-7 flex items-center">
                                            <div className='profile-img mr-3'>
                                                <img src={el.Photo} alt="" className="h-full w-full" />
                                            </div>
                                        </div>
                                        <div className="contact-data flex flex-col">
                                            <div className="contact-name mb-3 p-0">
                                                <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.Pending.name")}  </span> <p className="m-0 p-0">{el.Name}</p>
                                            </div>
                                            <span className="m-0 p-0">
                                                <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.Pending.dui")} </span> <p className="m-0 p-0">{el.Dui}</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <button className="px-3 py-2 outline-none border-none rounded-md bg-[#989398] text-white" onClick={() => { CancelFriendReq(el) }}>{t("DashboardNormalUser.Contacts.Pending.button")}</button>
                                    </div>
                                </>
                            </div>
                        )
                    })
                    :
                    <div className='flex flex-col justify-center items-center h-[90%] mt-2'>
                        <img className='w-[200px] mb-3' src={pending_icon} alt="" />
                        <p className='text-[#606470]'>{t("DashboardNormalUser.Contacts.Pending.desc")}</p>
                    </div>
            }
        </>
    )
}
