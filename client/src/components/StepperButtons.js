import { useAuth } from '../context/AuthContext'
import { FiArrowRight as Arrrow, FiArrowLeft } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'
import { useTranslation } from "react-i18next";

export const StepperButtons = () => {
  const { t } = useTranslation();
  const { page, setPage, Chargin } = useAuth()

  const backButton = () => {
    let value;
    if (page === 1) {
      value = 1;
      setPage(value)
    } else {
      setPage(page - 1)
    }
  }

  return (
    <>
      {/* navigation control */}
      <div className='step-buttons'>
        {page !== 5 && <span className={page !== 1 ? 'boton-anterior botones-steps' : 'boton-anterior-desactivado botones-steps'} onClick={backButton} >
          <FiArrowLeft className='arrow-ico-re' />
          <div className='divisor'></div>
          <span>{t("login.buttons.previous")}</span>
        </span>}

        <button className={page < 4 ? 'boton-siguiente botones-steps' : 'boton-siguiente boton-siguiente-terminar botones-steps '} type='submit' disabled={Chargin === true && true} >
          {
            Chargin === true ?
              <><VscLoading className='CharginIcon' /></>
              :
              <>
                <span>{page === 5 && 'Enviar'}{page < 4 && 'Siguente'}{page === 4 && 'Terminar'}</span>
                <div className='divisor'></div>
                <Arrrow className='arrow-ico-re' />
              </>
          }
        </button>
      </div>
    </>
  )
}
