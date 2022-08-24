//styles
import './assets/scss/RegisterCard.scss'

// hooks
import { Link } from 'react-router-dom'

//assets (icons)
import { MdOutlinePublishedWithChanges as Change } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { useTranslation } from "react-i18next";
import { FiLogIn } from 'react-icons/fi'


export const RegisterCard = () => {
  const { t } = useTranslation();
  return (
    <div className='TarjetDiv'>
      <h1>{t("login.contentreg.tittle")}</h1>
      <hr />
      <p>{t("login.contentreg.subtitle")}</p>
      <div className="small-div-container">
        <Link to='/auth/normal-user/login' className='Link-container'><div className='small-div'><FiLogIn className='icons' /><p>{t("login.contentreg.subtitle2")}</p></div></Link>
        <Link to='/auth/forgot-password' className='Link-container'><div className='small-div'><Change className='icons' /><p>{t("login.contentreg.subtitle3")}</p></div></Link>
        <Link to='/auth/verify-email' className='Link-container'><div className='small-div'><HiOutlineMail className='icons icon-3' /><p>{t("login.contentreg.subtitle4")}</p></div></Link>
      </div>
      <hr />
    </div>
  )
}
