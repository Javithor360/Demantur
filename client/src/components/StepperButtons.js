import { useAuth } from '../context/AuthContext'
import { FiArrowRight as Arrrow, FiArrowLeft } from 'react-icons/fi'

export const StepperButtons = () => {
  const { page, setPage } = useAuth()

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
        <span className={page !== 1 ? 'boton-anterior botones-steps' : 'boton-anterior-desactivado botones-steps'} onClick={backButton} >
          <FiArrowLeft className='arrow-ico-re' />
          <div className='divisor'></div>
          <span>ANTERIOR</span>
        </span>

        <button className={page !== 4 ? 'boton-siguiente botones-steps' : 'boton-siguiente boton-siguiente-terminar botones-steps'} type='submit' >
          <span>{page !== 4 ? 'Siguente' : 'Terminar'}</span>
          <div className='divisor'></div>
          <Arrrow className='arrow-ico-re' />
        </button>
      </div>
    </>
  )
}
