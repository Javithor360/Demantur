import './assets/scss/createSavingAccStyle.scss'
import Icon from './assets/img/icons/new-acc-icon.svg'
import { Navbar, Footer } from '../../components'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import Cleave from 'cleave.js/react';
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


export const CreateSavingAcc = () => {
  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState('');

  const [Image2, setImage2] = useState();
  const [ImageName2, setImageName2] = useState('');

  const [Image3, setImage3] = useState();
  const [ImageName3, setImageName3] = useState('');

  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active)
  }
  const Imagefunc = (Imagee, SetImageName) =>{
    if (Imagee !== '') {
      let NameFinal = Imagee

      function file_extension(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
      }
      let fileExtension = file_extension(Imagee);
      NameFinal = Imagee.trim()

      if (NameFinal.includes('.' + fileExtension)) {
        NameFinal = NameFinal.replace(`.${fileExtension}`, '')
      }

      if (NameFinal.length >= 12) {
        NameFinal = NameFinal.substring(0, 12)
      }
      SetImageName(NameFinal + (NameFinal.length >= 12 ? '...' : '.') + fileExtension);
    } 
  }

  useEffect(() => {
    Imagefunc(ImageName, setImageName)
  }, [ImageName])

  useEffect(() => {
    Imagefunc(ImageName2, setImageName2)
  }, [ImageName2])

  useEffect(() => {
    Imagefunc(ImageName3, setImageName3)
  }, [ImageName3])

  const handleChangeFile = (e) => {
    if (e.target.files.length !== 0) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0])
    } else {
      setImageName('');
    }
  }
  const handleChangeFile2 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName2(e.target.files[0].name);
      setImage2(e.target.files[0])
    } else {
      setImageName2('');
    }
  }
  const handleChangeFile3 = (e) => {
    if (e.target.files.length !== 0) {
      setImageName3(e.target.files[0].name);
      setImage3(e.target.files[0])
    } else {
      setImageName3('');
    }
  }

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden'
    }
  }, [active])
  const [DuiNumber, setDuiNumber] = useState();
  
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-[#F1F1F1] relative">
        <div className="w-full h-2/5 bg-[#323643] absolute"></div>
        <div className='w-screen h-screen flex items-center justify-center'>
          <div className='h-3/4 w-4/5 bg-white shadow-xl relative flex flex-row'>
            <div className='h-[100%] w-[60%] flex flex-col justify-center'>
              <div className="h-[20%] w-[100%] flex justify-center">
                <div className="circle-container absolute bg-white -top-14 shadow-md flex justify-center items-center">
                  <img className='w-3/6' src={Icon} alt="" />
                </div>
              </div>
              <div className="h-[80%]">
                <p className="create-account-tittle">Crea tu primera cuenta de ahorros</p>
                <hr className="black-line-2"></hr>
                <p className='text-center px-5 text-sm 2xl:text-base md:text-base'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <button className='create-btn my-10 text-center' onClick={toggle}>
                  Crear
                </button>
              </div>
            </div>
            <div className='create-acc-bg h-[100%] w-[40%]'></div>
          </div>
            { toggle &&
                  <Modal active={active} toggle={toggle} onRequestClose={toggle}>
                  
                    <div className='p-10 h-[53rem] w-[50rem] flex flex-col items-center'>
                      <p className='text-center text-[1.6rem] text-[#606470] mb-0'>Formulario de creación de Cuenta de Ahorro</p>
                      <hr className='w-3/4'/>
                      <form action="" className='w-full'>
                        <div className='flex flex-col w-full justify-center items-center'>
                          <p className='text-center text-[1.2rem] text-[#606470]'>Identificación</p>
                          <div className="input-class">
                            <Cleave id='Dui' name='Dui' placeholder=' ' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} onChange={(e) => setDuiNumber(e.target.value)} value={DuiNumber} autoComplete='off' className='input-form' />
                            <label htmlFor="Dui" className='label-form'>Número de DUI</label>
                          </div>
                          <p className='text-[#606470] text-[1.2rem] mt-4'>Imagen del DUI</p>
    
                          <div className="uploadImgContainer rounded-md w-[30%]">
                            <input type='file' accept='image/*' id='DuiImage' name='DuiImage' placeholder=' ' onChange={handleChangeFile} autoComplete='off' className=''/>
                            <label htmlFor="DuiImage" className='flex justify-between items-center w-full px-4 py-2'>{ImageName === '' ? 'Subir Imagen' : ImageName}
                              {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                            </label>
                          </div>
    
                          <hr className='w-3/4'/>
                          <p className='text-[#606470] text-[1.2rem] mt-2'>Constancias de referencias</p>
                          <div className='flex w-full justify-center'>
    
                            <div className='w-[30%] mr-5'>
                              <p className='text-center'>Referencia Personal</p>
    
                              <div className="uploadImgContainer rounded-md w-full">
                                <input type='file' accept='image/*' id='References1' name='References1' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' className=''/>
                                <label htmlFor="References1" className='flex justify-between items-center w-full px-4 py-2'>{ImageName2 === '' ? 'Subir Imagen' : ImageName2}
                                  {ImageName2 === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                                </label>
                              </div>
    
                            </div>
                            <div className='w-[30%]'>
                              <p className='text-center'>Referencia Laboral</p>
                              <div className="uploadImgContainer rounded-md w-full">
                                <input type='file' accept='image/*' id='References2' name='References2' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' className=''/>
                                <label htmlFor="References2" className='flex justify-between items-center w-full px-4 py-2'>{ImageName3 === '' ? 'Subir Imagen' : ImageName3}
                                  {ImageName3 === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                                </label>
                              </div>
                            </div>
                          </div>
                          <hr className='w-3/4 mt-4'/>
                          <div className='flex w-full justify-center'>
                            <div className='w-2/5 flex flex-col justify-center mr-4'>
                              <p className='text-center'>¿Por qué quieres abrir esta cuenta?</p>
                              <textarea name="" id="" cols="30" rows="10" className='w-full max-h-[10rem] min-h-[10rem] outline-none'></textarea>
                            </div>
                            <div className='w-2/5 flex flex-col justify-center'>
                              <p className='text-center'>¿Por qué quieres abrir esta cuenta?</p>
                              <textarea name="" id="" cols="30" rows="10" className='w-full max-h-[10rem] min-h-[10rem] outline-none'></textarea>
                            </div>
                          </div>
                          <button type='submit' className='mt-5 create-saving-acc-btn'>
                            Enviar
                          </button>
                        </div>
                      </form>
                  </div>
                </Modal>
            
            }
            
        </div>
        
      </div>
      <Footer />
    </>
    
    
  )
}
