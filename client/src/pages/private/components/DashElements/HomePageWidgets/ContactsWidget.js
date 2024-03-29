import { useEffect, useState, useTransition } from 'react'
import { useDash } from '../../../../../context/DashboardContext'
import '../../assets/scss/WidgetsStyles.scss'

import { RiContactsFill } from 'react-icons/ri'

// Translation
import { useTranslation } from "react-i18next";

export const ContactsWidget = () => {
  const { t } = useTranslation();
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
      <h2 className="text-gray-500 text-[1.5625rem] text-center">{t("DashboardNormalUser.Home.contact.tittle")}</h2>
      <div className='w-full max-h-[100%] overflow-y-auto overflow-x-hidden'>
        {
          FourContacts ?
            FourContacts.map((Contact, i) => {
              return (
                <>
                  <div className='w-full flex items-center justify-center pt-2 pb-3' key={i}>
                    <img src={Contact.Photo} alt="perfilphoto" className='rounded-full w-[3rem] h-[3rem]' />
                    <div className='contact-layout'>
                      <span className='text-xl'>{`${Contact?.Name.split(' ')[0]} ${Contact?.Name.split(' ')[2]}`}</span>
                      <span className='separator-display text-xl mx-2'>|</span>
                      <div className='h-separator-display my-1'></div>
                      <span className='text-xl'>{Contact.Dui}</span>
                    </div>
                  </div>
                  {i !== 3 && <div className='w-[100%] h-[0.10rem] bg-[#707070] my-[0.25rem]'></div>}
                </>
              );
            })
            :
            <div className='w-100 h-[100%]  flex flex-col justify-center items-center'>
              <span className='text-2xl'>{t("DashboardNormalUser.Home.contact.desc2")}</span>
              <RiContactsFill className='w-[4rem] h-[6rem]' />
            </div>
        }
        {
          Contacts?.length < 3 && Contacts?.length !== 0 &&
          <div className={`mt-[${Contacts?.length === 1 ? '4' : '2'}em] flex flex-col justify-center items-center`}>
            <span className='text-2xl text-center'>{t("DashboardNormalUser.Home.contact.desc")}</span>
            <RiContactsFill className='w-[2rem] h-[4rem]' />
          </div>
        }
      </div>
    </>
  )
}
