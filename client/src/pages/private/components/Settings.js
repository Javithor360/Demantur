import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useDash } from '../../../context/DashboardContext'
import './DashElements/TransactionsComponents/scss/settings.scss'
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'
import { BiLoaderAlt } from 'react-icons/bi';
import { LanguageSwitcher } from '../../../components/LanguageSwitcher'
import { ChangeEmail, DefaultElement, ChangePassword, EmailCode, SuccessPass, SuccessEmail } from './SettingsElements/Index'

// Translation
import { useTranslation } from "react-i18next";

export const Settings = ({ hidden }) => {
  const { t } = useTranslation();

  const { setSettingsOption, Info, UpdatePhoto } = useDash()

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState("");
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [CharginButton, setCharginButton] = useState(false);
  const [Email, setEmail] = useState(null);

  const [SwitchValue, setSwitchValue] = useState(1);

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

  useEffect(() => {
    if (Info?.ChangeEmailCode) {
      setSwitchValue(5);
    }
  }, [Info]);

  const DisplayElements = () => {
    switch (SwitchValue) {
      case 1:
        return <DefaultElement setSwitchValue={setSwitchValue} />;
      case 2:
        return <ChangeEmail setSwitchValue={setSwitchValue} setEmail={setEmail} />
      case 3:
        return <ChangePassword setSwitchValue={setSwitchValue} />
      case 4:
        return <SuccessPass setSwitchValue={setSwitchValue} />
      case 5:
        return <EmailCode setSwitchValue={setSwitchValue} Email={Email} />
      case 6:
        return <SuccessEmail setSwitchValue={setSwitchValue} />
      default:
        return <DefaultElement setSwitchValue={setSwitchValue} />
    }
  }

  return (
    <div className={`absolute top-0 right-0 settings-div h-full ${hidden !== undefined ? hidden : ''} div-settings-modal`}  >
      <div className="w-[100%] h-[100%] relative">
        <div className="X-Settings absolute right-0">
          <FiX className="" onClick={() => { setSettingsOption(false) }} />
        </div>
        <div className="MainDiv-settings h-100">
          <span className="">{t("DashboardNormalUser.Setting.tittle")}</span>
          <div className='w-[80%] mx-auto h-[0.12rem] bg-slate-500 mb-4 mt-2'></div>
          <div className='w-100 h-5/6 flex flex-col'>

            <span className='text-foto-de-perfil text-[#4E5364]'>{t("DashboardNormalUser.Setting.desc")}</span>
            <img src={Info?.PerfilPhoto?.url} alt="" className='rounded-xl h-[12rem] w-[16rem] mx-auto mt-3' />
            {
              (Error || Success) &&
              <div className='mb-[-1rem] p-b[-1rem] mt-2'>
                {Error && <p className='text-red-400 text-center m-0 p-0'>{Error}</p>}
                {Success && <p className='text-green-400 text-center m-0 p-0'>{Success}</p>}
              </div>
            }

            <form onSubmit={HandlerSubmitPhoto} className=' '>
              <div className="input-form input-file mx-auto mt-4">
                <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
                <label htmlFor="Constancia" className='label-form'>{ImageName === '' ? <span>{t("DashboardNormalUser.Setting.desc")}</span> : ImageName}</label>
                {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
              </div>
              <button type="submit" className='boton-settings' disabled={CharginButton}>{CharginButton ? <BiLoaderAlt className='animate-spin' /> : <span className='text-base'>{t("DashboardNormalUser.Setting.button")}</span>}</button>
            </form>
            <div className=''>
              <div className='w-[80%] mx-auto h-[0.12rem] bg-slate-500 mb-4 mt-2'></div>
              <span className='text-foto-de-perfil text-[#4E5364]'>{t("DashboardNormalUser.Setting.language")}</span>
              <LanguageSwitcher />
            </div>
            <div className='mt-4 h-full'>
              <div className='w-[80%] mx-auto h-[0.16rem] bg-slate-500 mb-4 mt-2'></div>
              <span className='text-foto-de-perfil text-[#4E5364]'>Cambiar datos</span>
              <div className=' w-100 px-4 py-2 h-full'>
                {DisplayElements()}
              </div>
            </div>
          </div>

        </div>
      </div >
    </div >
  )
}
