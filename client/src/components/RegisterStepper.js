import { useAuth } from '../context/AuthContext'

import './assets/scss/stepper-control.scss'

//assets
import { RiUser3Fill } from 'react-icons/ri'
import { FaFingerprint, FaMoneyBillAlt } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'

export const  RegisterStepper = () => {
  const { stateOfStep1, stateOfStep2, stateOfStep3, stateOfStep4 } = useAuth()

  let classFirstIcon, classSecondIcon, classThirdIcon, classFourIcon = 'ball-icon';
  let classFirstLine, classSecondLine, classThirdLine = 'stepper-line';
  let classFirstDes, classSecondDes, classThirdDes, classFourDes = 'ball-description';

  if (stateOfStep1 === 'focus') { classFirstIcon = 'ball-icon ball-icon-focus'; classFirstLine = 'stepper-line stepper-line-focus'; classFirstDes = 'ball-description ball-description-focus' }
  if (stateOfStep1 === 'complete') { classFirstIcon = 'ball-icon ball-icon-complete'; classFirstLine = 'stepper-line stepper-line-complete'; classFirstDes = 'ball-description ball-description-complete' }
  if (stateOfStep1 === 'error') { classFirstIcon = 'ball-icon ball-icon-error'; classFirstLine = 'stepper-line stepper-line-error'; classFirstDes = 'ball-description ball-description-error' }

  if (stateOfStep2 === 'focus') { classSecondIcon = 'ball-icon ball-icon-focus'; classSecondLine = 'stepper-line stepper-line-focus'; classSecondDes = 'ball-description ball-description-focus' }
  if (stateOfStep2 === 'unfocus') { classSecondIcon = 'ball-icon ball-icon-unfocus'; classSecondLine = 'stepper-line stepper-line-unfocus'; classSecondDes = 'ball-description ball-description-unfocus' }
  if (stateOfStep2 === 'complete') { classSecondIcon = 'ball-icon ball-icon-complete'; classSecondLine = 'stepper-line stepper-line-complete'; classSecondDes = 'ball-description ball-description-complete' }
  if (stateOfStep2 === 'error') { classSecondIcon = 'ball-icon ball-icon-error'; classSecondLine = 'stepper-line stepper-line-error'; classSecondDes = 'ball-description ball-description-error' }

  if (stateOfStep3 === 'focus') { classThirdIcon = 'ball-icon ball-icon-focus'; classThirdLine = 'stepper-line stepper-line-focus'; classThirdDes = 'ball-description ball-description-focus' }
  if (stateOfStep3 === 'unfocus') { classThirdIcon = 'ball-icon ball-icon-unfocus'; classThirdLine = 'stepper-line stepper-line-unfocus'; classThirdDes = 'ball-description ball-description-unfocus' }
  if (stateOfStep3 === 'complete') { classThirdIcon = 'ball-icon ball-icon-complete'; classThirdLine = 'stepper-line stepper-line-complete'; classThirdDes = 'ball-description ball-description-complete' }
  if (stateOfStep3 === 'error') { classThirdIcon = 'ball-icon ball-icon-error'; classThirdLine = 'stepper-line stepper-line-error'; classThirdDes = 'ball-description ball-description-error' }

  if (stateOfStep4 === 'focus') { classFourIcon = 'ball-icon ball-icon-focus'; classFourDes = 'ball-description ball-description-focus' }
  if (stateOfStep4 === 'complete') { classFourIcon = 'ball-icon ball-icon-complete'; classFourDes = 'ball-description ball-description-complete' }
  if (stateOfStep4 === 'error') { classFourIcon = 'ball-icon ball-icon-error'; classFourDes = 'ball-description ball-description-error' }

  return (
    <>
      <div className='stepper'>
        {/* step 1 */}
        <div className='stepper-ball'>
          <div className={classFirstDes}>Datos Personales</div>
          <div className={classFirstIcon}><RiUser3Fill /></div>
        </div>
        <div className='stepper-container-line'>
          <div className={classFirstLine}></div>
        </div>

        {/* step 2 */}
        <div className='stepper-ball'>
          <div className={classSecondDes}>Identificacion</div>
          <div className={classSecondIcon}><FaFingerprint /></div>
        </div>
        <div className='stepper-container-line'>
          <div className={classSecondLine}></div>
        </div>

        {/* step 3 */}
        <div className='stepper-ball'>
          <div className={classThirdDes}>Datos Monetarios</div>
          <div className={classThirdIcon}><FaMoneyBillAlt /></div>
        </div>
        <div className='stepper-container-line'>
          <div className={classThirdLine}></div>
        </div>

        {/* step 4 */}
        <div className='stepper-ball'>
          <div className={classFourDes}>Beneficiario</div>
          <div className={classFourIcon}><HiUsers /></div>
        </div>
      </div>
    </>
  )
}
