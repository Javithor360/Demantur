import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useDash } from '../../../context/DashboardContext'
import perfilPhoto from './assets/img/profile-photo2.jpg'
import './DashElements/TransactionsComponents/scss/settings.scss'
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'


export const Settings = ({ hidden }) => {
  const { setSettingsOption } = useDash()

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState("");

  const Imagefunc = (UploadImage, SetImageName) => {
    if (UploadImage !== "") {
      let NameFinal = UploadImage;

      function file_extension(filename) {
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
      }
      let fileExtension = file_extension(UploadImage);
      NameFinal = UploadImage.trim();

      if (NameFinal.includes("." + fileExtension)) {
        NameFinal = NameFinal.replace(`.${fileExtension}`, "");
      }

      if (NameFinal.length >= 12) {
        NameFinal = NameFinal.substring(0, 12);
      }
      SetImageName(
        NameFinal + (NameFinal.length >= 12 ? "..." : ".") + fileExtension
      );
    }
  };

  useEffect(() => {
    Imagefunc(ImageName, setImageName);
  }, [ImageName]);

  const handleChangeFile = (e) => {
    if (e.target.files.length !== 0) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0]);
    } else {
      setImageName("");
    }
  };

  const HandlerSubmitPhoto = (e) => {
    // e.preventDefault();
    console.log('hola')
  }

  return (
    <div className={`absolute top-0 right-0 settings-div h-full ${hidden !== undefined ? hidden : ''} div-settings-modal`}  >
      <div className="w-[100%] h-[100%] relative">
        <div className="X-Settings absolute right-0">
          <FiX className="" onClick={() => { setSettingsOption(false) }} />
        </div>
        <div className="MainDiv-settings h-100">
          <span className="">Configuraciones</span>
          <div className='w-[80%] mx-auto h-[0.12rem] bg-slate-500 mb-4 mt-2'></div>
          <div className='w-100 h-5/6 flex flex-col'>

            <span className='text-foto-de-perfil text-[#4E5364]'>Foto de perfil</span>
            <img src={perfilPhoto} alt="" className='rounded-xl h-[12rem] w-[16rem] mx-auto mt-3' />

            <form onSubmit={HandlerSubmitPhoto}>
              <div className="input-form input-file mx-auto mt-4">
                <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
                <label htmlFor="Constancia" className='label-form'>{ImageName === '' ? 'Foto de Perfil' : ImageName}</label>
                {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
              </div>
              <button type="submit" className='boton-settings'>Cambiar</button>
            </form>

          </div>
        </div>
      </div >
    </div >
  )
}
