import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useDash } from '../../../context/DashboardContext'
import perfilPhoto from './assets/img/profile-photo2.jpg'
import './DashElements/TransactionsComponents/scss/settings.scss'
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'
import { BiLoaderAlt } from 'react-icons/bi';
import { LanguageSwitcher } from '../../../components/LanguageSwitcher'


export const Settings = ({ hidden }) => {
  const { setSettingsOption, Info, UpdatePhoto } = useDash()

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState("");
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [CharginButton, setCharginButton] = useState(false);

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

  useEffect(() => {
    // console.log()
  }, [Info]);

  const handleChangeFile = (e) => {
    if (e.target.files.length !== 0) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0]);
    } else {
      setImageName("");
    }
  };

  const HandlerSubmitPhoto = async (e) => {
    e.preventDefault();
    let form = new FormData();
    if (Image) {
      let data = { Image: Image };
      for (let key in data) {
        form.append(key, data[key])
      }

    } else {
      setError('No ha seleccionado la imagen');
    }
    try {
      setCharginButton(true)
      setTimeout(() => {
        setCharginButton(false)
      }, 1500);
      const { data } = await UpdatePhoto(localStorage.getItem('authToken'), form)
      setSuccess('Foto actualizada correctamente')
      Info.PerfilPhoto.url = data.data.url
      Info.PerfilPhoto.public_id = data.data.public_id
      setError(null);
    } catch (error) {
      console.log(error)
    }
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
            <img src={Info?.PerfilPhoto?.url} alt="" className='rounded-xl h-[12rem] w-[16rem] mx-auto mt-3' />
            {
              Error || Success &&
              <div className='m-[-1rem] p-[-1rem]'>
                {Error && <p className='text-red-400 text-center m-0 p-0'>{Error}</p>}
                {Success && <p className='text-green-400 text-center m-0 p-0'>{Success}</p>}
              </div>
            }

            <form onSubmit={HandlerSubmitPhoto} className=' '>
              <div className="input-form input-file mx-auto mt-4">
                <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
                <label htmlFor="Constancia" className='label-form'>{ImageName === '' ? 'Foto de Perfil' : ImageName}</label>
                {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
              </div>
              <button type="submit" className='boton-settings' disabled={CharginButton}>{CharginButton ? <BiLoaderAlt className='animate-spin' /> : 'Cambiar'}</button>
            </form>
            <div className=''>
              <div className='w-[80%] mx-auto h-[0.12rem] bg-slate-500 mb-4 mt-2'></div>
              <span className='text-foto-de-perfil text-[#4E5364]'>Idioma</span>
              <LanguageSwitcher />
            </div>
          </div>

        </div>
      </div >
    </div >
  )
}
