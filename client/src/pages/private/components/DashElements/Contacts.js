import '../assets/scss/Contacts_main.scss'
import { FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'

import { useDash } from '../../../../context/DashboardContext'
import { ContactsCard, ContactsCardSkeleton, YourContacts, PendingReq, YourFriendReq } from './components/'

export const Contacts = () => {
  const [NombreInput, setNombreInput] = useState('');

  const [CharginIco, setCharginIco] = useState(true);
  const [BoxHandler, setBoxhanlder] = useState(1);
  const [CharginSkeleton, setCharginSkeleton] = useState(false);

  const [UsersToReq, setUsersToReq] = useState([]);
  const [UsersSearched, setUsersSearched] = useState([]);

  const { getGlobalInfo, getUsersToFriendReq } = useDash();

  useEffect(() => {
    getGlobalInfo(localStorage.getItem('authToken'));

    (async () => {
      const gettedUsers = await getUsersToFriendReq(localStorage.getItem('authToken'));
      setUsersToReq(gettedUsers.data.data);
    })()

    setTimeout(() => {
      setCharginIco(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
              return <ContactsCard User={User} key={index} setUsersToReq={setUsersToReq} UsersToReq={UsersToReq} />
            })
            :
            <p className='text-[#606470]'>No hay concidiencias</p>
        }
      </>
    )
  }

  const renderBox = () => {
    switch (BoxHandler) {
      case 1:
        return <YourContacts />;
      case 2:
        return <PendingReq />
      case 3:
        return <YourFriendReq />
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
                <p className='text-gray-500 text-center text-[28px] m-0 p-0'>Tus Contactos</p>
                <div className='line-contacts w-[40%] mx-auto' ></div>
                <div className='flex w-[100%] bg-[#f7f7f7] p-2 h-[3rem] rounded-sm shadow-sm justify-center mb-3 mt-3'>
                  <div className={`contact-tab-header ${BoxHandler === 1 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(1) }}>
                    <span className=''>Añadidos</span>
                  </div>
                  <div className={`contact-tab-header ${BoxHandler === 2 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(2) }}>
                    <span className=''>Pendientes</span>
                  </div>
                  <div className={`contact-tab-header ${BoxHandler === 3 && 'contact-tab-header-active'}`} onClick={() => { setBoxhanlder(3) }}>
                    <span className=''>Solicitudes</span>
                  </div>
                </div>
              </div>
              <div className='h-[70%] overflow-x-hidden overflow-y-auto'>
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
              <p className='text-gray-500 text-center text-[28px] m-0 p-0'>Agregar Contacto</p>
              <div className='line-contacts w-[70%] mx-auto '></div>
              <div className='p-4 h-[90%] w-[100%]'>
                <div className='container-contact-input w-[90%] mx-auto '>
                  <div className='h-100 w-[100%] mx-auto flex justify-center '>
                    <input id='Nombre' name='Nombre' placeholder='Nombre Completo' onChange={SearchFunct} value={NombreInput} autoComplete='off' className='input-contact-dui px-[1rem] py-[0.4rem] w-[100%] h-100 text-xl' />
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
