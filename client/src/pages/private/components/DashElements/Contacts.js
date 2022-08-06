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

  const { getGlobalInfo, getUsersToFriendReq, Contacts, FriendRequest } = useDash();

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
            UsersSearched.map((User) => {
              return <ContactsCard User={User} key={User._id} setUsersToReq={setUsersToReq} UsersToReq={UsersToReq} />
            })
            :
            <p>no hay concidiencias</p>
        }
      </>
    )
  }

  const renderBox = () => {
    switch (BoxHandler) {
      case 1:
        return <YourContacts Contacts={Contacts} />;
      case 2:
        return <PendingReq />
      case 3:
        return <YourFriendReq />
      default:
        return <YourContacts Contacts={Contacts} />;
    }
  }

  return (
    <div className="contacts-main-div h-100 flex justify-between">
      <div className='divs-contact contacts-big-div  w-[60%]'>
        <h2 className='text-gray-500'>Tus Contactos</h2>
        <div className='line-contacts w-[40%] mx-auto' ></div>
        <div className={` w-[80%] mx-auto my-6 h-[80%] ${CharginIco === true ? ' flex justify-center items-center' : 'border-black border-solid'}`}>

          {
            CharginIco === true ?
              <IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' />
              :
              <>
                <div className='flex w-[100%] bg-black h-[3rem]'>
                  <div className='w-[auto] text-center bg-red-400' onClick={() => { setBoxhanlder(1) }}>Añadidos</div>
                  <div className='w-[auto] text-center bg-red-400' onClick={() => { setBoxhanlder(2) }}>Pendientes</div>
                  <div className='w-[auto] text-center bg-red-400' onClick={() => { setBoxhanlder(3) }}>solicitudes</div>
                </div>
                {renderBox()}
              </>
          }
        </div>
      </div>


      <div className='divs-contact contacts-small-div w-[37%]'>
        <h2 className='text-gray-500'>Agregar Contacto</h2>
        <div className='line-contacts w-[70%] mx-auto '></div>
        <div className='p-4 h-[90%]'>
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
      </div>
    </div>
  )
}
