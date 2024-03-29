import photoExample from '../../assets/img/contact-user-profile.png'
import { GoPrimitiveDot } from 'react-icons/go'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'

export const ContactTransactionCard = ({ Contact, index, OnlineUsers }) => {
  const [validated, setValidated] = useState(false)
  const [isOnline, setisOnline] = useState([]);
  const { CurrentChat } = useDash()

  useEffect(() => {
    setisOnline(OnlineUsers.filter((SigUser) => SigUser.Dui === Contact.Dui))
  }, [OnlineUsers, Contact.Dui]);

  useEffect(() => {
    if (CurrentChat !== null) {
      if (CurrentChat.Dui === Contact.Dui) {
        setValidated(true);
      } else {
        setValidated(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentChat])


  return (
    <div className={`individual-contact-container w-[100%] h-[5rem] flex flex-row items-center p-1 mb-[4%]  relative ${validated ? 'bg-white' : 'cursor-pointer'}`} key={index}>
      <div className='contact-profile-img-container'>
        <div className="lb-contact-img">
          <img src={Contact.Photo} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className='w-full flex flex-col justify-center ml-2'>
        <div className='lol'>
          <p className=''>{Contact.Name}</p>
        </div>
        <div>
          <div className='flex flex-row items-center'>
            <span className={isOnline.length === 0 ? 'text-[#606470]' : 'text-[#0DC700]'}><GoPrimitiveDot /></span>
            <p className='m-0 text-[0.75rem]'>{isOnline.length === 0 ? "Desconectado" : "conectado"}</p>
          </div>
        </div>
      </div>
      {validated && <div className='h-100 w-2 bg-[#717171] absolute right-0'></div>}
    </div>
  )
}