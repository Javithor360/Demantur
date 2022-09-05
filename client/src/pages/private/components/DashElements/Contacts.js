/* eslint-disable react-hooks/exhaustive-deps */
import '../assets/scss/Contacts_main.scss'
import { FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'

import { useDash } from '../../../../context/DashboardContext'
import { ContactsCard, ContactsCardSkeleton, YourContacts, PendingReq, YourFriendReq } from './components/'
import { FaUsersSlash } from 'react-icons/fa'

// Translation
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();

  const [NombreInput, setNombreInput] = useState('');

  const [CharginIco, setCharginIco] = useState(true);
  const [BoxHandler, setBoxhanlder] = useState(1);
  const [CharginSkeleton, setCharginSkeleton] = useState(false);

  const [UsersToReq, setUsersToReq] = useState([]);
  const [UsersSearched, setUsersSearched] = useState([]);

  const [AcceptedFrState, setAcceptedFrState] = useState(null);
  const [AddedFrStatus, setAddedFrStatus] = useState(null);
  const [CanceledFrStatus, setCanceledFrStatus] = useState(null);
  const [DeclinedFrStatus, setDeclinedFrStatus] = useState(null);
  const [DeletedCstatus, setDeletedCstatus] = useState(null);

  const [ReloadComp, setReloadComp] = useState(false);

  const [UsersToAdd, setUsersToAdd] = useState(null);

  const { getGlobalInfo, getUsersToFriendReq, ReloadStateTwo, setReloadStateTwo, PendingFr, getMyFriendReq, socket, Contacts, FriendRequest, setFriendRequest, PedingFriendReq, setPedingFriendReq, getUsersToAdd, setContacts, Info
    , setReloadState
  } = useDash();

  useEffect(() => {
    PendingFr(localStorage.getItem('authToken'));
    getMyFriendReq(localStorage.getItem('authToken'));
    (async () => {
      const gettedUsers = await getUsersToFriendReq(localStorage.getItem('authToken'));
      setUsersToReq(gettedUsers.data.data);
    })()
    setReloadStateTwo(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ReloadStateTwo])

  useEffect(() => {
    getGlobalInfo(localStorage.getItem('authToken'));
    (async () => {
      const AllUsers = await getUsersToAdd(localStorage.getItem('authToken'))
      setUsersToAdd(AllUsers.data.data)
    })()
    setTimeout(() => {
      setCharginIco(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    socket.on('AcceptedFriendReq', data => {
      setAcceptedFrState(data.element);
      setNombreInput('')
      let aux = UsersToReq.filter((el) => el.Dui !== data.element.Dui);
      setUsersToReq(aux)
    })

    socket.on('AddedFriendReq', data => {
      setAddedFrStatus(data.element)
      setNombreInput('')
      let aux = UsersToReq.filter((el) => el.Dui !== data.element.Dui);
      setUsersToReq(aux)
    })

    socket.on('CanceledFriendReq', data => {
      setCanceledFrStatus(data.element);
      let aux = FriendRequest?.filter((el) => el.Dui !== data.element.Dui)
      setFriendRequest(aux);
      setNombreInput('')
    })

    socket.on('DeclinedFriendReq', data => {
      setDeclinedFrStatus(data.element);
      let aux = PedingFriendReq?.filter((el) => el.Dui !== data.element.Dui)
      setPedingFriendReq(aux);
      setNombreInput('')
    })

    socket.on('DeletedContact', data => {
      setDeletedCstatus(data.Dui)
    })

    socket.on('AccFrToPendings', data => {
      let aux = PedingFriendReq?.filter((el) => el.Dui !== data.element.Dui)
      setPedingFriendReq(aux);
    })
  }, [socket]);


  useEffect(() => {
    if (CanceledFrStatus !== null) {
      let aux = UsersToReq;
      UsersToAdd.forEach(element => {
        if (element.Dui === CanceledFrStatus.Dui) {
          aux.push(element);
        }
      });
      setUsersToReq(aux);
      setCanceledFrStatus(null)
    }
  }, [CanceledFrStatus]);


  useEffect(() => {
    if (DeclinedFrStatus !== null) {
      let aux = UsersToReq;
      UsersToAdd.forEach(element => {
        if (element.Dui === DeclinedFrStatus.Dui) {
          aux.push(element);
        }
      });
      setUsersToReq(aux);
      setDeclinedFrStatus(null)
    }
  }, [DeclinedFrStatus]);


  useEffect(() => {
    if (AddedFrStatus !== null) {
      setNombreInput('')
      let auxArr = FriendRequest
      auxArr.push(AddedFrStatus)

      setFriendRequest(auxArr);
      setReloadComp(true);
      setAddedFrStatus(null);
    }
  }, [AddedFrStatus]);

  useEffect(() => {
    if (DeletedCstatus !== null) {
      let auxContacts = Contacts.filter((e) => e.Dui !== DeletedCstatus);
      setContacts(auxContacts);
      let aux = UsersToReq;
      UsersToAdd.forEach(element => {
        if (element.Dui === DeletedCstatus) {
          aux.push(element);
        }
      });
      setUsersToReq(aux);
      setDeletedCstatus(null);
    }
  }, [DeletedCstatus]);

  useEffect(() => {
    if (AcceptedFrState !== null) {
      setNombreInput('')
      Contacts.push(AcceptedFrState)

      setReloadState(true)
      setAcceptedFrState(null)
    }
  }, [AcceptedFrState]);


  // SearchHanddler
  const SearchFunct = (e) => {
    setNombreInput(e.target.value);
    setCharginSkeleton(true);
  }

  useEffect(() => {
    if (!NombreInput || NombreInput.length < 4) {
      setUsersSearched([]);
    } else {
      let Names = NombreInput.split(' ')
      if (Names.length === 1) setUsersSearched(UsersToReq.filter((User) => `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[0].toLowerCase())))
      if (Names.length === 2) setUsersSearched(UsersToReq.filter((User) => `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[0].toLowerCase() || Names[1].toLowerCase())))
      if (Names.length === 3) setUsersSearched(UsersToReq.filter((User) => `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[0].toLowerCase() || Names[1].toLowerCase()) || `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[2].toLowerCase())))
      if (Names.length === 4) setUsersSearched(UsersToReq.filter((User) => `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[0].toLowerCase() || Names[1].toLowerCase()) || `${User.FirstName.toLowerCase()} ${User.LastName.toLowerCase()}`.includes(Names[2].toLowerCase() || Names[3].toLowerCase())))
    }
    setTimeout(() => {
      setCharginSkeleton(false);
    }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NombreInput])


  const rederUsers = () => {
    return (
      <>
        {
          UsersSearched.length !== 0 ?
            UsersSearched.map((User, index) => {
              return <ContactsCard User={User} key={index} setUsersToReq={setUsersToReq} UsersToReq={UsersToReq} setNombreInput={setNombreInput} />
            })
            :
            <div className='w-100 h-[80%] flex flex-col items-center justify-center'>
              <FaUsersSlash className='w-[12rem] h-[12rem] text-[#909090]' />
              <p className='text-[#606470] '>{t("DashboardNormalUser.Contacts.desc")}</p>
            </div>
        }
      </>
    )
  }

  const renderBox = () => {
    switch (BoxHandler) {
      case 1:
        return <YourContacts />;
      case 2:
        return <PendingReq />;
      case 3:
        return <YourFriendReq ReloadComp={ReloadComp} setReloadComp={setReloadComp} />;
      default:
        return <YourContacts />;
    }
  }

  return (
    <div className="contacts-main-div h-[100%] flex justify-between">
      <div className='divs-contact contacts-big-div h-full w-[58%]'>
        {
          CharginIco === true ?
            <div className='flex justify-center items-center w-full h-full'><IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' /></div>
            :
            <>
              <div className={`w-[90%] mx-auto max-h-fit`}>
                <p className='text-gray-500 text-center text-[28px] m-0 p-0'>{t("DashboardNormalUser.Contacts.tittle")}</p>
                <div className='line-contacts w-[40%] mx-auto' ></div>
                <div className='flex w-[100%] bg-[#f7f7f7] p-2 h-[3rem] rounded-sm shadow-sm justify-center mb-3 mt-3'>
                  <div className={`contact-tab-header ${BoxHandler === 1 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(1) }}>
                    <span className=''>{t("DashboardNormalUser.Contacts.tittle2")}</span>
                  </div>
                  <div className={`contact-tab-header ${BoxHandler === 2 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(2) }}>
                    <span className=''>{t("DashboardNormalUser.Contacts.tittle3")}</span>
                  </div>
                  <div className={`contact-tab-header ${BoxHandler === 3 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(3) }}>
                    <span className=''>{t("DashboardNormalUser.Contacts.tittle4")}</span>
                  </div>
                </div>
              </div>
              <div className='h-[70%] overflow-x-hidden overflow-y-hidden'>
                {renderBox()}
              </div>
            </>
        }
      </div>


      <div className='divs-contact contacts-small-div w-[40%]'>
        {
          CharginIco === true ?
            <div className='w-full h-full flex justify-center items-center'><IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' /></div>
            :
            <>
              <p className='text-gray-500 text-center text-[28px] m-0 p-0'>{t("DashboardNormalUser.Contacts.tittle5")}</p>
              <div className='line-contacts w-[70%] mx-auto '></div>
              <div className='p-4 h-[90%] w-[100%]'>
                <div className='container-contact-input w-[90%] mx-auto '>
                  <div className='h-100 w-[100%] mx-auto flex justify-center '>
                    <input id='Nombre' name='Nombre' placeholder={t("DashboardNormalUser.Contacts.search")} onChange={SearchFunct} value={NombreInput} autoComplete='off' className='input-contact-dui px-[1rem] py-[0.4rem] w-[100%] h-100 text-xl' />
                    <button type='submit' className='boton-contacts w-[14%]'><FiSearch /></button>
                  </div>
                </div>
                <div className='searched-contacts flex flex-col mt-4'>
                  <>
                    {
                      CharginSkeleton === true ?
                        <ContactsCardSkeleton cards={5} />
                        :
                        rederUsers()
                    }
                  </>
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}
