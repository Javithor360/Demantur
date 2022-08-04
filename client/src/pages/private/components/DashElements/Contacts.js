import '../assets/scss/Contacts_main.scss'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { RiLoader3Fill as IconChargin } from 'react-icons/ri'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDash } from '../../../../context/DashboardContext'
import { useEffect } from 'react'


export const Contacts = () => {
  const HeaderImages = require.context('../assets/img/', true);
  const [NombreInput, setNombreInput] = useState('');
  const [CharginIco, setCharginIco] = useState(true);
  const [Contacts, setContacts] = useState([]);

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 5, 6, 7];
  const array3 = [];

  const SeparadorArrays = (array1, array2) => {
    for (let index1 = 0; index1 < array1.length; index1++) {
      let igual = false;
      for (let index2 = 0; index2 < array2.length; index2++) {
        if (array1[index1] === array2[index2]) {
          igual = true;
        }
      }
      if (!igual) {
        array3.push(array1[index1]);
      }
    }
  }

  const { getContacts, GlobalInfo } = useDash();

  useEffect(() => {
    getContacts(localStorage.getItem('authToken'));

    let mayor, menor;
    if (array1 > array2) mayor = array1; menor = array2;
    if (array2 > array1) mayor = array2; menor = array1;

    SeparadorArrays(mayor, menor);
    console.log(array3);

    setTimeout(() => {
      setCharginIco(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setContacts(GlobalInfo.Contacts);
  }, [GlobalInfo])


  // SearchHanddler
  const SearchFunct = (e) => {
    e.preventDefault()
    alert(NombreInput)
  }

  return (
    <div className="contacts-main-div h-100 flex justify-between">
      <div className='divs-contact contacts-big-div  w-[60%]'>
        <h2 className='text-gray-500'>Tus Contactos</h2>
        <div className='line-contacts w-[40%] mx-auto' ></div>
        <div className={` w-[80%] mx-auto my-6 h-[80%] ${CharginIco === true && ' flex justify-center items-center'}`}>
          <div className=''>
            {
              CharginIco === true ?
                <IconChargin className='loading-icon animate-spin-custom h-[8rem] w-[8rem]' />
                : <div>
                  SUS Contactos: {Contacts.length === 0 ? "nohay" : Contacts}
                </div>
            }
          </div>
        </div>
      </div>


      <div className='divs-contact contacts-small-div w-[37%]'>
        <h2 className='text-gray-500'>Agregar Contacto</h2>
        <div className='line-contacts w-[70%] mx-auto '></div>
        <div className='p-4 h-[90%]'>
          <div className='container-contact-input w-[90%] mx-auto '>
            <form onSubmit={SearchFunct} className='h-100 w-[100%] mx-auto flex justify-center '>
              <input id='Nombre' name='Nombre' placeholder='Nombre Completo' onChange={(e) => setNombreInput(e.target.value)} value={NombreInput} autoComplete='off' className='input-contact-dui px-[1rem] py-[0.4rem] w-[100%] h-100 text-xl' />
              <button type='submit' className='boton-contacts w-[14%]'><FiSearch /></button>
            </form>
          </div>
          <div className='searched-contacts flex flex-col justify-evenly'>

            <div className='flex h-[16%] justify-evenly items-center bg-zinc-50'>
              <div className=" w-[15%] h-100 flex justify-center items-center"> {/*   */}
                <div className='profile-img'>
                  <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
                </div>
              </div>
              <div className='w-[60%] h-100'>
                <span>ALvin Josue Melendez Serrano</span>
                <hr />
                <span>Dui: 123456-7</span>
              </div>
              <div className='w-[20%] h-100 '>
                <button>agregar</button>
              </div>
            </div>

            <div className=' flex h-[16%] justify-evenly items-center'>
              <div className=" w-[15%] h-100 "> {/*  flex justify-center items-center */}
                {/* <div className='profile-img'>
                  <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
                </div> */}
                <Skeleton className='h-100 w-100' />

              </div>
              <div className='w-[60%] h-100'>
                <span><Skeleton className='h-[47%]' /></span>
                {/* <hr /> */}
                <span><Skeleton className='h-[47%]' /></span>
                {/* <Skeleton className='h-100 w-100' /> */}
              </div>
              <div className='w-[20%] h-100 '>
                {/* <button>agregar</button> */}
                <Skeleton className='h-100 w-100' />
              </div>
            </div>

            <div className=' flex h-[16%] justify-evenly items-center'>
              <div className=" w-[15%] h-100 "> {/*  flex justify-center items-center */}
                {/* <div className='profile-img'>
                  <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
                </div> */}
                <Skeleton className='h-100 w-100' />

              </div>
              <div className='w-[60%] h-100'>
                <span><Skeleton className='h-[47%]' /></span>
                {/* <hr /> */}
                <span><Skeleton className='h-[47%]' /></span>
                {/* <Skeleton className='h-100 w-100' /> */}
              </div>
              <div className='w-[20%] h-100 '>
                {/* <button>agregar</button> */}
                <Skeleton className='h-100 w-100' />
              </div>
            </div>

            <div className=' flex h-[16%] justify-evenly items-center'>
              <div className=" w-[15%] h-100 "> {/*  flex justify-center items-center */}
                {/* <div className='profile-img'>
                  <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
                </div> */}
                <Skeleton className='h-100 w-100' />

              </div>
              <div className='w-[60%] h-100'>
                <span><Skeleton className='h-[47%]' /></span>
                {/* <hr /> */}
                <span><Skeleton className='h-[47%]' /></span>
                {/* <Skeleton className='h-100 w-100' /> */}
              </div>
              <div className='w-[20%] h-100 '>
                {/* <button>agregar</button> */}
                <Skeleton className='h-100 w-100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
