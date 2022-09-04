import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useDash } from '../../../context/DashboardContext'
import './DashElements/TransactionsComponents/scss/settings.scss'
import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'
import { BiLoaderAlt } from 'react-icons/bi';
import { LanguageSwitcher } from '../../../components/LanguageSwitcher'
import { ChangeEmail, DefaultElement, ChangePassword, EmailCode, SuccessPass, SuccessEmail, PasswordCode } from './SettingsElements/Index'

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
      setEmail(Info.NewEmail)
      setSwitchValue(5);
    }
    if (Info?.ChangePassCode) {
      setSwitchValue(7)
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
        return <SuccessEmail setSwitchValue={setSwitchValue}/>
      case 7:
        return <PasswordCode setSwitchValue={setSwitchValue} />
      // =================================================
      default:
        return <DefaultElement setSwitchValue={setSwitchValue} />
    }
  }

  return (
    <>
      <div className={`absolute top-0 left-0 w-[100%] h-[100%] bg-[#32364398] ${hidden !== undefined ? hidden : ''}`} ></div>
      <div className={`absolute top-0 right-0 settings-div h-full ${hidden !== undefined ? hidden : ''} div-settings-modal overflow-y-auto overflow-x-hidden scroll-settings`}  >
        <div className="w-[100%] h-[100%] relative">
          <div className="X-Settings absolute right-0">
            <FiX className="" onClick={() => { setSettingsOption(false) }} />
          </div>
          <div className="MainDiv-settings h-full">
            <span className="">{t("DashboardNormalUser.Setting.tittle")}</span>
            <div className='w-[80%] mx-auto h-[0.11rem] bg-[#323643] mb-3 mt-2'></div>
            <div className='w-full h-5/6 flex flex-col'>
            <div className='flex flex-col h-fit justify-center items-center mb-2'>
              <span className='text-foto-de-perfil text-[#4E5364] m-2'>{t("DashboardNormalUser.Setting.desc")}</span>
              <div className='max-h-[12rem] min-w-[80%] '> 
                <img src={Info?.PerfilPhoto?.url} alt="" className='rounded-xl m-auto w-[100%] max-h-[100%] object-cover bg-center' />
              </div>
                {
                  (Error || Success) &&
                  <div className='mb-[-1rem] p-b[-1rem] mt-2'>
                    {Error && <p className='text-red-400 text-center my-2 p-0'>{Error}</p>}
                    {Success && <p className='text-green-400 text-center my-2 p-0'>{Success}</p>}
                  </div>
                }
            </div>
              
              <form onSubmit={HandlerSubmitPhoto} className=' '>
                <div className="input-form input-file mx-auto my-3">
                  <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' className=''/>
                  <label htmlFor="Constancia" className='label-form cursor-pointer'>{ImageName === '' ? <span className='cursor-pointer m-0 p-0 select-none'>{t("DashboardNormalUser.Setting.desc")}</span> : ImageName}</label>
                  {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
                </div>
                <button type="submit" className='boton-settings mb-3' disabled={CharginButton}>{CharginButton ? <BiLoaderAlt className='animate-spin' /> : <span className='text-base'>{t("DashboardNormalUser.Setting.button")}</span>}</button>
              </form>
              <div className='mb-4'>
                <div className='w-[80%] mx-auto h-[0.12rem] mt-2 mb-3 bg-[#989398]'></div>
                <div className='dash-lang-select h-fit'>
                  <p className='text-foto-de-perfil text-[#4E5364] mb-2'>{t("DashboardNormalUser.Setting.language")}</p>
                  <LanguageSwitcher />
                </div>
              </div>
              <div className='h-full'>
                <div className='w-[80%] mx-auto h-[0.16rem] bg-[#989398] mb-4'></div>
                <span className='text-[1.5rem] text-[#4E5364]'>Cambiar datos</span>
                <div className=' w-100 px-4 pt-2 pb-5 h-full'>
                  {DisplayElements()}
                </div>
              </div>

            </div>
          </div >
        </div >
      </div>
    </>
  )
}
