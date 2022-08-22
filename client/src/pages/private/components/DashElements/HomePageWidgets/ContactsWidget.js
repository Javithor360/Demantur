import { useEffect, useState } from 'react'
import { useDash } from '../../../../../context/DashboardContext'

import perfilPhoto from '../../assets/img/profile-photo2.jpg'
import { RiContactsFill } from 'react-icons/ri'

export const ContactsWidget = () => {
  const { Contacts } = useDash()

  const [FourContacts, setFourContacts] = useState(null);

  useEffect(() => {
    if (Contacts) {
      let ContactsAux = [];
      let ValIndex;
      if (Contacts?.length <= 4) { ValIndex = Contacts?.length }
      else { ValIndex = 4; }
      for (let index = 0; index < ValIndex; index++) {
        ContactsAux.push(Contacts[index])
        setFourContacts(ContactsAux);
      }
    }
  }, [Contacts]);

  return (
    <>
      <h2 className="text-gray-500 text-[1.5625rem] text-center">Lista de contactos</h2>
      <div className='w-100 h-100'>
        {
          FourContacts ?
            FourContacts.map((Contact, i) => {
              return (
                <>
                  <div className='flex items-center justify-evenly' key={i}>
                    <img src={perfilPhoto} alt="perfilphoto" className='rounded-full w-[3rem] h-[3rem]' />
                    <span className='text-xl'>{`${Contact?.Name.split(' ')[0]} ${Contact?.Name.split(' ')[2]}`}</span>
                    <span className='text-xl mx-[-1rem]'>|</span>
                    <span className='text-xl'>{Contact.Dui}</span>
                  </div>
                  {i !== 3 && <div className='w-[100%] h-[0.10rem] bg-[#707070] my-[1rem]'></div>}
                </>
              );
            })
            :
            <div className='w-100 h-[100%]  flex flex-col justify-center items-center'>
              <span className='text-2xl'>No tienes contactos</span>
              <RiContactsFill className='w-[4rem] h-[6rem]' />
            </div>
        }
        {
          Contacts?.length < 3 && Contacts?.length !== 0 &&
          <div className={`mt-[${Contacts?.length === 1 ? '4' : '2'}em] flex flex-col justify-center items-center`}>
            <span className='text-2xl'>No hay más contactos</span>
            <RiContactsFill className='w-[2rem] h-[4rem]' />
          </div>
        }
      </div>
    </>
  )
}
