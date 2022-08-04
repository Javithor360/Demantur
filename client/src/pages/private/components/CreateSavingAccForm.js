//icons
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai';
//hooks
import { useEffect, useState } from 'react';
import Cleave from 'cleave.js/react';
import { useDash } from '../../../context/DashboardContext';
import { useNavigate } from 'react-router-dom'

export const CreateSavingAccForm = () => {
  const { CreateElements } = useDash();
  const navigate = useNavigate()

  const [DuiNumber, setDuiNumber] = useState();

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState('');

  const [Image2, setImage2] = useState();
  const [ImageName2, setImageName2] = useState('');

  const [Image3, setImage3] = useState();
  const [ImageName3, setImageName3] = useState('');

  const Imagefunc = (UploadImage, SetImageName) => {
    if (UploadImage !== '') {
      let NameFinal = UploadImage

      function file_extension(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
      }
      let fileExtension = file_extension(UploadImage);
      NameFinal = UploadImage.trim()

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

  const HandleForm = (e) => {
    e.preventDefault()
    CreateElements(localStorage.getItem('authToken'));
    navigate('/dashboard')
  }

  return (
    <div className='p-10 h-[53rem] w-[50rem] flex flex-col items-center'>
      <p className='text-center text-[1.6rem] text-[#606470] mb-0'>
        Formulario de creación de Cuenta de Ahorro
      </p>
      <hr className='w-3/4' />
      <form onSubmit={HandleForm} className='w-full'>
        <div className='flex flex-col w-full justify-center items-center'>
          <p className='text-center text-[1.2rem] text-[#606470]'>Identificación</p>
          <div className="input-class">
            <Cleave id='Dui' name='Dui' placeholder=' ' options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} onChange={(e) => setDuiNumber(e.target.value)} value={DuiNumber} autoComplete='off' className='input-form' />
            <label htmlFor="Dui" className='label-form'>Número de DUI</label>
          </div>
          <p className='text-[#606470] text-[1.2rem] mt-4'>Imagen del DUI</p>
          <div className="uploadImgContainer rounded-md w-[35%]">
            <input type='file' accept='image/*' id='DuiImage' name='DuiImage' placeholder=' ' onChange={handleChangeFile} autoComplete='off' className='' />
            <label htmlFor="DuiImage" className='flex justify-between items-center w-full px-4 py-2 mr-1'>{ImageName === '' ? 'Subir Imagen' : ImageName}
              {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
            </label>
          </div>
          <hr className='w-3/4' />
          <p className='text-[#606470] text-[1.2rem] mt-2'>Constancias de referencias</p>
          <div className='flex w-full justify-center'>
            <div className='w-[35%] mr-5'>
              <p className='text-center'>Referencia Personal</p>
              <div className="uploadImgContainer rounded-md w-full">
                <input type='file' accept='image/*' id='References1' name='References1' placeholder=' ' onChange={handleChangeFile2} autoComplete='off' className='' />
                <label htmlFor="References1" className='flex justify-between items-center w-full px-4 py-2 mr-1'>{ImageName2 === '' ? 'Subir Imagen' : ImageName2}
                  {ImageName2 === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                </label>
              </div>
            </div>
            <div className='w-[35%]'>
              <p className='text-center'>Referencia Laboral</p>
              <div className="uploadImgContainer rounded-md w-full">
                <input type='file' accept='image/*' id='References2' name='References2' placeholder=' ' onChange={handleChangeFile3} autoComplete='off' className='' />
                <label htmlFor="References2" className='flex justify-between items-center w-full px-4 py-2 mr-1'>{ImageName3 === '' ? 'Subir Imagen' : ImageName3}
                  {ImageName3 === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                </label>
              </div>
            </div>
          </div>
          <hr className='w-3/4 mt-4' />
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
  )
}
