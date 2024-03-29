import { useDash } from '../../../../../context/DashboardContext';
import no_contacts_icon from '../../assets/img/contacts-icons/contacts_icon.png'

// Translation
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

export const YourContacts = () => {
    const { t } = useTranslation();

    const { Contacts, DeleteFriendReq, setContacts, setReloadStateTwo, socket, Info } = useDash()


    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    const DeleteFriend = (el) => {
        socket.emit('DeleteContact', {
            HimDui: el.Dui, MyDui: Info.Dui
        })
        DeleteFriendReq(localStorage.getItem('authToken'), el)
        setContacts(Contacts.filter((element) => element.Dui !== el.Dui));
        setReloadStateTwo(true);
    }
    return (
        <div className='h-[100%]'>
            {Contacts.length !== 0 ?
                Contacts.map((el, i) => {
                    return (
                        <div key={i} className="bg-[#FBFBFB] w-[90%] flex justify-between mt-4 ml-5 p-3 border border-[#707070] rounded-md mx-auto">
                            <>
                                <div className="flex">
                                    <div className="mr-7 flex items-center">
                                        <div className='profile-img mr-3'>
                                            <img src={el.Photo} alt="" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="contact-data flex flex-col">
                                        <div className="contact-name mb-3 p-0">
                                            <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.YourContacts.name")} </span> <p className="m-0 p-0">{el.Name}</p>
                                        </div>
                                        <p className="m-0 p-0">
                                            <span className="font-semibold text-[#606470]">{t("DashboardNormalUser.Contacts.YourContacts.dui")} </span> <p className="m-0 p-0">{el.Dui}</p>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <button className="px-3 py-2 outline-none border-none rounded-md bg-[#989398] text-white" onClick={() => { DeleteFriend(el) }}>{t("DashboardNormalUser.Contacts.YourContacts.button")}</button>
                                </div>
                            </>
                        </div>
                    );
                })
                :
                <div className='flex flex-col justify-center items-center h-[90%] mt-2'>
                    <img className='w-[200px] mb-3' src={no_contacts_icon} alt="" />
                    <p className='text-[#606470]'>{t("DashboardNormalUser.Contacts.YourContacts.desc")}</p>
                </div>
            }
        </div>
    )
}
